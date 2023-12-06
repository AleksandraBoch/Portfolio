import React from "react";
import style from './Main.module.css'
import styleContainer from '../styles/container.module.css'
import ph from '../img/photo.jpg'


export const MainBlock=()=>{
    return(
        <div className={style.main}>
            <div className={styleContainer.container}>
            <div className={style.greeting}>
                <h1 className={style.text}>Aleksandra Bocharova</h1>
                <div className={style.dev}>
                    Frontend developer
                </div>

                <p>что то о себе
                </p>

            </div>
            <div className={style.photo}>
                <img className={style.img} src={ph}/>
            </div>
            </div>
        </div>
    )

}