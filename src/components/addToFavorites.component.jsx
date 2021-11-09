import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {addToFavorites} from "../redux/favorites/favorites.actions";
import { useSelector } from "react-redux";

const Container = styled.div`
    color: ${p => p.theme.xColor};
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
`

const AddToFav = () => {
    const dispatch = useDispatch();
    const city = useSelector(state => state.mainCity.searchFor)

    return(
        <Container onClick={() => dispatch(addToFavorites(city))}>Add To Favorites</Container>
    )
}

export default AddToFav;