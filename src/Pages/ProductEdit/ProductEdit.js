import { TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductEdit.scss';

const ProductEdit = () => {
    return (
        <div className='user-container'>
            <div className="usertitle">
                <h1>Product</h1>
                <Link to="/CreateUser"><button className='createNewUser'>Add Product</button></Link>
            </div>
            <div className="user-info-edit">
                <h1>Edit Product</h1>
                <TextField id="standard-basic" defaultValue={"Potato"} label="Product Name" variant="standard" />
                <TextField id="standard-basic" defaultValue={"123"} label="Stock" variant="standard" />
                <TextField id="standard-basic" defaultValue={"23"} label="Price" variant="standard" />
                <TextField id="standard-basic" defaultValue={"Active"} label="Status" variant="standard" />
                <input id='user-info-update' type="submit" value="Update" />
            </div>
        </div>
    );
};

export default ProductEdit;