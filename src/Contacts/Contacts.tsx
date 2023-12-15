import React from "react";
import style from './contacts.module.css'
import styleContainer from '../styles/container.module.css'
import ContactItem from "./ContactItem";
import telegram from '../img/icons8-telegram.svg'
import gh from '../img/icons8-github.svg'
import mail from '../img/icons8-mail.svg'

export const Contacts=()=>{
    return(
        <div className={style.contactsBlock}>

            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <div className={style.title}>Contact me</div>
                <div className={style.contactBlock}>
                <ContactItem contact={'My GitHub'} icon={gh}/>
                <ContactItem contact={'@ShemaFoxy'} icon={telegram}/>
                <ContactItem contact={'ShemaFoxy@mail.com'} icon={mail}/>
            </div>
            </div>

        </div>
    )
}