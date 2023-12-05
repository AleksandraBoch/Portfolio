import React from "react";
import style from './Main.module.css'
import styleContainer from '../styles/container.module.css'
import ph from '../img/photo.jpg'


export const MainBlock=()=>{
    return(
        <div className={style.main}>
            <div className={styleContainer.container}>
            <div className={style.greeting}>
                <h1 className={style.text}>Hello!</h1>
                <div>
                    My name is Alex and I`m frontend developer
                </div>

                <p>Most part of my life I was interested in medicine- I finished Saint-Petersburg State Pediatric Medical Univercity at 2015, and I`ve been working as a doctor till now.
                    Start programming at school
                </p>

            </div>
            <div className={style.photo}>
                <img src={ph}/>
            </div>
            </div>
        </div>
    )

}