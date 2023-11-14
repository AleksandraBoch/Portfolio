import React from "react";
import style from './contactItem.module.css'

type ContactItemType = {
    icon?: string,
    contact: string
}

const ContactItem = (props: ContactItemType) => {
    return (
        <div className={style.ContactItem}>
            <div className={style.icon}>
                <img src={props.icon}/>
            </div>
            <div  className={style.contact}>{props.contact}</div>

        </div>
    );
};

export default ContactItem;