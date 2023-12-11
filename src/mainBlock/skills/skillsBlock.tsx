import React from "react";
import style from './SkillBlock.module.css'
import styleContainer from '../../styles/container.module.css'
import {Skill} from "./skill/skill";
import css_icon from "../../img/icons8-css-48.png";
import html_icon from '../../img/icons8-html.svg'
import js_icon from '../../img/icons8-javascript (1).svg'
import ts_icon from '../../img/icons8-typescript-28.png'


export const SkillsBlock = () => {
    return (
        <div className={style.skillsMain}>

            <div className={`${styleContainer.container} ${style.skillContainer}`}>

                <h2 className={`${style.skillsPart} ${style.title}`}>Мои навыки</h2>
                <div className={style.description_}>Ocновные технологии с которыми я работаю</div>

                {/*<h2>Языки програмирования</h2>*/}
                <div className={style.skillsPart}>
                    <Skill title={'HTML'} icon={html_icon}/>
                    <Skill title={'CSS'} icon={css_icon}/>
                    <Skill title={'JavaScript'} icon={js_icon}/>
                    <Skill title={'TypeScript'} icon={ts_icon}/>

                {/*<h2>Frameworks</h2>*/}

                <Skill title={'React-Redux'}/>
                <Skill title={'RTK-Query'}/>
                <Skill title={'React'}/>
                <Skill title={'Redux-Toolkit'}/>
                <Skill title={'React-router-dom'}/>
                    <Skill title={'axios'}/>
                    <Skill title={'Material-Ui'}/>
                    <Skill title={'Formik'}/>
                    <Skill title={'Unitesting'}/>
                    <Skill title={'PostMan'}/>
                    <Skill title={'Git'}/>
                    <Skill title={'gh-pages'}/>
                    <Skill title={'Figma'}/>
                {/*<h2>Библиотеки</h2>*/}  </div>
                <div className={style.skillsPart}>

                </div>
                {/*<h2>Тестирование</h2>*/}
                <div className={style.skillsPart}>

                </div>

                <div className={style.skillsPart}>

                </div>
            </div>
        </div>
    )

}