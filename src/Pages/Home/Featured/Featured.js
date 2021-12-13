import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import React from 'react';
import './Featured.scss';

const Featured = () => {
    return (
        <div className='featured'>

        <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
            <div className="featured-item">
                <div className="title"><h3>Revenue</h3></div>
                <div className="cost">
                    <span>$2,3412-12</span>
                    <ArrowUpwardOutlined/>
                </div>
                <h4>Compared With Last Month</h4>
            </div>
            </Grid>
            <Grid item md={4} xs={12}>
                <div className="featured-item">
                    <div className="title"><h3>Sales</h3></div>
                    <div className="cost">
                        <span>-$1,1242-2</span>
                        <ArrowDownwardOutlined/>
                    </div>
                    <h4>Compared With Last Month</h4>
                </div>
            </Grid>
            <Grid item md={4} xs={12}>
                <div className="featured-item">
                <div className="title"><h3>Cost</h3></div>
                <div className="cost">
                    <span>$4,3412-40</span>
                    <ArrowUpwardOutlined/>
                </div>
                <h4>Compared With Last Month</h4>
                </div>
            </Grid>
        </Grid>
        </div>
    );
};

export default Featured;