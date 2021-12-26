import { TextField } from '@mui/material';
import React from 'react';
import "./AddProduct.scss";

const AddProduct = () => {
    return (
        <div className='create-user'>
           <h2>Add New Product</h2>
           <form className='create-user-form'>
           <TextField id="standard-basic" label="Product Name" variant="standard" />
           <TextField id="standard-basic" label="Stock" variant="standard" />
           <TextField id="standard-basic" label="Price" variant="standard" />
           <label for="status">Choose Status</label>
            <select name="status" id="status">
                <option value="active">Active</option>
                <option value="deactive">Deacive</option>
            </select>
         <input type="submit" id="create-user-btn" value="Add New Product" />

         
           </form>
        </div>
    );
};

export default AddProduct;