import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Admin/Available/Style.css'
function Cosmetics() {

    const [data, setProduct] = useState([]);
    const [added, setAdded] = useState("");

    const cosmeticsData = () => {

        axios.get('http://localhost:3000/cosmetics')
            .then(product => {
                setProduct(product.data)
            })
            .catch((err) => console.log(err))

    }

    useEffect(() => {
        cosmeticsData();
    }, [])

    const handleCart = (id) => {
        axios.get(`http://localhost:3000/cosmetics/${id}`)
            .then((res) => {
                const file = res.data.file;
                const category = res.data.category;
                const name = res.data.name;
                // const description = res.data.description;
                const price = res.data.price;

                axios.post('http://localhost:3000/cart', {id,file,category,name,price})
                .then((res)=>{
                    if(res.data=='success'){
                        setAdded(<div className='alert alert-success w-50'><b> Item added to the cart</b></div>)
                        setTimeout(() => {
                            setAdded('')
                        }, 2000);
                    }
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='m-4'>

            <center>
                <h2 className='heading text-white w-25 p-4 m-2'>Cosmetics / Body</h2>
                <div>{added}</div>
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
                            <button onClick={() => handleCart(item.id)} class="btn btn-success w-100 my-2">Add To Cart</button>
                        </div>
                    </div>

                )) : <div className='alert alert-warning'>🙁 Oops! <i> <b>Products out of stock</b> </i> </div>}
            </div>


        </div>
    )
}

export default Cosmetics;