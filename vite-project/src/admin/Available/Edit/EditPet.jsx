import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
function EditPet() {

    var { id } = useParams();
    const navigate = useNavigate();

    const [success, setSuccess] = useState('');
    const [failure, setFailure] = useState('');

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [newFile, setNewFile] = useState('');


    const petData = () => {
        axios.get(`http://localhost:3000/pet/${id}`)
            .then(product => {
                setName(product.data.name)
                setDescription(product.data.description)
                setPrice(product.data.price)
            })
            .catch((err) => console.log(err))

    }

    useEffect(() => {
        petData();
    }, [])


    function handleUpdate(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("file", newFile);
        axios.post(`http://localhost:3000/updatepet/${id}`, formData)
            .then(res => {
                if (res.data === 'success') {
                    setSuccess(<div className='alert alert-primary w-25'><b>Product Updated Successfully</b> </div>)

                    setTimeout(() => {

                        setSuccess('')

                        setTimeout(() => {
                            navigate('/admin/available/pet')
                        }, 1000);

                    }, 3000);

                }
                else if (res.data == 'failure') {
                    setFailure(<div className='alert alert-danger w-25'><b>Product not added successfully</b> </div>)
                    setTimeout(() => {
                        setFailure('');
                    }, 3000);
                }
            })
            .catch(err => console.log(err));


    }

    return (
        <div>
            <Link to='/admin/available/pet' className='btn btn-warning m-4 w-25'>&#8592; Back</Link>
            <center>
                {success}
                {failure}
                <form className='w-25 border p-4 m-4 bg-primary rounded' onSubmit={handleUpdate}>

                    <br />
                    <input value={name} required type="text" onChange={((e) => setName(e.target.value))} placeholder='Product name' className='form-control' /><br />
                    <textarea value={description} required onChange={(e) => setDescription(e.target.value)} placeholder='Product Description' cols="30" rows="10" className='form-control'></textarea><br />
                    <input value={price} required type="text" onChange={(e) => setPrice(e.target.value)} placeholder='Product Price' className='form-control' /><br />
                    Attach new image of a product
                    <input required onChange={(e) => setNewFile(e.target.files[0])} className='form-control' type="file" name="file" id="" />
                    <br />
                    <input className='btn btn-warning' type="submit" value="Update Product" />

                </form>




            </center>




        </div>
    )
}

export default EditPet;