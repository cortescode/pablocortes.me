import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Style from "./css/floatingMenu.module.css";
import { ImMenu, ImCross } from "react-icons/im";


function FloatingMenu(props) {

    const [menuIsBeingShowed, setMenuState] = useState(false);

    function showOrHideMenu() {
        try {
            menuIsBeingShowed? setMenuState(false) : setMenuState(true);;
        } catch (error) {
            throw error;
        }

    }

    return(
        <nav className={Style.floatingMenu}>
            <button className={Style.floatingMenuButton} onClick={showOrHideMenu}>
                { menuIsBeingShowed ? (<ImCross/>) : (<ImMenu/>) }
            </button>
            { menuIsBeingShowed ? 
                (<ul className={Style.links}>
                    <li>
                        <NavLink to="/" onClick={showOrHideMenu} className={({ isActive }) => isActive ? Style.activeLink : Style.link}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" onClick={showOrHideMenu} className={({ isActive }) => isActive ? Style.activeLink : Style.link}>
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" onClick={showOrHideMenu} className={({ isActive }) => isActive ? Style.activeLink : Style.link}>
                            Blog
                        </NavLink>
                    </li>
                </ul>) : (<div></div>)
            }
            
        </nav>
    );
}

export default FloatingMenu;