import React, { useEffect, useState, useCallback } from "react";
import FavFiveDayCard from "./FavfiveDaysCard.component";
import FavMainCard from "./FavMainCard";
import styled from "styled-components";
import Spinner from "../spinner";
import { removeFromFavorites } from "../../redux/favorites/favorites.actions";
import { useDispatch } from "react-redux";

const WeatherCards = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    box-shadow: 7px 7px 20px ${p => p.theme.shadow};
    border-radius: 25px;
    margin: 5vh 0;
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

const X = styled.p`
    padding: 7px 10px;
    background-color: ${p => p.theme.xBackground};
    color: ${p => p.theme.xColor};
    border-radius: 10px;
    position: absolute;
    top: -1.5vh;
    right: -3vw;
    cursor: pointer;
    box-shadow: 3px 3px 5px ${p => p.theme.shadow};
    @media only screen and (max-width: 800px) {
        top: 20px;
        right: -15px;
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

]


const FavFullCard = ({city}) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const currentWeatherCall = `https://dataservice.accuweather.com/currentconditions/v1/${city.key}?apikey=qLUBrhZri1R9pUezxPSGXRWdR3ZH22NS&language=en-us&details=true HTTP/1.1`
    const fiveDaysCall = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${city.key}?apikey=qLUBrhZri1R9pUezxPSGXRWdR3ZH22NS&language=en-us&details=false&metric=true HTTP/1.1`

    const getData = useCallback(async () => {
        try{
        const currentWeatherRes = await fetch(currentWeatherCall)
        const currentWeatherJson = await currentWeatherRes.json();
        const fiveDaysRes = await fetch(fiveDaysCall)
        const fiveDaysJson = await fiveDaysRes.json();
        setData({currentWeather: currentWeatherJson, fiveDays: fiveDaysJson})
        setLoading(false)
        } catch (error) {
            console.log(error.message)
            setLoading(false)
            setError("Sorry, He Have A Problem.")
        }
    }, [currentWeatherCall, fiveDaysCall])

    useEffect(() => {
        getData()
    }, [getData])

    const dispatch = useDispatch()

    return(
            <WeatherCards>
                {loading && <SpinnerContainer><Spinner/></SpinnerContainer>}
                {data && !loading &&
                <>
                <X onClick={() => dispatch(removeFromFavorites(city.name))}>X</X>
                <FavMainCard city={city} propsData={data.currentWeather}/>
                <FiveDaysContainer>
                {
                    data.fiveDays.DailyForecasts.slice(1,5).map((data, index) => {
                        return <FavFiveDayCard index={index} key={index} data={data}/>
                        })
                } 
                </FiveDaysContainer>
                </>
                }
                {error && <SpinnerContainer><Error>{error}</Error></SpinnerContainer>}

            </WeatherCards>
    )

}

export default FavFullCard;

//TESTMODE
    //     <WeatherCards>
    //     <X>X</X>
    //     <FavMainCard city={city} />
    //     <FiveDaysContainer>
    //     {
    //         test.slice(0,5).map((data, index) => {
    //             return <FavFiveDayCard index={index} key={index} data={data}/>
    //             })
    //     } 
    //     </FiveDaysContainer>
    // </WeatherCards>