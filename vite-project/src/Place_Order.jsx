import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Place_Order(){
  const [cancel,setCancel]=useState('')

  const [name,setName]=useState('');
  const [mobile,setMobile]=useState('');
  const [pin,setPin]=useState('');
  const [address,setAddress]=useState('');

  const [success,setSuccess]=useState('')
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

  const submitHandler=(e)=>{
    e.preventDefault();

    axios.post('http://localhost:3000/order',{name,mobile,pin,address})
    .then((res)=>{
      if(res.data=='success'){
        setSuccess(<div className='alert text-white' style={{'backgroundColor':'blue'}}> <b> Congratulations! Your order is placed</b></div>)

        setTimeout(() => {
          setSuccess('');
          setName('')
          setAddress('')
          setMobile('')
          setPin('')
        }, 3000);
      }
    })
    .catch((err)=>console.log(err))
    
  }


  return (
    <>
    
    <center >

        <form onSubmit={submitHandler} className='w-50 m-4'>
          {success}

          <input value={name} required onChange={(e)=>setName(e.target.value)} className='form-control m-2' type="text" placeholder='Enter your full name' / >
          <input value={mobile} required onChange={(e)=>setMobile(e.target.value)} className='form-control m-2' type="text" placeholder='Enter your mobile number' / >
          <input value={pin} required onChange={(e)=>setPin(e.target.value)} className='form-control m-2' type="text" placeholder='Enter PIN (Postal code)' / >
          <textarea value={address} required onChange={(e)=>setAddress(e.target.value)} className='form-control m-2' placeholder='Enter your address for delivery purpose' name="" id="" cols="30" rows="10"></textarea>
          
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