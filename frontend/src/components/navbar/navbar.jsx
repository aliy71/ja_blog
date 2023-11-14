import { MdAdminPanelSettings, MdDarkMode, MdLightMode, MdSecurity } from 'react-icons/md'
import SocialMedia from "../social_media/socialMedia";

import style from './navbar.module.css'
import navbarLinks from "../../constants/navbarLink";
import NavLink from "./navLink/navLink";
import Button from "../../ui/button/button";
import Logo from "../../units/logo/logo";
import { useState } from "react";


const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const changeDarkMode = () => {
        setIsDarkMode(prev => !prev);
    }

    return (
        <div className={style.navbar}>
            <div className={`container field`} style={{}}>
                <Logo />
                <div className={style.field} style={{ width: '70%', height: '100%', justifyContent: 'start', gap: '2rem' }}>
                    <ul className={style.field} style={{ width: '70%', height: '100%', justifyContent: 'start', gap: '2rem' }}>
                        {
                            navbarLinks.map(link => <NavLink
                                title={link.title}
                                key={link.id}
                                path={link.path}
                                icon={link.icon}
                            />)
                        }
                    </ul>
                    <SocialMedia />
                </div>
                <div className="btn__group">
                    <Button
                        title={isDarkMode ? 'LightMode' : 'DarkMode'}
                        icon={isDarkMode ? <MdLightMode fontSize={'1.2rem'} style={{ marginLeft: '5px' }} /> : <MdDarkMode fontSize={'1.2rem'} style={{ marginLeft: '5px' }} />}
                        type={'btn primary'}
                        clickHandlerFn={changeDarkMode}
                    />
                </div>
                {/* <div className="btn_group field">
                    <Button title={'sign-in'} type={'secondry'} icon={<MdAdminPanelSettings size={'20px'}/>} link={'sign-in'}/>
                    <Button title={'sign-up'} type={'primary'} icon={<MdSecurity size={'20px'}/>} link={'sign-up'}/>
                </div> */}
            </div>
        </div>
    );
}

export default Navbar;