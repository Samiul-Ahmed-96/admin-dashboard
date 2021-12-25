import { TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './UserEdit.scss';

const UserEdit = () => {
    return (
        <div className='user-container'>
            <div className="usertitle">
                <h1>Create User</h1>
                <Link to="/CreateUser"><button className='createNewUser'>Create</button></Link>
            </div>
            <div className="user-info-edit">
                <h1>Edit User</h1>
                <TextField id="standard-basic" defaultValue={"saanik96"} label="User Name" variant="standard" />
                <TextField id="standard-basic" defaultValue={"Samiul Ahmed"} label="Full Name" variant="standard" />
                <TextField id="standard-basic" defaultValue={"saanik96@gmail.com"} label="Email" variant="standard" />
                <TextField id="standard-basic" defaultValue={"+0555884712"} label="Phone" variant="standard" />
                <TextField id="standard-basic" defaultValue={"New York | USA"} label="Address" variant="standard" />
                <label htmlFor="myImage">Select Your Image</label>
                <input type="file" id="myImage"/>
                <input id='user-info-update' type="submit" value="Update" />
            </div>
        </div>
    );
};

export default UserEdit;