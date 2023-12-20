import React, {useEffect, useRef, useState} from "react";
import style from './Header.module.css'
import {Navi} from "../nav/nav";
import header from './Header.module.css';


export const Header = () => {

    const h2ref = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (h2ref.current) {
                const rect = h2ref.current.getBoundingClientRect();
                if (rect.top !== 0) {
                    setPosition(true);
                } else {
                    setPosition(false);
                }
            }
        };
        const handleScrollReturnToTop = () => {
            if (window.scrollY === 0) {
                setPosition(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScrollReturnToTop);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScrollReturnToTop);
        };
    }, []);
    const scrollMenu = position ? header.header : header.headerActive;
    return (
        <div className={style.header}>
            <Navi/>
        </div>
    )

}