import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import './Style.css'
function All_Pro() {

    const [data, setProduct] = useState([]);

    const allData = () => {

        axios.get('http://localhost:3000/getproduct')
            .then(product => {
                setProduct(product.data)
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        allData();
    }, [])

    const handleDelete = (id) => {

        let con = confirm("Are you sure want to delete product");
        if (con == true) {
            axios.delete(`http://localhost:3000/deleteall/${id}`)
                .then(res => {
                    if (res.data == 'success') {
                        alert("Product Deleted Successfully")
                        setTimeout(() => {
                            allData();
                        }, 1000)
                    }
                })
        }
    }

    return (
        <div className='m-4'>
            <div className='row'>
                {data.length != 0 ? data.map((item) => (

                    <div className='border text-white col-md-3 col-lg-2 m-4 myimagetemplate1 p-4 rounded' key={item.id} >
                        <img className="card-img-top" src={`http://localhost:3000/Images/${item.file}`} alt="Card image cap" />
                        <hr />
                        <div className="card-body">
                            {/* <p><b className='text-primary'> <i> Product id : </i> </b>{item.id} </p> */}
                            <h6 className='w-100'><b className='text-primary'> <i> Category :</i> </b>{item.category}</h6>
                            <p className="card-title w-100"><b className='text-info'> <i> Product Name : </i> </b>{item.name}</p>
                            <p className="card-text w-100"><b className='text-info'> <i> Product description : </i> </b>{item.description}</p>
                            <h3 className='w-100'><b className='text-white'> <i> Price : </i> </b>{item.price} Rs.</h3>
                            Created On : <i style={{'opacity':'0.5'}} className='text-white'>{item.createdDate}</i>
                            
                        </div>
                        <hr />

                        <div className="card-body">
                            <button onClick={() => handleDelete(item.id)} class="btn btn-danger w-100 my-2">Delete</button>
                        </div>
                    </div>
                    
                )) : <div className='alert alert-warning'>🙁 Oops! <i> <b>No products are available for sale add some products for sale</b> </i> </div>}
            </div>


        </div>
    )
}

export default All_Pro;