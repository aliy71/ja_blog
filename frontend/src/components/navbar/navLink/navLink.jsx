import { Link } from "react-router-dom";

import style from './navLink.module.css'
import { useContext } from "react";
import { NavbarActiveContext } from "../../../context/mainContext";

const NavLink = ({title, path, icon}) => {
    const { linkActive, setLinkActiveHandler } = useContext(NavbarActiveContext)
    return (
        <li 
            className={`${style.list} ${linkActive === path ? style.active : ''}`} 
            onClick={() => setLinkActiveHandler(path)} 
        >
            <Link to={path}>{title}</Link>
            {icon}
        </li>
    );
}

export default NavLink;