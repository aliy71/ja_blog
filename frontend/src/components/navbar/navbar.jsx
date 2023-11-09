import { Link } from "react-router-dom";
import { MdAdminPanelSettings, MdDarkMode, MdSecurity } from 'react-icons/md'
import SocialMedia from "../social_media/socialMedia";
import socialMediaLinks from "../../constants/socialMedia";

import style from './navbar.module.css'
import navbarLinks from "../../constants/navbarLink";
import NavLink from "./navLink/navLink";
import Button from "../../ui/button/button";


const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={`container field`}>
                <h5 className="logo"><Link to={'/'}>ja blogs</Link></h5>
                <ul className={style.field} style={{ width: '30%', height: '100%', justifyContent: 'start', gap: '2rem' }}>
                    {
                        navbarLinks.map(link => <NavLink title={link.title} key={link.id} path={link.path} icon={link.icon} />)
                    }
                </ul>
                <SocialMedia />
                {/* <div className="btn_group field">
                    <Button title={'sign-in'} type={'secondry'} icon={<MdAdminPanelSettings size={'20px'}/>} link={'sign-in'}/>
                    <Button title={'sign-up'} type={'primary'} icon={<MdSecurity size={'20px'}/>} link={'sign-up'}/>
                </div> */}
            </div>
        </div>
    );
}

export default Navbar;