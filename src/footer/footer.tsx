import React from "react";
import style from './footer.module.css'
import styleContainer from '../styles/container.module.css'

export const Footer=()=>{
    return(
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>No Name</h2>

                <div className={style.picsContainer}>
                    <div className={style.pic}></div>
                    <div className={style.pic}></div>
                    <div className={style.pic}></div>
                    <div className={style.pic}></div>
                </div>

                <h3 className={style.title}>&#169;  Aleksandra Bocharova</h3>
            </div>

        </div>
    )
}