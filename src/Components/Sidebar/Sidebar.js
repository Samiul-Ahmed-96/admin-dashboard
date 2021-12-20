import { AccountCircle, AddCommentOutlined, AutoGraphOutlined, EmailOutlined, LineStyleOutlined, ManageAccountsOutlined, MessageOutlined, PaidOutlined, ProductionQuantityLimitsOutlined, ReportGmailerrorredOutlined, TrendingDownOutlined } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to="/home"><span>Home</span></Link>
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
                <div className="sidebar-menu">
                    <h3>Quick Menu</h3>
                    <ul>
                        <div className="menu-item">
                        <AccountCircle/>
                        <Link to="/user"><span>User</span></Link>
                        </div>
                        <div className="menu-item">
                        <ProductionQuantityLimitsOutlined/>
                        <span>Products</span>
                        </div>
                        
                        <div className="menu-item">
                        <PaidOutlined/>
                        <span>Transaction</span>
                        </div>
                        <div className="menu-item">
                        <ReportGmailerrorredOutlined/>
                        <span>Reports</span>
                        </div>
                    
                    </ul>
                </div>
                </div>
                <div className="sidebar-menu">
                    <h3>Notifications</h3>
                    <ul>
                        <div className="menu-item">
                        <EmailOutlined/>
                        <span>Mail</span>
                        </div>
                        <div className="menu-item">
                        <AddCommentOutlined/>
                        <span>Feedback</span>
                        </div>
                        
                        <div className="menu-item">
                        <MessageOutlined/>
                        <span>Message</span>
                        </div>
                    
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3>Staff</h3>
                    <ul>
                        <div className="menu-item">
                        <ManageAccountsOutlined/>
                        <span>Manage</span>
                        </div>
                        <div className="menu-item">
                        <TrendingDownOutlined/>
                        <span>Analytics</span>
                        </div>
                        
                        <div className="menu-item">
                        <ReportGmailerrorredOutlined/>
                        <span>Reports</span>
                        </div>
                    
                    </ul>
                </div>
        </div>
    );
};

export default Sidebar;