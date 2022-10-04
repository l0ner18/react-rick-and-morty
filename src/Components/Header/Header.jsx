import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css'

export const Header = (props) => {
    return (
        <div className={s.header}>
            <img src="https://free-png.ru/wp-content/uploads/2021/07/free-png.ru-7.png"/>
            <div className={s.menu}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <p>{props.phone}</p>
            </div>
        </div>
    )
}