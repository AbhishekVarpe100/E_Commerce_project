import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Admin() {
  return (
<>
    <h1><Link to="/" className="btn btn-danger mx-4">Logout</Link></h1>
    <div className='text-center'>
    <Link to="/admin/add" className="btn btn-light m-4 shadow-lg  bg-white rounded">Add Products</Link>
    <Link to="/admin/orders" className=" btn btn-light m-4 shadow-lg bg-white rounded">Orders from customers</Link>
    <Link to="/admin/available" className=" btn btn-light m-4 shadow-lg bg-white rounded">Available Products</Link>
    <Link to='/admin/getdata' className='m-2 btn btn-outline-secondary'>See Users</Link>

    <hr />
    </div>
    <Outlet/>

    </>
  )
}

