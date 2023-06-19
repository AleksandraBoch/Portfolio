import React from "react";
import style from './Skill.module.css'

type PropsType={
    title:string,
    description:string
}

export const Skill=(props:PropsType)=>{
    return(
        <div className={style.skill}>

            <div className={style.icon}>
<h3> {props.title}</h3>
                <div className={style.description}>
                    {props.description}
                </div>
            </div>
        </div>
    )

}