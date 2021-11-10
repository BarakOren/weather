import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {images} from "../../images";
import AddToFav from "../addToFavorites.component";

const MainContainer = styled.div`
    width: 45%;
    height: 100%;
    background-color: ${p => p.theme.mainCard.background1};
    border-radius: 10px 0 0 10px;
    transition: 0.2s all;
`

const Header = styled.div`
    width: 90%;
    height: 15%;
    padding: 0 5%;
    background-color: ${p => p.theme.mainCard.headerBackground};
    border-radius: 10px 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const HeaderText = styled.div`
    font-size: 1vw;
    color: ${p => p.theme.mainCard.textOne};
`

const DataContaier = styled.div`
    width: 90%;
    padding: 0 5%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
`

const City = styled.div`
    color: ${p => p.theme.mainCard.textOne};
    width: 90%;
    padding: 0 5%;
    height: 10%;
    text-align: left;
    font-size: 1.4vw;
    font-weight: 500;
`
const Degrees = styled.div`
    color: ${p => p.theme.mainCard.degreeColor};
    width: 90%;
    height: 50%;
    padding: 0 5%;
    font-size: 5vw;
    font-weight: 600;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Image = styled.img`
 width: 100%;
`

const Status = styled.div`
    color: ${p => p.theme.mainCard.textOne};
    width: 90%;
    padding: 0 5%;
    height: 10%;
    text-align: left;
    font-size: 1.2vw;
    font-weight: 400;
`

const MainCard = () => {

    const currentDegree = useSelector(state => state.degrees.degreeType)
    const mainCity = useSelector(state => state.mainCity.mainCity)
    const currentWeather = useSelector(state => state.mainCity.currentWeather)
    
    const dateFunc = new Date(currentWeather.LocalObservationDateTime);
    const date = dateFunc.getDate()
    const dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dateFunc.getDay()]
    const month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ][dateFunc.getMonth()].slice(0,3)

    const favoriteList = useSelector(state => state.favorites.saved)

    return(
        <MainContainer>
            <Header>
                <HeaderText>{dayName}</HeaderText>
                <HeaderText>{date} {month}</HeaderText>
            </Header>
            <DataContaier>
            
            
            <AddToFav keyNum={mainCity.Key} name={mainCity.EnglishName} />

            <City>{mainCity.EnglishName}</City>
            <Degrees>
            {
                currentDegree ? `${currentWeather.Temperature.Metric.Value}°C` : `${currentWeather.Temperature.Imperial.Value}°F`
            }
            <Image src={images.find(image => image.id === currentWeather.WeatherIcon).url} />
            </Degrees>
            <Status>{currentWeather.WeatherText}</Status>
            </DataContaier>
        </MainContainer>
    )

}

export default MainCard;