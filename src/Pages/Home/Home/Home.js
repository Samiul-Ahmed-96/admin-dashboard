import React from 'react';
import Chart from '../Chart/Chart';
import Featured from '../Featured/Featured';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Featured/>
            <Chart/>
        </div>
    );
};

export default Home;