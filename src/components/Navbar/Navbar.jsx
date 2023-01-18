import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const checkActive = ({isActive}) => isActive ? s.active : s.item;
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'profile'} className={checkActive}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'dialogs'} className={checkActive}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'news'} className={checkActive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'music'} className={checkActive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'settings'} className={checkActive}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;