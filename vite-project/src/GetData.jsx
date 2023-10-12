import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetData() {

    const [data, setData] = useState([]);
    const [del,setDelete]=useState("");
    const allData = () => {
        axios.get('http://localhost:3000/getdata')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        allData()
    }, []);


    const handleDelete = async (id) => {
        try {

            axios.delete(`http://localhost:3000/delete/${id}`)
                .then(res => {
                    if (res.data == 'success') {
                        setDelete(<div className='alert alert-danger'>Data deleted successfully</div>)
                        setTimeout(() => {
                            setDelete("")
                            setTimeout(()=>{
                                allData();
                            },100)
                        },1000);

                    }
                })
                .catch(err => console.log(err))

        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h2 className='text-center bg-info p-4 m-4'>Users Data</h2>
            <ul>
                <div>{del}</div>
                {data.length != 0 ? data.map((item) => (
                    <li key={item.id} className="list-group-item list-group-item-action list-group-item-success m-4 p-4">
                        <b>{item.id}</b>
                        <div>Name: {item.name}</div>
                        <div>Email: {item.email}</div>
                        <div>Password: {item.password}</div>

                        {item.name=='admin' ? <div></div>:<button onClick={() => handleDelete(item.id)} className='btn btn-sm my-4 btn-danger'>Delete user</button>}
                        
                    </li>

                )): <div className='alert alert-warning'>&#9888; Oops! <i> <b>No data found</b> </i> </div>}
            </ul>
        </div>
    );
}

export default GetData;
