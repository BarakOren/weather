import React, {useContext} from "react";
import styled, {ThemeContext} from "styled-components";
import {Link} from "react-router-dom";
import { useLocation } from "react-router";
import ThemeToggler from "./themeToggler.component";
import DegreeToggler from "./degreeToggler.component";
import { useDispatch } from "react-redux";

const HeaderContainer = styled.div`
    background: ${p => p.theme.header.headerBackground};
    height: 16vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    box-shadow: 1px 1px 10px #000000;
    transition: 0.2s all;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70%;
`
    


const Name = styled.p`
    font-size: 2vw;
    color: ${p => p.theme.text};
    transition: 0.2s all;
    margin: 0;

    @media only screen and (max-width: 1500px){
        font-size: 2vw;
    }

    @media only screen and (max-width: 1000px){
        font-size: 2vw;
    }
`

const Items = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


const StyledLink = styled(Link)`
    &.link{
        text-decoration: none;
        font-size: 1.2vw;
        padding: 4px 1.3vw;
        margin: 0;
        transition: color .5s;
        color: ${p => p.theme.header.headerText};
        transition: 0.2s all;
        border-radius: 25px;

        &:hover{
            color: ${p => p.theme.header.headerHover};
            cursor: pointer;
        }
    }

    &.selected {
        border: 2px solid ${p => p.theme.header.selectedHeader};
        color: ${p => p.theme.header.selectedHeader};

        &:hover{
            border: 2px solid ${p => p.theme.header.headerHover};
            color: ${p => p.theme.header.headerHover};
        }
    }

`

const Header = () => {

    const {id, setTheme} = useContext(ThemeContext);
    const {pathname} = useLocation();
    const dispatch = useDispatch()

    return(
        <HeaderContainer>
                <Content>
                    <Name>WeatherApp</Name>
                    <Items>
                        <StyledLink className={`link ${pathname === "/" ? "selected" : ""}`} to="/">Home</StyledLink>
                        <StyledLink className={`link ${pathname === "/favorites" ? "selected" : ""}`} to="/favorites">Favorites</StyledLink>  
                        <ThemeToggler />
                        <DegreeToggler />
                    </Items>
                </Content>
        </HeaderContainer>
    )
}

export default Header;