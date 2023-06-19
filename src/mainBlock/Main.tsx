import React from "react";
import style from './Main.module.css'
import styleContainer from '../styles/container.module.css'


export const MainBlock=()=>{
    return(
        <div className={style.main}>
            <div className={styleContainer.container}>
            <div className={style.greeting}>
                <span>Greeting</span>
                <h1>Im</h1>
                <p>about myself</p>

            </div>
            <div className={style.photo}></div>
            </div>
        </div>
    )

}