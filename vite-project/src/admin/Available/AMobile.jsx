import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Style.css';
function AMobile() {

    const [data, setProduct] = useState([]);
    const [del, setDelete] = useState('')
    const mobileData = () => {
        axios.get('http://localhost:3000/mobile')
            .then(product => {
                setProduct(product.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        mobileData();
    }, []);




    const handleDelete = (name) => {
        axios.delete(`http://localhost:3000/deletemobile/${name}`)
            .then((res) => {
                if (res.data == 'success') {
                    setDelete(<div className='alert alert-danger'>Product deleted successfully</div>)
                    setTimeout(() => {
                        setDelete("")
                        setTimeout(() => {
                            mobileData();
                        }, 100)
                    }, 3000);
                }
            })
            .catch(err => console.log(err))
    }




    return (
        <div className='m-4'>

            <center>
                <h2 className='heading text-white w-25 p-4 m-2'>Mobile / Laptops</h2>
                {del}
            </center>


            <div className='row'>
                {data.length != 0 ? data.map((item) => (

                    <div className='border text-white col-md-3 col-lg-2 m-4 myimagetemplate1 p-4 rounded' key={item.id} >
                        <img className="card-img-top" src={`http://localhost:3000/Images/${item.file}`} alt="Card image cap" />
                        <hr />
                        <div className="card-body">
                            <p><b className='text-primary'> <i> Product id : </i> </b>{item.id} </p>
                            <h6 className='w-100'><b className='text-primary'> <i> Category :</i> </b>{item.category}</h6>
                            <p className="card-title w-100"><b className='text-info'> <i> Product Name : </i> </b>{item.name}</p>
                            <p className="card-text w-100"><b className='text-info'> <i> Product description : </i> </b>{item.description}</p>
                            <h3 className='w-100'><b className='text-white'> <i> Price : </i> </b>{item.price} Rs.</h3>
                        </div>
                        <hr />
                        <div className="card-body">
                        <Link className='btn btn-primary w-100' to={`/admin/available/editmobile/${item.id}`}>Edit</Link>
                            <button onClick={() => handleDelete(item.name)} class="btn btn-danger w-100 my-2">Delete</button>
                        </div>
                    </div>

                )) : <div className='alert alert-warning'>🙁 Oops! <i> <b>No products are available for sale add some products for sale</b> </i> </div>}
            </div>


        </div>
    )
}

export default AMobile;