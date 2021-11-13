import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {images} from "../../images";

const MainContainer = styled.div`
    width: 25%;
    height: 300px;
    background-color: ${p => p.theme.mainCard.background1};
    transition: 0.2s all;

    &.last{
        border-radius: 0 10px 10px 0;
    }
    &.evenBackground{
        background-color: ${p => p.theme.mainCard.background2};
    }

    @media only screen and (max-width: 800px) {
        width: 100%;
        height: 200px;
        &.last{
        border-radius: 0 0px 10px 10px;
    }
    }
    
`
const Header = styled.div`
    width: 100%;
    height: 15%;
    background-color: ${p => p.theme.mainCard.headerBackground};
    border-radius: 0 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s all;

    &.even{
        background-color: ${p => p.theme.mainCard.headerBackground2};    
    }

    &.last{
        border-radius: 0 10px 0px 0;
    }

    @media only screen and (max-width: 800px) {
        background-color: ${p => p.theme.mainCard.headerBackgroundMobile};
        &.last{
        border-radius: 0 0px 0px 0;
        }
    }
`
const HeaderText = styled.div`
    font-size: 0.9vw;
    color: ${p => p.theme.mainCard.textOne};
    
    @media only screen and (max-width: 1000px) {
        font-size: 1.2vw;
    }
    @media only screen and (max-width: 800px) {
        font-size: 1.6vw;
    }
    @media only screen and (max-width: 500px) {
        font-size: 2.5vw;
    }
`

const DataContaier = styled.div`
    width: 90%;
    padding: 0 5%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center; 
`

const ImageContainer = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    @media only screen and (max-width: 800px) {
        height: 30%;
        }
        @media only screen and (max-width: 500px) {
        height: 40%;
    }
`

const Image = styled.img`
 width: 90%;
    @media only screen and (max-width: 800px) {
        width: 20%;
        }
    @media only screen and (max-width: 500px) {
        width: 35%;
    }
`

const DegreesAndStatus = styled.div`
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (max-width: 800px) {
            width: 100%;
            height: 30%;
        }
`

const Degrees = styled.div`
    color: ${p => p.theme.mainCard.degreeColor};
    width: 90%;
    height: 10%;
    font-size: 1.5vw;
    font-weight: 600;
    margin-bottom: 10%;
    @media only screen and (max-width: 1000px) {
        font-size: 1.3vw;
    }
    @media only screen and (max-width: 800px) {
        font-size: 3vw;
        margin-bottom: 5%;
    }
    @media only screen and (max-width: 500px) {
        font-size: 5vw;
        margin-bottom: 10%;
    }

`
const Status = styled.div`
    color: ${p => p.theme.mainCard.textOne};
    width: 90%;
    height: 10%;
    font-size: 1vw;
    font-weight: 400;
    @media only screen and (max-width: 1000px) {
        font-size: 1.2vw;
    }
    @media only screen and (max-width: 800px) {
        font-size: 3vw;
    }
    @media only screen and (max-width: 500px) {
        font-size: 5vw;
    }
`

const FavFiveDayCard = ({data, index}) => {
    const currentDegree = useSelector(state => state.degrees.degreeType)
    const min = data.Temperature.Minimum.Value
    const max = data.Temperature.Maximum.Value
    const averageTemp = (min + max) / 2 
    
    const c = (averageTemp - 32) * 5/9
    const cString = Math.trunc(c.toString())

    const dateFunc = new Date(data.Date);
    const dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dateFunc.getDay()]
    
    return(
        <MainContainer className={`${index === 3 ? "last" : ""} ${index % 2 === 0 ? "evenBackground" : ""}`}>
            <Header className={`${index === 3 ? "last" : ""} ${index % 2 === 0 ? "even" : ""}`}>
                <HeaderText>{dayName}</HeaderText>
            </Header>
            <DataContaier className={`${data.id % 2 !== 0 ? "even" : ""}`}>
                <ImageContainer>
                    <Image src={images.find(image => image.id === data.Day.Icon).url} />
                </ImageContainer>
                <DegreesAndStatus>
                    <Degrees>{currentDegree ? `${cString}°C` : `${Math.trunc(averageTemp)}°F`}</Degrees>
                    <Status>{data.Day.IconPhrase}</Status>
                </DegreesAndStatus>
            </DataContaier>
        </MainContainer>
    )

}

export default FavFiveDayCard;

//TESTMODE

/* <MainContainer className={`${card.id == 5 ? "last" : ""} ${card.id % 2 !== 0 ? "evenBackground" : ""}`}>
<Header className={`${card.id == 5 ? "last" : ""} ${card.id % 2 !== 0 ? "even" : ""}`}>
    <HeaderText>BLBABLA</HeaderText>
</Header>
<DataContaier className={`${card.id % 2 !== 0 ? "even" : ""}`}>
    <ImageContainer>
        <Image src={"https://developer.accuweather.com/sites/default/files/01-s.png"} />
    </ImageContainer>
    <DegreesAndStatus>
        <Degrees>{currentDegree ? "50°C" : "50°F"}</Degrees>
        <Status>Partly Cloudy</Status>
    </DegreesAndStatus>
</DataContaier>
</MainContainer> */
