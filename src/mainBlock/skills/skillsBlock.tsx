import React from "react";
import style from './SkillBlock.module.css'
import styleContainer from '../../styles/container.module.css'
import {Skill} from "./skill/skill";
import css_icon from "../../img/icons8-css-48.png";
import html_icon from'../../img/icons8-html.svg'
import js_icon from'../../img/icons8-javascript (1).svg'
import react_icon from'../../img/icons8-react-js.svg'

export const SkillsBlock = () => {
    return (
        <div className={style.skillsMain}>
            <div className={`${styleContainer.container} ${style.skillContainer}`}>

                <h2 className={style.title}>Skills</h2>
                <div className={style.skillsPart}>
                    <Skill title={'HTML'} description={'//'} icon={html_icon}/>
                    <Skill title={'CSS'} description={'//'} icon={css_icon}/>
                    <Skill title={'JavaScript'} description={'//'} icon={js_icon}/>
                    <Skill title={'React'} description={'//'} icon={react_icon}/>

                </div>

            </div>
        </div>
    )

}