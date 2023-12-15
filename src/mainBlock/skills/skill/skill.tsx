import React, {useState} from "react";
import style from './Skill.module.css'

export type PropsType = {
    title: string,
    description?: string
    icon?: any
}

export const Skill = (props: PropsType) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div className={style.skill}
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}>
            <div className={style.icon}>
                <img src={props.icon}/>
            </div>
            {!hovered && <h3> {props.title}</h3>}
            {hovered && <div className={style.description}>{props.description}</div>}

        </div>
    )

}