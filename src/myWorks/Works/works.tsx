import React from "react";
import style from './works.module.css'

type WorksT={
    title:string,
    description:string
}

export const Works=(props:WorksT)=>{
    return(
        <div className={style.workContainer}>
            <div className={style.photo}>
                <h3>{props.title}</h3>
                <div className={style.description}>{props.description}</div>

            </div>


        </div>
    )
}