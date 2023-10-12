import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import './Style.css'
function AllProducts() {


    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <div className='m-4'>
            <center className='d-flex w-50'>


                <select className='form-control bg-secondary text-white' onChange={handleSelectChange}>
                    <option value="">---Sort by---</option>
                    <option value="byprice">Price</option>
                    <option value="bycategory">Category</option>
                    <option value="byname">Name</option>
                </select>
                <Link className='btn btn-primary mx-4' to={`/admin/available/${selectedOption}`}>Sort</Link>




            </center>
            <h2 className='heading text-white w-25 p-4 m-4'>All products </h2>
            <Outlet></Outlet>



        </div>
    )
}

export default AllProducts;