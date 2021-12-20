import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@mui/icons-material';
import React from 'react';
import './User.scss';

const User = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User',
          width: 300,
          editable: true,
          renderCell : (params) =>{
            return(
              <div className='user-info'>
                <img src={params.row.avatar} alt="" />
                {params.row.userName}
              </div>
            )
          }
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 200,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 300,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 200,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 120,
          renderCell : (params) =>{
            return(
              <div className='action-container'>
                <button className='userEdit'>Edit</button>
                <DeleteOutline className='userDelete'/>
              </div>
              
            )
          }
        }
      ];
      
      const rows = [
        { id: 1, userName: 'Jon sina', transaction: '1232244' , avatar : 'https://www.reuters.com/resizer/5x1IqoH0ad-rFyUPhOFV0yXKyzM=/1789x2236/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VHJX7JYCZ5L7ZHCAAQD4NGKTT4.jpg', email : 'jon@gmail.com', status:'active'},
        { id: 2, userName: 'Jon sina', transaction: '1232244' , avatar : 'https://www.reuters.com/resizer/5x1IqoH0ad-rFyUPhOFV0yXKyzM=/1789x2236/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VHJX7JYCZ5L7ZHCAAQD4NGKTT4.jpg', email : 'jon@gmail.com', status:'active'},
        { id: 3, userName: 'Jon sina', transaction: '1232244' , avatar : 'https://www.reuters.com/resizer/5x1IqoH0ad-rFyUPhOFV0yXKyzM=/1789x2236/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VHJX7JYCZ5L7ZHCAAQD4NGKTT4.jpg', email : 'jon@gmail.com', status:'active'},
        { id: 4, userName: 'Jon sina', transaction: '1232244' , avatar : 'https://www.reuters.com/resizer/5x1IqoH0ad-rFyUPhOFV0yXKyzM=/1789x2236/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VHJX7JYCZ5L7ZHCAAQD4NGKTT4.jpg', email : 'jon@gmail.com', status:'active'},
        { id: 5, userName: 'Jon sina', transaction: '1232244' , avatar : 'https://www.reuters.com/resizer/5x1IqoH0ad-rFyUPhOFV0yXKyzM=/1789x2236/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VHJX7JYCZ5L7ZHCAAQD4NGKTT4.jpg', email : 'jon@gmail.com', status:'active'},
        { id: 6, userName: 'Jon sina', transaction: '1232244' , avatar : 'https://www.reuters.com/resizer/5x1IqoH0ad-rFyUPhOFV0yXKyzM=/1789x2236/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VHJX7JYCZ5L7ZHCAAQD4NGKTT4.jpg', email : 'jon@gmail.com', status:'active'},
        { id: 7, userName: 'Jon sina', transaction: '1232244' , avatar : 'https://www.reuters.com/resizer/5x1IqoH0ad-rFyUPhOFV0yXKyzM=/1789x2236/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VHJX7JYCZ5L7ZHCAAQD4NGKTT4.jpg', email : 'jon@gmail.com', status:'active'},
        { id: 8, userName: 'Jon sina', transaction: '1232244' , avatar : 'https://www.reuters.com/resizer/5x1IqoH0ad-rFyUPhOFV0yXKyzM=/1789x2236/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VHJX7JYCZ5L7ZHCAAQD4NGKTT4.jpg', email : 'jon@gmail.com', status:'active'},
        { id: 9, userName: 'Jon sina', transaction: '1232244' , avatar : 'https://www.reuters.com/resizer/5x1IqoH0ad-rFyUPhOFV0yXKyzM=/1789x2236/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VHJX7JYCZ5L7ZHCAAQD4NGKTT4.jpg', email : 'jon@gmail.com', status:'active'},
        
        
      ];
    
    return (
        <div className='user-container'>
            <div className="user-table">
            <div style={{ height: '100vh', width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
            </div>
        </div>
    );
};

export default User;