import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

function UpdateProduct() {
    const {id}= useParams()
    const [name, setName] = useState()
    const [category, setCategory] = useState()
    const [color, setColor] = useState()
    const [price, setPrice] = useState()
    const [comments, setComments] = useState()

    const navigate = useNavigate()

    useEffect(() => {  
        axios.get('http://localhost:3003/getProduct/'+id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setCategory(result.data.category)
            setColor(result.data.color)
            setPrice(result.data.price)
            setComments(result.data.comments)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3003/updateProduct/"+id, {name, category, color, price, comments})
        .then(result => {
            console.log(result)
            navigate("/")
        })
        .catch(err => console.log(err))
    }

    return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={Update}>
                <h2>Update Product</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Product Name</label>
                    <input type='text' placeholder='Enter Name' className='form-control'
                    value = {name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Category</label>
                    <input type='text' placeholder='Enter Category' className='form-control'
                    value = {category} onChange={(e) => setCategory(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Color</label>
                    <input type='text' placeholder='' className='form-control'
                    value = {color} onChange={(e) => setColor(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Price in $</label>
                    <input type='text' placeholder='Enter Price' className='form-control'
                    value = {price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Comments</label>
                    <input type='text' placeholder='' className='form-control'
                    value = {comments} onChange={(e) => setComments(e.target.value)}/>
                </div>
                <button className='btn btn-primary'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateProduct;