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
    @media only screen and (max-width: 800px) {
        width: 100%;
        height: 200px;
        border-radius: 10px 10px 0px 0px;
    }
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

    @media only screen and (max-width: 800px) {
        border-radius: 10px 10px 0px 0px;
        
    }

`
const HeaderText = styled.div`
    font-size: 1vw;
    color: ${p => p.theme.mainCard.textOne};
    @media only screen and (max-width: 1000px) {
        font-size: 1.2vw;
    }
    @media only screen and (max-width: 800px) {
        font-size: 2.7vw; 
        padding: 2% 0;   
    }
`

const DataContaier = styled.div`
    width: 90%;
    padding: 0 5%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    position: relative;
    @media only screen and (max-width: 800px) {

    }
`

const City = styled.div`
    color: ${p => p.theme.mainCard.textOne};
    width: 90%;
    padding: 0 5%;
    height: 10%;
    text-align: left;
    font-size: 1.4vw;
    font-weight: 500;
    @media only screen and (max-width: 1000px) {

        font-size: 1.6vw;
    }
    @media only screen and (max-width: 800px) {
        height: 20%;
        font-size: 5vw;
    }
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
    @media only screen and (max-width: 800px) {
        height: 20%;
        font-size: 6vw;
    }

`
const Image = styled.img`
 width: 100%;
    @media only screen and (max-width: 800px) {
    width: 50%;
    }
`

const Status = styled.div`
    color: ${p => p.theme.mainCard.textOne};
    width: 90%;
    padding: 0 5%;
    height: 10%;
    text-align: left;
    font-size: 1.2vw;
    font-weight: 400;
    @media only screen and (max-width: 1000px) {
        height: 20%;
        font-size: 1.4vw;
    }
    @media only screen and (max-width: 800px) {
        height: 20%;
        font-size: 4vw;
    }
`

const MainCard = () => {

    const currentDegree = useSelector(state => state.degrees.degreeType)
    const mainCity = useSelector(state => state.mainCity.mainCity)
    const currentWeather = useSelector(state => state.mainCity.currentWeather)
    
    // const dateFunc = new Date(currentWeather.LocalObservationDateTime);
    // const date = dateFunc.getDate()
    // const dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dateFunc.getDay()]
    // const month = ["January", "February", "March", "April", "May", "June",
    // "July", "August", "September", "October", "November", "December"
    // ][dateFunc.getMonth()].slice(0,3)

    const favoriteList = useSelector(state => state.favorites.saved)

    return(
        <MainContainer>
            <Header>
                <HeaderText>Mon</HeaderText>
                <HeaderText>{"25"} {"Nov"}</HeaderText>
            </Header>
            <DataContaier>
            <AddToFav keyNum={"123"} name={"bla"} />
            <City>{"Barcelonas"}</City>
            <Degrees>
            {
                currentDegree ? `${"42"}°C` : `${"34"}°F`
            }
            <Image src={"https://developer.accuweather.com/sites/default/files/05-s.png"} />
            </Degrees>
            <Status>{"Clody"}</Status>
            </DataContaier>
        </MainContainer>
        // <MainContainer>
        //     <Header>
        //         <HeaderText>{dayName}</HeaderText>
        //         <HeaderText>{date} {month}</HeaderText>
        //     </Header>
        //     <DataContaier>
            
            
        //     <AddToFav keyNum={mainCity.Key} name={mainCity.EnglishName} />

        //     <City>{mainCity.EnglishName}</City>
        //     <Degrees>
        //     {
        //         currentDegree ? `${currentWeather.Temperature.Metric.Value}°C` : `${currentWeather.Temperature.Imperial.Value}°F`
        //     }
        //     <Image src={images.find(image => image.id === currentWeather.WeatherIcon).url} />
        //     </Degrees>
        //     <Status>{currentWeather.WeatherText}</Status>
        //     </DataContaier>
        // </MainContainer>
    )

}

export default MainCard;