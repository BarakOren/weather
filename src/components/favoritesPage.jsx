import React from "react";
import styled from "styled-components";
import FavFullCard from "./favorites/FavFullCard";
import { useSelector } from "react-redux";

const Container = styled.div`
    width: 100vw;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

`

const ContectContaier = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 5vh 0;
`




const Favorites = () => {

    const test = [
        {
            id: "1",
            date: "Wensdy",
            name: "Tel Aviv",
            degree: "23*C",
            status: "parlty cloudy"
        },
        {
            id: "2",
            date: "Wensdy",
            name: "Tel Aviv",
            degree: "23*C",
            status: "parlty cloudy"
        },
        {
            id: "3",
            date: "Wensdy",
            name: "Tel Aviv",
            degree: "23*C",
            status: "parlty cloudy"
        },
        {
            id: "4",
            date: "Wensdy",
            name: "Tel Aviv",
            degree: "23*C",
            status: "parlty cloudy"
        },
        {
            id: "5",
            date: "Wensdy",
            name: "Tokyo",
            degree: "23*C",
            status: "parlty cloudy"
        },
    ]

    const favorites = useSelector(state => state.favorites.saved)

    return(
        <Container>
            <ContectContaier>
                {
                    favorites.map((city) => { 
                        return <FavFullCard city={city} key={city.key} />
                    })
                }   
            </ContectContaier>
        </Container>
    )
}

export default Favorites;