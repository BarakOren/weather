import React, {useState} from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { grey } from '@material-ui/core/colors';
import {Link} from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";
import ThemeToggler from "./themeToggler.component";
import DegreeToggler from "./degreeToggler.component";

const Hamburger = styled(MenuIcon)`
    z-index: 9;
    position: fixed;
    top: 3%;
    left: 5%;
    transition: transform 200ms;
    cursor: pointer;
    display: none !important;

    @media only screen and (max-width: 800px) {
        display: initial !important;
    }
`

const MenuContainer = styled.div`
    z-index: 8;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    transition: left 0.8s ease;
    background: ${p => p.theme.menuBackground};
    display: none !important;
    
    &.hidden {
    left: -101vw;
    }

    @media only screen and (max-width: 800px) {
        display: initial !important;
    }

`
    
const ItemContainer = styled.div`
        margin-top: 12vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

const MenuItem = styled(Link)`
        color: #8e8d8f;
        margin: 5% 0;
        padding: 3% 7%;
        border: solid 1px;
        border-color: #8e8d8f;
        border-radius: 25px;
        font-size: 7vw;
        text-decoration: none;
    `







const Menu = () => {

    const [menuToggle, setMenuToggle] = useState(false);

    const location = useLocation().pathname;

    return(
        <>
            <Hamburger onClick={() => setMenuToggle(!menuToggle)} style={{ color: grey[100], fontSize: 40 }} />

            <MenuContainer className={`menu ${menuToggle ? "" : "hidden"}`}>
                <ItemContainer>
                    <MenuItem style={{color: location === "/" ? "white" : "", borderColor: location === "/" ? "white" : ""}} to="/" onClick={() => setMenuToggle(false)}>Home</MenuItem>
                    <MenuItem style={{color: location === "/favorites" ? "white" : "", borderColor: location === "/favorites" ? "white" : ""}} to="/favorites" onClick={() => setMenuToggle(false)} >Favorites</MenuItem>
                    <ThemeToggler />
                    <DegreeToggler />
                </ItemContainer>
            </MenuContainer>
        </>
    )
}



export default Menu;