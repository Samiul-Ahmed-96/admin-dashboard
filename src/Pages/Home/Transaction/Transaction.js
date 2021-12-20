import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import './Transaction.scss';

function createData(name, date, amount, status, designation) {
    return { name, date, amount, status, designation };
}

  const rows = [
    createData('Samiul Ahmed', '3 jan 2021', '$123.00', 'Approved'),
    createData('Samiul Ahmed', '3 jan 2021', '$123.00', 'Approved'),
    createData('Samiul Ahmed', '3 jan 2021', '$123.00', 'Approved'),
    createData('Samiul Ahmed', '3 jan 2021', '$123.00', 'Approved'),
    createData('Samiul Ahmed', '3 jan 2021', '$123.00', 'Approved'),
  ];


const Transaction = () => {
    
    return (
    <div className='Transaction' >
    <h2>Transactions</h2>
    <TableContainer className='Transaction-table' component={Paper}>
    <Table sx={{ width : '100%' }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Customer</TableCell>
          <TableCell align="right">Date</TableCell>
          <TableCell align="right">Amount</TableCell>
          <TableCell align="right">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.date}</TableCell>
            <TableCell align="right">{row.amount}</TableCell>
            <TableCell className='status' align="right">{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </div>
   
    );
};

export default Transaction;