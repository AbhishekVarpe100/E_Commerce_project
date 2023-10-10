import React from 'react'
import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import './Admin/Available/Style.css'
function Cart() {

  const [data, setProduct] = useState([]);
  const [del, setDelete] = useState('');
  const [count, cartCount] = useState('');
  const [amount, totAmount] = useState('')

  const cartData = () => {

    axios.get('http://localhost:3000/cart')
      .then(product => {
        setProduct(product.data)
      })
      .catch((err) => console.log(err))

  }

  const getCount = () => {
    axios.get('http://localhost:3000/cartcount')
      .then(count => {
        cartCount(count.data.cartCount)
      })
      .catch(err => console.log(err))
  }

  const getAmount = () => {
    axios.get('http://localhost:3000/amountcount')
      .then(count => {
        totAmount(count.data.amtcount)
      })
      .catch(err => console.log(err))

  }

  useEffect(() => {
    cartData();
    getCount();
    getAmount();
  }, [])


  const handleDelete = (id, category) => {
    axios.post('http://localhost:3000/deletecart', { id, category })
      .then(res => {
        if (res.data == 'success') {
          setDelete(<div className='alert alert-danger w-50'><b>Item deleted from cart</b></div>)
          setTimeout(() => {
            setDelete('')
            setTimeout(() => {
              location.reload();
            }, 5);

          }, 2000);
        }
      })
    // alert(id)
  }



  return (

    <div className='m-4'>
      <Link to='/home' className='btn btn-secondary'>Back</Link>

      <center><h1 className='heading text-white w-25 p-4 m-2'>Your Cart</h1>
        {del}
      </center>

      {count ? <i><h1 className='text-dark mt-4'>Total <b>{count}</b> items are in your cart</h1></i>

        : <div className='alert alert-warning'>🙁 Oops! <i> <b>Your Cart is empty</b> </i> </div>}


      {count ? <i><h1 className='text-dark mt-4'>Total amount you have to pay is <b>{amount}</b> after delivery</h1></i> : <div></div>}

      <div>
        {
          count ? <Link to='/placeorder' className='btn btn-info mb-4' >Place Order</Link> : <div></div>
        }

      </div>



      <div className='row'>
        {data.map((item) => (

          <div className='border text-white col-md-3 col-lg-2 p-4 m-4 rounded' key={item.id} >
            <img className="card-img-top" src={`http://localhost:3000/Images/${item.file}`} alt="Card image cap" />
            <hr />
            <div className="card-body">
              <p><b className='text-primary'> <i> Product id : </i> </b>{item.id} </p>
              <h6 className='w-100'><b className='text-primary'> <i> Category :</i> </b>{item.category}</h6>
              <p className="card-title w-100"><b className='text-info'> <i> Product Name : </i> </b>{item.name}</p>
              <h3 className='w-100'><b className='text-white'> <i> Price : </i> </b>{item.price} Rs.</h3>
            </div>
            <hr />
            <button onClick={() => handleDelete(item.id, item.category)} className='btn btn-danger'>Delete from cart</button>
            <div className="card-body">


            </div>
          </div>

        ))}
      </div>


    </div>
  )
}

export default Cart;