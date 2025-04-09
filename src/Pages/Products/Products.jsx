import React, { useState, useEffect } from "react";
import "./Products.css";
import Modal from "../../Components/Modals/Modal";
import MainTable from "../../Components/Table/Table";
import { ButtonGroup, Button, Link } from "@mui/material";

export default function Products() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [products, setProducts] = useState([]);
  const [rows, setRows] = useState([]);
  let [productName, setProductName] = useState("");
  let [productPrice, setProductPrice] = useState(null);
  let [productRate, setProductRate] = useState(5);
  let [productStock, setProductStock] = useState(null);
  let [productSells, setProductSells] = useState(null);
  let [productColors, setProductColors] = useState(1);
  let [productDescription, setProductDescription] = useState("");

  //getting products from data center
  useEffect(() => {
    fetch(
      `https://persian-cms-8bd51-default-rtdb.europe-west1.firebasedatabase.app/products.json`
    )
      .then((res) => res.json())
      .then((data) => {
        let productsArray = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });
        setRows(productsArray);
      });
  }, [products]);

  //table columns
  let columns = [
    { field: "name", headerName: "نام محصول", align: "right" },
    { field: "price", headerName: "قیمت محصول", align: "right" },
    { field: "stock", headerName: "موجودی محصول", align: "right" },
    { field: "sells", headerName: "فروش محصول", align: "right" },
    { field: "colors", headerName: "رنگ بندی ", align: "right" },
    // { field: "description", headerName: " توضیحات", align: "right" },
    { field: "rate", headerName: "آمتیاز محصول", align: "right" },
    {
      field: "actions",
      headerName: "Actions ",
      align: "left",
      renderCell: (row) => (
        <ButtonGroup>
          <Button
            className="details-button"
            variant="primary"
            size="small"
            style={{ border: "1px solid var(--color-primary)" }}
          >
            جزییات
          </Button>

          <Button
            className="edit-button"
            variant="danger"
            size="small"
            style={{ border: "1px solid var(--color-primary)" }}
            onClick={() => onEdit(row.id)}
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
              setModalType("delete");
              setDeleteId(row.id);
            }}
          >
            حذف
          </Button>
        </ButtonGroup>
      ),
    },
  ];

  const addNewProductFunction = () => {
    let newProduct = {
      name: productName,
      price: productPrice,
      stock: productStock,
      rate: productRate,
      sells: productSells,
      colors: productColors,
      description: productDescription,
    };

    fetch(
      `https://persian-cms-8bd51-default-rtdb.europe-west1.firebasedatabase.app/products.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts([...products, newProduct]);

        setProductName("");
        setProductPrice("");
        setProductRate("");
        setProductStock("");
        setProductSells("");
        setProductColors("");
        setProductDescription("");

        setIsShowModal(false);
      });
  };

  const onEdit = (id) => {};

  let deleteFunction = (id) => {
    fetch(
      `https://persian-cms-8bd51-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        console.log("حذف شد")
        setProducts(products.filter((product) => product.id !== id ))
        setIsShowModal(false)
        setModalType("");
        setDeleteId(null);
        console.log(isShowModal)
      }
    });
  };

  const handleCancelModal = () => {
    setIsShowModal(false);
    setModalType("");
    setDeleteId(null);
  };

  return (
    <div className="products-wrapper">
      <div className="products-container">
        <h1>اضافه کردن محصول جدید</h1>
        <div className="add-new-product-form__container">
          <form className="add-new-product-form">
            <div className="form-group">
              <input
                value={productName}
                type="text"
                id="product-name"
                onChange={(e) => setProductName(e.target.value)}
                placeholder=" نام محصول را وارد کنید"
              />
            </div>
            <div className="form-group">
              <input
                value={productPrice}
                type="text"
                id="product-price"
                onChange={(e) => setProductPrice(e.target.value)}
                placeholder="قیمت محصول را وارد کنید"
              />
            </div>
            <div className="form-group">
              <input
                value={productStock}
                type="text"
                id="product-stock"
                onChange={(e) => setProductStock(e.target.value)}
                placeholder="موجودی محصول را وارد کنید "
              />
            </div>
            <div className="form-group">
              <input
                value={productRate}
                type="text"
                id="product-popularity"
                onChange={(e) => setProductRate(e.target.value)}
                placeholder="میزان محبوبیت محصول را مشخص کنید "
              />
            </div>
            <div className="form-group">
              <input
                value={productSells}
                id="product-sells"
                onChange={(e) => setProductSells(e.target.value)}
                placeholder="  میزان فروش محصول را وارد کنید"
              ></input>
            </div>
            <div className="form-group">
              <input
                value={productColors}
                id="product-colors"
                onChange={(e) => setProductColors(e.target.value)}
                placeholder="تعداد رنگ بندی محصول را وارد کنید"
              ></input>
            </div>
            <div className="form-group">
              <textarea
                value={productDescription}
                id="product-description"
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="توضیحات خود را بنویسید "
              ></textarea>
            </div>
          </form>
          <div className="button-container">
            <button
              type="submit"
              onClick={() => {
                setModalType("add");
                setIsShowModal(true);
              }}
            >
              اضافه کردن
            </button>
          </div>
        </div>
      </div>
      <MainTable columns={columns} rows={rows} />
      {(isShowModal && modalType == "add" && (
        <Modal
          isShow={isShowModal}
          message="ایا میخواهید محصول اضافه شود؟"
          submitAction={addNewProductFunction}
          cancelAction={handleCancelModal}
        />
      )) ||
        (modalType == "delete" && (
          <Modal
            isShow={isShowModal}
            message="ایا مطمینید که میخواهید این محصول را حذف کنید؟"
            submitAction={() => deleteFunction(deleteId)}
            cancelAction={handleCancelModal}
          />
        ))}
    </div>
  );
}
