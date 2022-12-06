import React from 'react';
import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <ul className="menu">
            <li className="link">
                <NavLink
                    to="/"
                    className={ ({isActive}) => isActive && "active"}

                >Home</NavLink>
            </li>
            <li>
                <NavLink
                    to="/posts"
                    className={ ({isActive}) => isActive && "active"}

                > Posts Page</NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={ ({isActive}) => isActive && "active"}

                > About Page</NavLink>
            </li>
            <li>
                <NavLink
                    to="/contacts"
                    className={ ({isActive}) => isActive && "active"}

                > Contacts Page</NavLink>
            </li>

        </ul>
    );
}

export default Menu;