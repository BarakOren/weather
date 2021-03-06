import React from "react";
import MainCard from "./mainCard.component";
import FiveDayCard from "./fiveDaysCard.component";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Spinner from "../spinner";

const WeatherCards = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    box-shadow: 7px 7px 20px ${p => p.theme.shadow};
    border-radius: 25px;
    &.margin{
        margin: 5vh 0;
    }
    @media only screen and (max-width: 800px) {
        flex-direction: column;
        height: auto;
        margin: 3vh 0;
    }
`

const FiveDaysContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 800px) {
        width: 100%;
        flex-direction: column;
    }
`

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background-color: ${p => p.theme.mainCard.background1};
`

const Error = styled.p`
    font-size: 2vw;
    font-weight: 400;
    color: ${p => p.theme.text};
`

const FullCard = ({favorite}) => {

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
            name: "Tel Aviv",
            degree: "23*C",
            status: "parlty cloudy"
        }
    ]
    
    const loading = useSelector(state => state.mainCity.loading)
    const error = useSelector(state => state.mainCity.error)
    const fiveDays = useSelector(state => state.mainCity.fiveDays)

    return(
            <WeatherCards>
                {loading && <SpinnerContainer><Spinner/></SpinnerContainer>}
                {error && <SpinnerContainer><Error>{error}</Error></SpinnerContainer>}
                
                {fiveDays && !loading && !error &&
                <>
                <MainCard />
                <FiveDaysContainer>
                    {
                    fiveDays.DailyForecasts.slice(1,5).map((data, index) => {
                        return <FiveDayCard index={index} key={index} data={data}/>
                        })
                    } 
                </FiveDaysContainer>
                </>
                } 
            </WeatherCards>
    )

}

export default FullCard;

//TESTMODE
/* {
test.slice(1,5).map((data, index) => {
    return <FiveDayCard index={index} key={index} data={data}/>
    })
}  */
