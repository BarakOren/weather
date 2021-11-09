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
`
const HeaderText = styled.div`
    font-size: 0.9vw;
    color: ${p => p.theme.mainCard.textOne};
    
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
`

const Image = styled.img`
 width: 90%;
`

const DegreesAndStatus = styled.div`
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

`

const Degrees = styled.div`
    color: ${p => p.theme.mainCard.degreeColor};
    width: 90%;
    height: 10%;
    font-size: 1.5vw;
    font-weight: 600;
    margin-bottom: 10%;

`
const Status = styled.div`
    color: ${p => p.theme.mainCard.textOne};
    width: 90%;
    height: 10%;
    font-size: 1vw;
    font-weight: 400;
`

const FiveDayCard = ({data, index}) => {
    const currentDegree = useSelector(state => state.degrees.degreeType)
    const min = data.Temperature.Minimum.Value
    const max = data.Temperature.Maximum.Value
    const averageTemp = (min + max) / 2 
    
    const c = (averageTemp - 32) * 5/9
    const cString = c.toString().slice(0, 2)

    const dateFunc = new Date(data.Date);
    const dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dateFunc.getDay()]

    return(
        <MainContainer className={`${index === 3 ? "last" : ""} ${index % 2 == 0 ? "evenBackground" : ""}`}>
        <Header className={`${index === 3 ? "last" : ""} ${index % 2 == 0 ? "even" : ""}`}>
            <HeaderText>{dayName}</HeaderText>
        </Header>
        <DataContaier className={`${index % 2 !== 0 ? "even" : ""}`}>
            <ImageContainer>
                <Image src={images.find(image => image.id === data.Day.Icon).url} />
            </ImageContainer>
            <DegreesAndStatus>
                <Degrees>{currentDegree ? `${cString}°C` : `${averageTemp}°F`}</Degrees>
                <Status>{data.Day.IconPhrase}</Status>
            </DegreesAndStatus>
        </DataContaier>
    </MainContainer>
    )

}

export default FiveDayCard;