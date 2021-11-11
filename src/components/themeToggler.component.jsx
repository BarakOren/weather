import React, {useContext} from "react";
import styled, {ThemeContext} from "styled-components";

const Container = styled.div`
    font-size: 1.2vw;
    width: 35%;
    padding: 4px 0;
    margin: 0;
    transition: color .5s;
    color: ${p => p.theme.toggler.text};
    background-color: ${p => p.theme.toggler.background};
    transition: 0.2s all;
    border-radius: 25px;
    
        &:hover{
            color: ${p => p.theme.toggler.hover};
            cursor: pointer;
        }

        @media only screen and (max-width: 800px) {
            width: 50%;
            font-size: 5vw;
            padding: 1vh 0;
        }
    
`

const ThemeToggler = () => {
    
    const {id, setTheme} = useContext(ThemeContext);
    return(
    <Container onClick={() => setTheme()}>
        {id === "dark" ? "Light" : "Dark"} Mode
    </Container>
    )
}

export default ThemeToggler;