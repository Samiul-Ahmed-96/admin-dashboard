import React from 'react';
import Chart from '../Chart/Chart';
import Featured from '../Featured/Featured';
import Members from '../Members/Members';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Featured/>
            <Chart/>
            <Members/>
        </div>
    );
};

export default Home;