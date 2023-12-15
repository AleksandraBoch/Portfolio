import React from "react";
import style from './myWorks.module.css'
import styleContainer from '../styles/container.module.css'
import {Works} from "./Works/works";

export const MyWorks=()=>{
    return(
        <div className={style.worksMain}>
            <div className={`${styleContainer.container} ${style.workContainer}`}>


                    <div className={style.title}>My works</div>
                    <div className={style.workPart}>
                        <Works title={'TodoList'} description={'App witch can help you to plan everything'}/>
                        <Works title={'Skills Portfolio'} description={'Here you can see what can I  do=)'}/>
                        <Works title={'Some Name'} description={'description '}/>
                        <Works title={'Some Name'} description={'description '}/>
                        {/*<Works title={'Some Name'} description={'description '}/>*/}
                    </div>

            </div>

        </div>
    )
}