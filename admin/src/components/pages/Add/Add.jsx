import React from 'react'
import './Add.css'
import { assets } from '../../../assets/assets'
import { useState } from 'react'
import { useEffect } from 'react'

const Add = () => {
    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })
    const onChangeHandler = (event)=>{
       const name = event.target.name;
       const value = event.target.value;
       setData(data=>({...data,[name]:value}))
    }

    const onsubmitHandler = async()=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("price",data.price);
        formData.append("category",data.category);
        formData.append("image",image);
        const response = await fetch("http://localhost:5000/api/food/add",{
            method:"POST",
            body:formData
        })
        const data = await response.json();
        if(data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"
            })
            setImage(false)
        }
    }
    useEffect(()=>{
        console.log(data);
    },[data])
  return (
    <div className='add'>
        <form onSubmit={onsubmitHandler} action="" className='flex-col'>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onClick={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
            </div>
            <div className="add-product-name flex-col">
                <p>Product Name</p>
                <input onClick={onChangeHandler} value={data.name} type="text" placeholder='Type here' name='name'/>
            </div>
            <div className="add-product-description flex-col">
                <p>Product Description</p>
                <textarea onClick={onChangeHandler} value={data.description} name="description" id="" cols="30" rows="6" placeholder='Write description here'></textarea>
            </div>
            
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product Category</p>
                    <select onClick={onChangeHandler} value={data.category} name="category" id="">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product Price</p>
                    <input onClick={onChangeHandler} value={data.price} type="text" placeholder='Type here' name='price'/>
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD PRODUCT</button>

        </form>
    </div>
  )
}

export default Add