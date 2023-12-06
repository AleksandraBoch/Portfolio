import React from 'react';

import './App.css';
import {Header} from "./header/header";
import {Footer} from "./footer/footer";
import {MainBlock} from "./mainBlock/Main";
import {SkillsBlock} from "./mainBlock/skills/skillsBlock";
import {MyWorks} from "./myWorks/MyWorks";
import {Contacts} from "./Contacts/Contacts";

function App() {
    return (
        <div className={'App_main'}>
            <header>
                <Header/>
                <MainBlock/>
                <SkillsBlock/>
                <MyWorks/>
                <Contacts/>
                <Footer/>
            </header>
        </div>
    );
}

export default App;
