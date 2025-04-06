import React from 'react'
import "./Products.css"


export default function Products() {
  return (
    <div className="products-wrapper">
      <div className="products-container">
        <h1>اضافه کردن محصول جدید</h1>
        <div className='add-new-product-form__container'>
          
          <form className='add-new-product-form'>
            <div className="form-group">
            
              <input type="text" id="product-name" placeholder=' نام محصول را وارد کنید' />
            </div>
            <div className="form-group">
              
              <input type="text" id="product-price" placeholder="قیمت محصول را وارد کنید" />
            </div>
            <div className="form-group">
              
              <input type="text" id="product-stock" placeholder='موجودی محصول را وارد کنید ' />
            </div>
            <div className="form-group">
              
              <input type="text" id="product-popularity" placeholder='میزان محبوبیت محصول را مشخص کنید ' />
            </div>
            <div className="form-group">
             
              <input id="product-sells" placeholder='  میزان فروش محصول را وارد کنید'></input>
            </div>
            <div className="form-group">
              
              <input id="product-colors" placeholder='تعداد رنگ بندی محصول را وارد کنید'></input>
            </div>
             <div className="form-group">
              <textarea id="product-description" placeholder='توضیحات خود را بنویسید '></textarea>
            </div>
            
          </form>
          <div className="button-container">
            <button type='submit'>اضافه کردن</button>
          </div>
        </div>
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
