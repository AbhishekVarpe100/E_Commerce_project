import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link,Outlet } from 'react-router-dom';
function Available_products() {
  return (
    <div>
      <center>
      <div>
        <Link className='btn btn-primary m-4' to='/admin/available/all'>All Products</Link>
        <Link className='btn btn-sm btn-outline-primary m-4' to='/admin/available/cosmetics'>Cosmetics / Body</Link>
        <Link className='btn btn-sm btn-outline-primary m-4' to='/admin/available/food'>Food / Beverges</Link>
        <Link className='btn btn-sm btn-outline-primary m-4' to='/admin/available/furniture'>Furniture / Decor</Link>
        <Link className='btn btn-sm btn-outline-primary m-4' to='/admin/available/pet'>Pet Care</Link>
        <Link className='btn btn-sm btn-outline-primary m-4' to='/admin/available/mobile'>Mobile / Laptops</Link>
        <Link className='btn btn-sm btn-outline-primary m-4' to='/admin/available/accessories'>Accessories</Link>
        <hr />
      </div>
      </center>
      <Outlet></Outlet>
      
    </div>
  )
}

export default Available_products;