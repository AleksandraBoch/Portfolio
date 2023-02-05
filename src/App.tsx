import React from 'react';

import './App.css';
import {Header} from "./header/header";
import {Footer} from "./footer/footer";
import {Navi} from "./nav/nav";

function App() {
  return (
    <div>
      <header >
        <Header/>
<Navi/>
          <Footer/>
      </header>
    </div>
  );
}

export default App;
