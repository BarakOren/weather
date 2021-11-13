import React, {useRef, useEffect, useState, useCallback} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {searchFor, setMainCity} from "../redux/mainCity/mainCity.actions";
import { addToFavorites } from "../redux/favorites/favorites.actions";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
    color: ${p => p.theme.text};
    transition: 0.2s all;
    position: relative;
`

const Input = styled.input`
    font-size: 1.3vw;
    padding: 15px 0px 15px 15px;
    align-self: flex-start;
    width: 99%;
    border-radius: 25px;
    border: none;
    outline: none;
    background-color: ${p => p.theme.search.searchBackground};
    color: ${p => p.theme.text};
    box-shadow: 3px 3px 10px ${p => p.theme.shadow};
    transition: 0.2s all;
    @media only screen and (max-width: 800px) {
    font-size: 5vw;
    }
`
const ResultContainer = styled.div`
    z-index: 5;
    position: absolute;
    top: 9vh;
    width: 100%;
    background-color: ${p => p.theme.search.searchBackground};
    box-shadow: 3px 3px 10px ${p => p.theme.shadow};
    padding: 15px 0 15px 15px;
    border-radius: 25px;
    text-align: left;
    transition: 0.2s all;
    @media only screen and (max-width: 800px) {
    top: 70px;
    }
`

const Result = styled.div`
    position: relative;
    padding: 10px 0;
    width: 98%;
    font-size: 1.2vw;
    border-bottom: 1px solid #55555563;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const ButtonsContaier = styled.div`
  width: 27%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 800px) {
    align-items: center;
    flex-direction: column;
    width: 40%;
  }
`

const Button = styled.button`
    cursor: pointer;
    color: ${p => p.theme.text};
    font-size: 1vw;
    border: none;
    padding: 5px 1vw;
    border-radius: 25px;
    background-color: ${p => p.theme.search.buttonColor};

  &.alreadyIn{
    opacity: 0.5;
    cursor: default;
  }
  @media only screen and (max-width: 800px) {
    padding: 5px 2vw;
    font-size: 3vw;
    margin: 6px 0;
  }
  
`
const P = styled.p`
  font-size: 2vw;
  cursor: pointer;
  margin: 0;
  @media only screen and (max-width: 800px) {
    font-size: 5vw;
  }
`

const Search = () => {

    const wrapperRef = useRef(null);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
          window.removeEventListener("mousedown", handleClickOutside);
        };
      });
    
      const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
          setToggler(false);
        }
      };


      const [apiD, setApiD] = useState([])
      const [suggestions, setSuggestions] = useState([])
      const [text, setText] = useState("")

      const [toggler, setToggler] = useState(false);
      const test = ["Tel Aviv", "Toyko", "Vienna", "test"]

      const onChangeHandler = text => {
        setToggler(true);
        let matches = []
        if(text.length > 0){
          matches = apiD.filter(city => {
            const regex = new RegExp(`${text}`, "gi")
            return city.LocalizedName.match(regex)
          })
        }
        setText(text)
        setSuggestions(matches)
      }

      const getResults = useCallback( async () => {
        if(text.length > 0){
        try{
          const first = await fetch(`http://dataservice.accuweather.com//locations/v1/cities/autocomplete?apikey=AZvK08ugMNLlAGAwDD9GQGj108Tm8OIP&q=${text}&language=en-us HTTP/1.1`)
          const fetchJson = await first.json()
          setApiD(fetchJson)
        } catch(error) {
          console.log(error.message)
        }
      }
      }, [text])

   
      useEffect(() => {
        getResults()
      },[text, getResults])

      const favoriteList = useSelector(state => state.favorites.saved);
      const dispatch = useDispatch()

      function getWeather(object){
        setToggler(false)
        dispatch(searchFor(object))
        dispatch(setMainCity())
      }

      function addToFav(object){
        setToggler(false);
        dispatch(addToFavorites(object))
      }

    return(
        <Container ref={wrapperRef}>
        <Input
        onChange={e => onChangeHandler(e.target.value)}
        placeholder="Search Location"
        type="text"
        />
        {
          toggler ? 
          <ResultContainer>
          {
          suggestions.slice(0, 4).map((city, index) => {
            const key = city.Key
            const name = city.LocalizedName
            const obj = {name: name, key: key}
            return <Result key={index}>
            <P>{name}</P>
            <ButtonsContaier>
              <Button onClick={() => getWeather(obj)}>Get Weather</Button>
              {
              favoriteList.some(obj => obj.name === city.LocalizedName) 
              ?
              <Button className="alreadyIn">Add To Favorites</Button> 
              :
              <Button onClick={() => addToFav(obj)} >Add To Favorites</Button>         
              }
            </ButtonsContaier>

            </Result>
             })
            }
          </ResultContainer>
          :
          ""
        }
        </Container>
    )
}

export default Search;

