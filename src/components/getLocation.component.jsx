import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {setMainCity, searchFor} from "../redux/mainCity/mainCity.actions";

const Container = styled.div`
        font-size: 1.5vw;
        padding: 10px 2vw;
        margin: 0;
        transition: color .5s;
        color: ${p => p.theme.toggler.text};
        background-color: ${p => p.theme.toggler.background};
        transition: 0.2s all;
        border-radius: 25px;
        box-shadow: 3px 3px 10px ${p => p.theme.shadow};
    

        &:hover{
            color: ${p => p.theme.toggler.hover};
            cursor: pointer;
        }
    
        @media only screen and (max-width: 800px) {
            margin-top: 2vh;
            font-size: 5vw;
        }
`

const GetLocation = () => {
    const dispatch = useDispatch();

    

    async function setLocation(lat, lon){
        const locationCall = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=AZvK08ugMNLlAGAwDD9GQGj108Tm8OIP&q=${lat}%2C${lon}&language=en-us&details=false&toplevel=false`
        try{
            const location = await fetch(locationCall)
            const locationJson = await location.json()
            const name = locationJson.EnglishName
            const key = locationJson.Key
            const obj = {name: name, key: key}
            dispatch(searchFor(obj))
            dispatch(setMainCity())
        } catch (error) {
            console.log(error)
        }
    }

    function getCoordinates(){
        navigator.geolocation.getCurrentPosition(function(position){
        setLocation(position.coords.latitude, position.coords.longitude)
        })  
    }

    return(
        <Container onClick={() => getCoordinates()}>
            Get Your Location
        </Container>
    )

} 

export default GetLocation;