import {call, put, takeEvery} from "redux-saga/effects";
import {select} from 'redux-saga/effects';
import { searchForSelector } from "./mainCitySelectors";

async function getApi(name){
    try{
        const callByCity = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=qLUBrhZri1R9pUezxPSGXRWdR3ZH22NS&q=${name}&language=en-us HTTP/1.1`)
        const callByCityJson = await callByCity.json()
        const currentWeather = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${callByCityJson[0].Key}?apikey=qLUBrhZri1R9pUezxPSGXRWdR3ZH22NS&language=en-us&details=true HTTP/1.1`)
        const currentWeatherJson = await currentWeather.json()
        const callFiveDays = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${callByCityJson[0].Key}?apikey=qLUBrhZri1R9pUezxPSGXRWdR3ZH22NS&language=en-us&details=false&metric=true HTTP/1.1`)
        const fiveDaysJson = await callFiveDays.json()
        return [callByCityJson[0], currentWeatherJson[0], fiveDaysJson]
    } catch(error) {
        console.log(error.message)
    }
}

function* fetchMainCity(action){
  const mainCity = yield select(searchForSelector);
  const name = mainCity.name

  try{
    const mainCity = yield call(getApi, name);
    yield put({ type: "GET_CITY_SUCCESS", mainCity: mainCity[0], currentWeather: mainCity[1], fiveDays: mainCity[2]})
  } catch (e) {
    yield put({type: "GET_CITY_FAILED", message: "Sorry, We Have A Problem."})
  }
}

function* mainCitySaga(){
  yield takeEvery("GET_CITY_REQUESTED", fetchMainCity);
}

export default mainCitySaga;