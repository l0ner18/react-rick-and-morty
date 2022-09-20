import React from "react";
import s from './Header.module.css'

export const Header = (props) => {
    return (
        <div className={s.header}>
            <img src="https://free-png.ru/wp-content/uploads/2021/07/free-png.ru-7.png"/>
            <div className={s.menu}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <p>{props.phone}</p>
            </div>
        </div>
    )
}