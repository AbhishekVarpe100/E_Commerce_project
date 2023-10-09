import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'


export default function Navbar() {

    return (
        <div className='d-flex m-4 justify-content-around navbar'>
            <h1 className='shadow-lg'><i>Welcome to our <b>E-Shop</b><sub><small className='bg-success text-white m-2'> Buy anything you want</small></sub></i></h1>
            <h2><Link to='/login'></Link></h2>
            <h2><Link to='/admin'></Link></h2>
            <h2><Link to='/register' className='m-2 btn btn-outline-primary'>Register / Login</Link></h2>
            <h2><Link to='/admin_login' className='m-2 btn btn-outline-primary'>Admin Login</Link></h2>
            <h2><Link to='/home/'></Link></h2>
            <h2> <Link to='/cart' className="fa fa-shopping-cart btn  btn-outline-secondary"></Link> </h2>
        </div>
    )
}
