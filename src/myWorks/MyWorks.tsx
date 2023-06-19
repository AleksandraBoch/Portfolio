import React from "react";
import style from './MyWorks.module.css'
import styleContainer from '../styles/container.module.css'
import {Works} from "./Works/works";

export const MyWorks=()=>{
    return(
        <div className={style.works}>
            <div className={styleContainer.container}>
                <div>
                    <h2>My works</h2>
                    <div className={style.workPart}>
                        <Works title={'Some Name'} description={'description '}/>

                    </div>
                </div>

            </div>

        </div>
    )
}