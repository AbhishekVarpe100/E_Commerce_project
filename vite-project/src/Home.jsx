import React from 'react'
import { Link, Outlet } from 'react-router-dom';
export default function Home() {
    return (
        <div>
            
            <h1><Link to="/" className="btn btn-danger mx-4">Logout</Link></h1>
            <center>

            <>
            <h2 className='text-secondary'>Categories</h2>

                <div>
                    <Link to="/home/" className=" btn btn-primary m-4">Cosmetics / Body</Link>
                    <Link to="/home/food" className=" btn btn-light m-4">Food / Beverges</Link>
                    <Link to="/home/furniture" className=" btn btn-light m-4">Furniture / Decor</Link>
                    <Link to="/home/pet" className=" btn btn-light m-4">Pet Care</Link>
                    <Link to="/home/mobile_laptops" className=" btn btn-light m-4">Mobile / Laptops</Link>
                    <Link to="/home/accessories" className=" btn btn-light m-4">Accessories</Link>
                </div>
                <Outlet />

            </>


        </center>
        </div>

    )
}
