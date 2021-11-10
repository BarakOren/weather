import React, {useState} from "react";
import Header from "./components/header.component";
import Homepage from './components/homepage.component';
import Favorites from "./components/favoritesPage";
import DarkTheme from "./themes/dark";
import LightTheme from "./themes/light";
import {ThemeProvider, createGlobalStyle} from "styled-components";
import { Route , Routes } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;  
  -webkit-touch-callout: none; 
  -webkit-user-select: none; 
   -khtml-user-select: none; 
     -moz-user-select: none; 
      -ms-user-select: none; 
          user-select: none;
    text-align: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: black;
    overflow-x: hidden;
    background-image: ${p => p.theme.background};
  }
::-webkit-scrollbar-thumb{
  background: ${p => p.theme.scrollerBackground};
  border-radius: 6px ;
}

::-webkit-scrollbar-thumb:hover{
  background: ${p => p.theme.scrollerHover};
}
`

function App() {
  const [theme, setTheme] = useState(DarkTheme);
  return ( 
    <ThemeProvider theme={{...theme, setTheme: () => {
      setTheme(s => s.id === "light" ? DarkTheme : LightTheme)
    }}}>
      <GlobalStyle />
      <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />}/> 
          <Route exact path="/favorites" element={<Favorites />}/>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
