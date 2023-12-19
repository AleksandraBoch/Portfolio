import React from 'react';

import './App.css';
import {Header} from "./header/header";
import {Footer} from "./footer/footer";
import {MainBlock} from "./mainBlock/Main";
import {SkillsBlock} from "./mainBlock/skills/skillsBlock";
import {MyWorks} from "./myWorks/MyWorks";
import {Contacts} from "./Contacts/Contacts";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className={'App_main'}>
            <header>
                <Header/>
                <Routes>
                    <Route path="/main" element={<MainBlock />} />
                    <Route path="/skills" element={<SkillsBlock />} />
                    <Route path="/works" element={<MyWorks />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
                <Footer/>
            </header>
        </div>
    );
}

export default App;
