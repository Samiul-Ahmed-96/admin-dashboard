import React from 'react';
import Chart from '../Chart/Chart';
import Featured from '../Featured/Featured';
import Members from '../Members/Members';
import Transaction from '../Transaction/Transaction';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Featured/>
            <Chart/>
            <div className="members-transaction-container">
            <Members/>
            <Transaction/>
            </div>
        </div>
    );
};

export default Home;