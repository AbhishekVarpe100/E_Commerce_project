import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Place_Order(){
  const [cancel,setCancel]=useState('')
  const navigate=useNavigate();
  const cancelOrder=()=>{
          setCancel(<div className='alert alert-danger w-50'> <b>You cancel order</b> redirecting to cart</div>)

          setTimeout(() => {
            setCancel('');
            setTimeout(() => {
              
              navigate('/cart');
            }, 50);
          }, 3000);
    
  }
  return (
    <>
    
    <center >

        <form className='w-50 m-4' action="">

          <input className='form-control m-2' type="text" placeholder='Enter your full name' / >
          <input className='form-control m-2' type="text" placeholder='Enter your mobile number' / >
          <input className='form-control m-2' type="text" placeholder='Enter PIN (Postal code)' / >
          <textarea className='form-control m-2' placeholder='Enter your address for delivery purpose' name="" id="" cols="30" rows="10"></textarea>
          
          <div className='text-muted'>Payment* [Cash on delivery]</div>
          <input className='btn btn-primary my-4' type="submit" value="Confirm order" />

        </form>
        {cancel} 
        <button onClick={cancelOrder} className='btn btn-danger'>Cancel order</button>
    </center>

    </>
  )
}

export default Place_Order;