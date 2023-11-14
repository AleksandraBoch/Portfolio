import React from "react";
import style from './MyWorks.module.css'
import styleContainer from '../styles/container.module.css'
import {Works} from "./Works/works";

export const MyWorks=()=>{
    return(
        <div className={style.worksMain}>
            <div className={`${styleContainer.container} ${style.workContainer}`}>
                    <h2 className={style.title}>My works</h2>
                    <div className={style.workPart}>
                        <Works title={'TodoList'} description={'App witch can help you to plan everything'}/>
                        <Works title={'Some Name'} description={'description '}/>
                        <Works title={'Some Name'} description={'description '}/>
                        <Works title={'Some Name'} description={'description '}/>
                        <Works title={'Some Name'} description={'description '}/>
                    </div>

            </div>

        </div>
    )
}