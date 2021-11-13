import React, {useEffect} from "react";
import styled from "styled-components";
import Search from "./search.component";
import FullCard from "./main/fullCard.component";
import GetLocation from "./getLocation.component";
import {setMainCity} from "../redux/mainCity/mainCity.actions";
import { useDispatch } from "react-redux";

const MainContaier = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (max-width: 800px) {
        width: 100vw;
        height: auto;
        padding: 10vh 0;
    }
`

const ContectContaier = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const Homepage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setMainCity())
    }, [dispatch])


    return(
        <MainContaier>
            <ContectContaier>
            <Search />
            <FullCard />
            <GetLocation />
            </ContectContaier>
        </MainContaier>
    )
}

export default Homepage;