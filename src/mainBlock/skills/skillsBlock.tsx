import React from "react";
import style from './SkillBlock.module.css'
import styleContainer from '../../styles/container.module.css'
import {Skill} from "./skill/skill";

export const SkillsBlock = () => {
    return (
        <div className={style.skillsMain}>
            <div className={`${styleContainer.container} ${style.skillContainer}`}>

                <h2 className={style.title}>Skills</h2>
                <div className={style.skillsPart}>
                    <Skill title={'css'} description={'//'}/>
                    <Skill title={'js'} description={'//'}/>
                    <Skill title={'HTML'} description={'//'}/>

                </div>

            </div>
        </div>
    )

}