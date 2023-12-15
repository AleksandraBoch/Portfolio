import React from "react";
import style from './SkillBlock.module.css'
import styleContainer from '../../styles/container.module.css'
import {Skill} from "./skill/skill";
import css_icon from "../../img/css.png";
import html_icon from '../../img/html.png'
import js_icon from '../../img/javascript.png'
import ts_icon from '../../img/typescript.png'
import react from '../../img/react.png'
import api from '../../img/api.png'
import lib from '../../img/library.png'
import test from '../../img/testing.png'

//#00D9FF


export const SkillsBlock = () => {
    const skills = [
        {id: 1, title: 'HTML', icon: html_icon, description: 'HTML5'},
        {id: 2, title: 'CSS', icon: css_icon, description: 'Is a CSS-in-JS styling solution that creates a platform for developers to write actual CSS to style components.'},
        {id: 3, title: 'JavaScript', icon: js_icon, description: 'The Programming Language for the Web that conforms to the ECMAScript specification.'},
        {id: 4, title: 'TypeScript', icon: ts_icon, description: 'A syntactic superset of JavaScript which adds static typing.'},
        {id: 5, title: 'React', icon: react, description: 'JavaScript-based UI development library.'},
        {id: 6, title: 'API', icon: api, description: 'Architectural style for an application program interface (API) that uses HTTP requests to access and use data.'},
        {id: 7, title: 'libararys', icon: lib, description: 'axios,React-router-dom, React-Redux,Formik'},
        {id: 8, title: 'Testing', icon: test, description: 'Unitesting, Storybook'},
    ]
    //React-Redux  RTK-Query  React-router-dom  axios  Formik Unitesting Git gh-pages Figma
    return (
        <div className={style.skillsMain}>
            <div className={`${styleContainer.container} ${style.skillContainer}`}>
                <h2 className={`${style.skillsPart} ${style.title}`}>Мои навыки</h2>
                {/*<div className={style.description_}>Ocновные технологии с которыми я работаю</div>*/}
                <div className={style.skillsPart}>
                    {skills.map(el =>
                        <Skill
                            icon={el.icon}
                            title={el.title}
                            description={el.description}

                        />)}


                </div>
            </div>
        </div>
    )
}