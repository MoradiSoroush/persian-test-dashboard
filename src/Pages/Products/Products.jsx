import React, { useState, useEffect } from "react";
import "./Products.css";
import Modal from "../../Components/Modals/Modal";

import ProductsTable from "./ProductsTable/ProductsTable";
// import ShowSwal from "../../Components/SwalModal/ShowSwal";

import AddNewProduct from "./AddNewProduct/AddNewProduct";

export default function Products() {

  const [rows, setRows] = useState([]);
  const [addProductData, setAddProductData] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

 
  //getting products from api
  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts () {
    console.log("fetching products");
    fetch("http://localhost:3000/api/products")
      .then((res) => {
        if (!res.ok) {
          console.log(res);
          throw new Error("Network response was not ok");
        }
        console.log(res)
        return res.json();
      })
      .then((products) => {
        setRows(products);
      });
  };



  const handleCloseModal = () => {
    setIsShowModal(false);
    setModalType("");
  };

  const addNewProductfunction = (data) => {
    setIsShowModal(true);
    setModalType("add");
    setAddProductData(data);
  };

  return (
    <div className="products-wrapper">
      <AddNewProduct handleAddNewProduct={addNewProductfunction} getAllProducts={fetchProducts} allProducts={rows}/>
      <ProductsTable   mainProducts={rows}   getAllProducts={fetchProducts} allProducts={rows}  />
      {isShowModal && modalType === "add" && (
        <Modal
          isShow={isShowModal}
          message="ایا میخواهید محصول اضافه شود؟"
          submitAction={() => {
            addProductData.confirmAdd();
            setIsShowModal(false);
            setModalType("");
            fetchProducts();
          }}
          cancelAction={handleCloseModal}
        />
      )}
    </div>
  );
}
