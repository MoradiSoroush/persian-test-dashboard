import React, { useState, useEffect } from "react";
import "./Comments";
import MainTable from "../../Components/MainTable/MainTable";
import ErrorBox from "../../Components/Errorbox/Errorbox";
import { Button, ButtonGroup } from "@mui/material";
import "./Comments.css";
import { Link } from "react-router-dom";
import Modal from "../../Components/Modals/Modal";
import Swal from "sweetalert2";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [answer, setAnswer] = useState("");
  const [commentId, setCommentId] = useState(null);
  const [isShowComment, setIsShowComment] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState([]);
  const [isIgnored, setIsIgnored] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/comments")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response wan not ok");
        }
        return res.json();
      })
      .then((comments) => setComments(comments));
  }, []);

  let columns = [
    {
      field: "index",
      headerName: "ردیف",

      align: "center",
      renderCell: (row, index) => index + 1, // ایندکس از ۱ شروع می‌شود
    },
    { field: "userID", headerName: "نام کاربر", align: "right" },
    { field: "productID", headerName: "نام محصول", align: "right" },
    {
      field: "body",
      headerName: "کامنت ",
      align: "right",
      renderCell: (row) => (
        <ButtonGroup>
          <Button
            className="details-button"
            variant="primary"
            size="small"
            style={{ border: "1px solid var(--color-primary)" }}
            onClick={() => {
              setIsShowComment(true);
              setCommentId(row.id);
              handleShowComment(row.id);
            }}
          >
            نمایش کامنت
          </Button>
        </ButtonGroup>
      ),
    },
    { field: "date", headerName: "تاریخ ", align: "right" },
    { field: "hour", headerName: "ساعت  ", align: "right" },
    // { field: "description", headerName: " توضیحات", align: "right" },
    // { field: "rate", headerName: "آمتیاز محصول", align: "right" },
    {
      field: "actions",
      headerName: "مدیریت ",
      align: "center",
      renderCell: (row) => (
        <ButtonGroup>
          <Button
            className="submit-button"
            variant="danger"
            size="small"
            style={{ border: "1px solid var(--color-primary)" }}
            onClick={() => {
              setCommentId(row.id);
              setIsConfirmed((prevId) => [...prevId, row.id]);
            }}
          >
            تایید
          </Button>

          <Button
            className="ignore-button"
            variant="danger"
            size="small"
            style={{ border: "1px solid var(--color-primary)" }}
            onClick={() => {
              setCommentId(row.id);
              setIsConfirmed((prevId) => prevId.filter((id) => id !== row.id));
            }}
          >
            رد
          </Button>
          <Button
            className="edit-button"
            variant="danger"
            size="small"
            style={{ border: "1px solid var(--color-primary)" }}
            onClick={() => {
              setIsShowComment(true);
              setCommentId(row.id);
            }}
          >
            ویرایش
          </Button>
          <Button
            className="delete-button"
            variant="danger"
            size="small"
            style={{ color: "red" }}
            onClick={() => {
              setIsShowModal(true);
              setDeleteId(row.id);
              handleDeleteComment(row.id);
            }}
          >
            حذف
          </Button>
        </ButtonGroup>
      ),
    },
  ];

  const handleShowComment = (commentId) => {
    const comment = comments.find((comment) => comment.id === commentId);
    Swal.fire({
      title: "کاربر :" + comment.userID,
      text: comment.body,
    });
  };

  const handleDeleteComment = (commentId) => {
    Swal.fire({
      title: "  از حذف این کامنت مطمینید؟",
      text: "این عمل غیر قابل بازگشت است",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "کنسل",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "حذف ",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/api/comments/${commentId}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            if (res.ok) {
              Swal.fire({
                title: "کامنت با موفقیت حذف شد",
                text: "",
                icon: "success",
              });

             return res.json(); 
            }
            
          })
          .then(() => {
            setComments((prevComments) =>
              prevComments.filter((comment) => comment.id !== commentId)
            );
            setDeleteId(null);
          });
      }
    });
  };

  return (
    <>
      <div className="comments-container">
        <h1 className="comments-title"> کامنت ها</h1>
        {comments.length === 0 ? (
          <ErrorBox />
        ) : (
          <MainTable
            columns={columns}
            rows={comments}
            isConfirmed={isConfirmed}
            Id={commentId}
          />
        )}
      </div>
    </>
  );
}
