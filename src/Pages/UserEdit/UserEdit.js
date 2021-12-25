import { TextField } from '@mui/material';
import React from 'react';
import './UserEdit.scss';

const UserEdit = () => {
    return (
        <div className='user-container'>
            <div className="usertitle">
                <h1>Edit User</h1>
                <button className='createNewUser'>Create</button>
            </div>
            <div className="userEdit">
                <h1>Edit</h1>
                <TextField id="standard-basic" defaultValue={"saanik96"} label="User Name" variant="standard" />
                <TextField id="standard-basic" defaultValue={"Samiul Ahmed"} label="Full Name" variant="standard" />
                <TextField id="standard-basic" defaultValue={"saanik96@gmail.com"} label="Email" variant="standard" />
                <TextField id="standard-basic" defaultValue={"+0555884712"} label="Phone" variant="standard" />
                <TextField id="standard-basic" defaultValue={"New York | USA"} label="Address" variant="standard" />
                <label htmlFor="myImage">Select Your Image</label>
                <input type="file" id="myImage"/>
                <input type="submit" value="Update" />
            </div>
        </div>
    );
};

export default UserEdit;