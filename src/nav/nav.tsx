import React from "react";
import style from './Nav.module.css'
import {Link} from "react-router-dom";

export const Navi = () => {
    return (
        <div className={style.nav}>
            <Link to="/main">Main</Link>
            <Link to="/skills">My skills</Link>
            <Link to="/works">My projects</Link>
            <Link to="/contacts">Contact me</Link>
        </div>
    )
}