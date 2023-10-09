import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'
function Admin_login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('')
    const [failure, setFailure] = useState('')
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault();
        const login = { name, password };
        axios.post("http://localhost:3000/login", login)
            .then(res => {
                if (res.data == 'adminPanel') {
                    setSuccess(<div className='alert alert-success'>Login successfull redirecting to <b>Admin Panel</b></div>)

                    setTimeout(() => {
                        setSuccess("")

                        setTimeout(() => {

                            navigate('/Admin')
                        }, 50)
                    }, 3000)
                }
                else {
                    setFailure(<div className='alert alert-danger'>Login failed... <b> Admin Not found</b></div>);
                    setTimeout(() => {
                        setFailure("")
                    }, 3000)
                }
            })
            .catch(err => {
                alert(err)
            })

    }

    return (
        <div>
            <h1><Link to="/" className="fa fa-home mx-4 text-dark"></Link></h1>
            <center className='login_class'>
                <h1 className='bg-primary text-white p-4 m-4'>Admin Login</h1>
                <form onSubmit={handleLogin} className="w-25 form_class p-4">
                    <div>{success}</div>
                    <div>{failure}</div>
                    <input className='form-control' required type="text" placeholder='Username' onChange={(e) => setName(e.target.value)} /><br /><br />
                    <input className='form-control' required type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /><br />
                    <input className='btn btn-primary' value="Login" type="submit" />
                </form>
            </center>

        </div>
    )
}

export default Admin_login