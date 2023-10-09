import { useState } from 'react'
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";
function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const register = { name, email, password };
        axios.post("http://localhost:3000/create", register)
            .then(res => {
                if (res.data == 'success') {

                    setSuccess(<div className='alert alert-primary'><b> Successfully registered</b></div>)
                    setTimeout(() => {
                        setSuccess("")
                        setTimeout(() => {
                            navigate('/Login')
                        }, 500)
                    }, 2000)
                }
            })
            .catch(err => {
                setError(<div className='alert alert-danger'>{err}</div>)
                setTimeout(() => {
                    setError("")
                }, 3000)
            })

    }

    return (
        <>
            <h1><Link to="/" className="fa fa-home mx-4 text-dark"></Link></h1>
        <center className='background'>
            <h1 className='text-white bg-primary m-4 p-4'>User Register/Login</h1>
            <form onSubmit={handleSubmit} className="w-25 form_class p-4 m-4">

                {success}
                {error}

                <input required className='form-control' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <br />

                <input required className='form-control' type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <br />

                <input required className='form-control' type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <p>Already have account ? <Link to='/login'>login here</Link></p>
                <input className='btn btn-primary' type="submit" value="Register" />
                <br />

            </form>
        </center></>
    )
}

export default Register
