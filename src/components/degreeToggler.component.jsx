import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {switchDegreeType} from "../redux/degrees/degrees.actions";

const Container = styled.div`
        font-size: 1.2vw;
        width: 10%;
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
            width: 20%;
            font-size: 5vw;
            padding: 1vh 0;
        }
`

const DegreeToggler = () => {
    
    const dispatch = useDispatch();
    const currentDegree = useSelector(state => state.degrees.degreeType)


    return(
    <Container onClick={() => dispatch(switchDegreeType())}>
        {
            currentDegree ? "°C" : "°F"
        }
    </Container>
    )
}

export default DegreeToggler;