import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

import Style from "./menu.module.css";

function Menu(props) {

    const [sticky, setSticky] = useState(false);

    window.addEventListener('scroll', (event) => {
        setSticky(true);
    })

    return(
        <nav className={sticky ? Style.stickyMenu : Style.menu}>
            <div className={Style.textLogo}>
                <h3>Pablo Cortes</h3>
            </div>
            <ul className={Style.links}>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? Style.activeLink : Style.link}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? Style.activeLink : Style.link}>
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? Style.activeLink : Style.link}>
                        Blog
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;