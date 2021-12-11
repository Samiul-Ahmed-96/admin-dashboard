import { Language, NotificationsNoneOutlined, Settings } from '@mui/icons-material';
import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-wrapper">
                <div className="nav-left"><div className="logo"><h1>NikAdmin</h1></div></div>
                <div className="nav-right">
                    <div className="nav-icons-container">
                       <div className="nav-icon-item">
                       <NotificationsNoneOutlined/>
                       <span className='notification-badge'>2</span>
                       </div>
                       <div className="nav-icon-item">
                       <Language/>
                       <span className='notification-badge'>2</span>
                       </div>
                       <div className="nav-icon-item">
                       <Settings/>
                       <span className='notification-badge'>2</span>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;