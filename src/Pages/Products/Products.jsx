import React,{ useState } from 'react'
import "./Products.css"
import Modal from '../../Components/Modals/Modal'
import Table from '../../Components/Table/Table'

export default function Products() {

  const [isShowModal, setIsShowModal] = useState(false) 
  const [products,setProducts] = useState([])
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState(null)
  const [productPopularity, setProductPopularity] = useState(5)
  const [productStock, setProductStock] = useState(null)
  const [productSells, setProductSells] = useState(null)
  const [productColors, setProductColors] = useState(1)
  const [productdescription, setProductDescription] = useState("")



  const handleAddNewProduct = () => {
    

    let newProduct = {
      name: productName,
      price: productPrice,
      stock: productPopularity,
      popularity: productStock,
      sells: productSells,
      colors: productColors,
      description:productdescription,
    }


    setProducts([...products,newProduct])

    fetch(`https://persian-cms-8bd51-default-rtdb.europe-west1.firebasedatabase.app/products.json`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newProduct)
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      setIsShowModal(false)
    })

  }
  const handleCancelModal = () => {
    console.log("حذف شد")
    setIsShowModal(false)
  }

  return (
    <div className="products-wrapper">
      <div className="products-container">
        <h1>اضافه کردن محصول جدید</h1>
        <div className='add-new-product-form__container'>
          
          <form className='add-new-product-form'>
            <div className="form-group">
            
              <input type="text" id="product-name" onChange={e => setProductName(e.target.value)} placeholder=' نام محصول را وارد کنید' />
            </div>
            <div className="form-group">
              
              <input type="text" id="product-price" onChange={e => setProductPrice(e.target.value)} placeholder="قیمت محصول را وارد کنید" />
            </div>
            <div className="form-group">
              
              <input type="text" id="product-stock" onChange={e => setProductStock(e.target.value)} placeholder='موجودی محصول را وارد کنید ' />
            </div>
            <div className="form-group">
              
              <input type="text" id="product-popularity" onChange={e => setProductPopularity(e.target.value) } placeholder='میزان محبوبیت محصول را مشخص کنید ' />
            </div>
            <div className="form-group">
             
              <input id="product-sells" onChange={e => setProductSells(e.target.value)} placeholder='  میزان فروش محصول را وارد کنید'></input>
            </div>
            <div className="form-group">
              
              <input id="product-colors" onChange={e => setProductColors(e.target.value)} placeholder='تعداد رنگ بندی محصول را وارد کنید'></input>
            </div>
             <div className="form-group">
              <textarea id="product-description" onChange={e => setProductDescription(e.target.value)} placeholder='توضیحات خود را بنویسید '></textarea>
            </div>
            
          </form>
          <div className="button-container">
            <button type='submit' onClick={() => setIsShowModal(true)}>اضافه کردن</button>
          </div>
        </div>
        <Table />
        {isShowModal && <Modal isShow={isShowModal} message="ایا میخواهید محصول اضافه شود؟" submitAction={handleAddNewProduct} cancelAction={handleCancelModal}/>}
        {/* <ul className="product-list">
          <li className="product-item">
            <div className="product-name">محصول 1</div>
            <div className="product-price">100000</div>
            <div className="product-stock">50</div>
            <div className="product-popularity">4.5</div>
            <div className="product-sells">200</div>
            <div className="product-colors">3</div>
            <button className='delete-product'>حذف محصول</button>
          </li>
        </ul> */}
      </div>
    </div>
  )
}
