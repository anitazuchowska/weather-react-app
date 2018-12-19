import axios from 'axios';

const API_KEY = '623a98596ac44e9b9afa4a74c677cb42';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},pl`;
    const request = axios.get(url);

    console.log('Request:', request);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}