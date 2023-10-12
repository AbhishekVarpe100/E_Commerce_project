import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
function Orders() {

  const [data, setData] = useState([])
  const [reject, setReject] = useState('')
  const [order_count, setOrderCount] = useState(0);

  const getOrders = () => {
    axios.get('http://localhost:3000/getorders')
      .then((res) => {
        setData(res.data);
      })
      .catch(err => console.log(err))
  }


  const orderCount = () => {
    axios.get('http://localhost:3000/ordercount')
      .then(res => {
        setOrderCount(res.data.orderCount);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getOrders();
    orderCount();
  }, [])

  const handleReject = (id) => {
    axios.delete('http://localhost:3000/rejectorder/' + id)
      .then(res => {
        if (res.data == 'reject') {
          setReject(<center><div className='alert w-50 text-white' style={{ 'backgroundColor': 'red' }}><b>Order cancelled</b> </div></center>)

          setTimeout(() => {
            setReject('')
            setTimeout(() => {
              getOrders();
              orderCount();
            }, 1);
          }, 3000);
        }

      })

      .catch(err => console.log(err))
  }


  const handleComplete = (id) => {
    axios.delete('http://localhost:3000/rejectorder/' + id)
      .then(res => {
        if (res.data == 'reject') {
          setReject(<center><div className='alert w-50 text-white' style={{ 'backgroundColor': 'green' }}><b>Order is on the way</b> </div></center>)

          setTimeout(() => {
            setReject('')
            setTimeout(() => {
              getOrders();
              orderCount();
            }, 1);
          }, 3000);
        }

      })

      .catch(err => console.log(err))
  }

  return (
    <div>
      {reject}
      {order_count != 0 ? <h2 className='m-4'>Total number of {order_count > 1 ? <span>orders are</span> : <span>order is</span>}   {order_count}</h2> : <div></div>}
      {order_count != 0 ? <table class="table table-hover table-dark">


        <thead>
          <tr className='row m-4'>
            <th className='col-2' scope="col">Customer Id</th>
            <th className='col-2' scope="col">Name</th>
            <th className='col-2' scope="col">Mobile</th>
            <th className='col-2' scope="col">Pin</th>
            <th className='col-2' scope="col">Address</th>
          </tr>
        </thead>
      </table> : <div></div>}

      {data.length != 0 ? data.map((item) => (

        <table key={item.id} class="table table-secondary table-hover">

          <tbody>
            <tr>
              <div className='row mx-4'>
                <th className='col'>{item.id}</th>
                <th className='col'>{item.name}</th>
                <th className='col'>{item.mobile}</th>
                <th className='col'>{item.pin}</th>
                <th className='col'>{item.address}</th>
                <div className='col'>
                  <th><button onClick={() => handleReject(item.id)} className='btn btn-sm btn-danger'>Cancel Order</button></th>

                  <th><button onClick={() => handleComplete(item.id)} className='btn btn-sm btn-success'>Deliver Order</button></th>
                </div>
              </div>
            </tr>

          </tbody>
        </table>


      ))

        : <center><div className='alert alert-primary w-50'> <b>No Orders Yet</b> </div></center>

      }

    </div>
  )
}

export default Orders