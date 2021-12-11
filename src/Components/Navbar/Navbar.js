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
                       <span className='notification-badge'>5</span>
                       </div>
                       <div className="nav-icon-item">
                       <Settings/>
                       
                       </div>
                       <div className="profile-img">
                        <img src="https://lh3.googleusercontent.com/EGw9eNlQog5p6NP3oxBIiK8SNHktcUowFuBTqCGPLcWTskHBEn9LWMizzlly0FkxBegb1Nlz902W5QT7HKKeP_Ct488WgU3Rtnkypz_kaJewvhhIaC0JaliIgLVlRA88-OTac71uwhUXONgW5H50Y2l62nBuja5d1rLxFJAdWc_jnhJIGTjWnU0OvQKpJsXpuoDKDF5hn9ZR-lW3QPiWjxnoZP3EsRdY1HuIuGbDXKuT2uUwn6aPQ44Ol2IFWuL0B1LFKumiZlYh-MYC0o3TkuawfKwl-pNxE0-rrjDWKQm8kJrBGrCN3rSoU62cGsxTvS0Q1WuGpHETQF3NAAmkLZvp6hTrono8E-6-Fml7Inp_sa05j-GJTE15UpO-CJCKD4-cobF9h_CM40c1MO1Fs0BP3enjemTXQjkaN-0_dRokweaiPxPM3tlOYLSOlfNuGnyoWDVj0dnypiCZdbfwnem9F5MmbKiMHYXFJEBTtuyGKHYpsXexnEHiWpU76mF0rAlZsQFXWvub_lpiu37JjTtNnTrl6ae5xQ0ND-nMYi_EvETLhI5HLlojoH1vyNAVtYA0CR0_mFtaLgQ3kHILzt7b-XtGEqHHA11D6pzHlhO7pgltdvLU8p-yc1lN8UEsGr4UtWwf_3z_QnDCfzLknNP1BMvfnCiuU4Ayq3RClApTEWMts0oFw_HYoJubOy_06LXsYWdL0KLJy9hm1xBCLNo=w709-h766-no?authuser=0" alt="" />
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;