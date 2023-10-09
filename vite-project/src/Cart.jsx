import React from 'react'
import { Link } from 'react-router-dom'
function Cart() {
  return (
    <div>
        <h1><Link to="/home" className="btn btn-danger mx-4">Back</Link></h1>
        <center><h1>Your cart</h1></center></div>
  )
}

export default Cart