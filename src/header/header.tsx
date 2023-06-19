import React from "react";
import style from './Header.module.css'
import {Navi} from "../nav/nav";

export const Header=()=>{
    return(
        <div className={style.header}>
<Navi/>
        </div>
    )

}