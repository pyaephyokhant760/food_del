import React from 'react'
import './Add.css'

const Add = () => {
  return (
    <div className='add'>
        <form action="" className='flex-col'>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={assets.upload_area} alt="" />
                </label>
                <input type="file" id='image' hidden required/>
            </div>
            <div className="add-product-name flex-col">
                <p>Product Name</p>
                <input type="text" placeholder='Type here' name='name'/>
            </div>
            <div className="add-product-description flex-col">
                <p>Product Description</p>
                <textarea name="description" id="" cols="30" rows="6" placeholder='Write description here'></textarea>
            </div>
            
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product Category</p>
                    <select name="category" id="">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product Price</p>
                    <input type="text" placeholder='Type here' name='price'/>
                </div>
            </div>

        </form>
    </div>
  )
}

export default Add