import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {addToFavorites} from "../redux/favorites/favorites.actions";
import { useSelector } from "react-redux";

const Container = styled.div`

    &.notInList{
        color: ${p => p.theme.mainCard.textOne};
        border-radius: 10px;
        position: absolute;
        font-size: 1.1vw;
        font-weight: 400;
        top: 1vw;
        right: 1vw;
        cursor: pointer;
        transition: 0.2s all;
        &:hover{
            color: ${p => p.theme.toggler.hover}
        }
    }

    &.inList{
        color: ${p => p.theme.xColor};
        border-radius: 10px;
        position: absolute;
        font-size: 1.1vw;
        font-weight: 400;
        top: 1vw;
        right: 1vw;
        transition: 0.2s all;
        opacity: 0.3;
        cursor: default;
    }

    @media only screen and (max-width: 800px) {
        &.notInList{
        font-size: 2.5vw;
        top: 3vw;
        right: 3vw;
    }

    &.inList{
        font-size: 2.5vw;
        top: 3vw;
        right: 3vw;
    }
}

`

const AddToFav = ({name, keyNum}) => {
    
    const dispatch = useDispatch();
    const city = useSelector(state => state.mainCity.searchFor)
    const favoritList = useSelector(state => state.favorites.saved)
    const inList = favoritList.some(obj => obj.name === name)
    const obj = {name: name, key: keyNum}

    return(
        <Container 
        onClick={() => inList ? "" : dispatch(addToFavorites(obj))}
        className={`${ inList ? "inList" : "notInList"}`}
        >Add To Favorites</Container>
    )
}

export default AddToFav;