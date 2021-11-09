import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {setMainCity, SearchFor} from "../redux/mainCity/mainCity.actions";

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
    
`

const GetLocation = () => {
    const dispatch = useDispatch();

    async function setLocation(lat, lon){
        try{
            const location = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=atTAzBmYW7kGsaXC8OkxSVDqtt1ktqbC&q=${lat}%2C${lon}&language=en-us&details=false&toplevel=false`)
            const locationJson = await location.json()
            const name = locationJson.EnglishName
            const key = locationJson.Key
            const obj = {name, key}
            dispatch(SearchFor(obj))
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