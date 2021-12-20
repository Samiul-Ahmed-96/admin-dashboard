import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import './Chart.scss';


const Chart = () => {
    const data = [
        {
          name: 'Jan',
          uv: 4000,
          pv: 2400,

        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div className='chart'>
        <h2>Users Analytics</h2>
        <ResponsiveContainer sx={{width:"100%" , padding : "10px"}} aspect={4/1}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke='#09097a'/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Active User" stroke="#09097a" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Chart;