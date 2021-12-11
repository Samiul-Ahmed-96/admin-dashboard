import { AutoGraphOutlined, LineStyleOutlined, TrendingDownOutlined } from '@mui/icons-material';
import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3>Dashboard</h3>
                    <ul>
                        <div className="menu-item">
                        <LineStyleOutlined/>
                        <span>Home</span>
                        </div>
                        <div className="menu-item">
                        <AutoGraphOutlined/>
                        <span>Sales</span>
                        </div>
                        
                        <div className="menu-item">
                        <TrendingDownOutlined/>
                        <span>Analytics</span>
                        </div>
                    
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;