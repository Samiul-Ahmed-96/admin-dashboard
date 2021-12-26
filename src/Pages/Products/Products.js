import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Products.scss';

const Products = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'product',
          headerName: 'Product',
          width: 200,
          editable: true,
          renderCell : (params) =>{
            return(
              <div className='user-info'>
                <img src={params.row.avatar} alt="" />
                {params.row.productName}
              </div>
            )
          }
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 300,
        },
        {
          field: 'price',
          headerName: 'Price',
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
                <Link to={"/products/"+params.row.id}><button className='productsEdit'>Edit</button></Link>
                <DeleteOutline className='productDelete'/>
              </div>
              
            )
          }
        }
      ];
      
      const rows = [
        { id: 1, productName: 'Potato', stock: '123' , avatar : 'https://www.reuters.com/resizer/5x1IqoH0ad-rFyUPhOFV0yXKyzM=/1789x2236/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VHJX7JYCZ5L7ZHCAAQD4NGKTT4.jpg', price : '20',status:'active'},
        
        
        
      ];
    return (
        <div className='products-container'>
        <h2>Products</h2>
        <div className="products-table">
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

export default Products;