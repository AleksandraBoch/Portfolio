import React from "react";
import style from  './header.module.css'
import {Navi} from "../nav/nav";

export const Header=()=>{
    return(
        <div className={style.header}>
            <div >ProfileInfo</div>
<Navi/>
        </div>
    )

}