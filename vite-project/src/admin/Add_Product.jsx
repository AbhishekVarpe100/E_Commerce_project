import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import '../Admin/Available/Style.css'
import { useNavigate } from 'react-router-dom';
function Add_Product() {

    const navigate = useNavigate();

    const [file, setFile] = useState('myfile');
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const [success, setSuccess] = useState('');
    const [failure, setFailure] = useState('');
    const [progress, setProgress] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("category", category);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("file", file);
        axios.post("http://localhost:3000/add", formData, {
            onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                );
                setProgress(percentCompleted);
            },
        })
            .then(res => {
                if (res.data === 'success') {
                    setSuccess(<div className='alert alert-primary w-25'><b>Product added successfully</b> </div>)

                    setTimeout(() => {

                        setSuccess('')

                        location.reload()

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
        <div >


            <center>
                {success}
                {failure}
                <form className='w-25 addproduct' value={category} onSubmit={handleSubmit}>
                    <select required className='form-select' onChange={(e) => setCategory(e.target.value)}>
                        <option value="">---Select Category---</option>
                        <option value="cosmetics">Cosmetics / Body</option>
                        <option value="food"> Food / Beverges</option>
                        <option value="furniture">Furniture / Decor</option>
                        <option value="pet">Pet care</option>
                        <option value="mobile">Mobile / Laptops</option>
                        <option value="accessories">Accessories</option>
                    </select>
                    <br />
                    <input value={name} required type="text" onChange={((e) => setName(e.target.value))} placeholder='Product name' className='form-control' /><br />
                    <textarea value={description} required onChange={(e) => setDescription(e.target.value)} placeholder='Product Description' cols="30" rows="10" className='form-control'></textarea><br />
                    <input value={price} required type="text" onChange={(e) => setPrice(e.target.value)} placeholder='Product Price' className='form-control' /><br />
                    Attach image of a product
                    <input onChange={(e) => setFile(e.target.files[0])} className='form-control' type="file" name="file" id="" />
                    <br />
                    <input className='btn btn-warning' type="submit" value="Add Product" />

                    {/* <div className='rounded bg-primary m-4 text-white h5 p-4'>Uploaded: {progress}%</div> */}
                    <br />
                    <br />
                    progress bar
                    <div className="progress m-4">

                        <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow={progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: `${progress}%` }}
                        >
                            {progress}%
                        </div>
                    </div>
                </form>
            </center>


        </div>
    )
}

export default Add_Product;