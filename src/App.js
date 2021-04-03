import { useEffect, useState } from 'react';
import axios from 'axios';
import Weather  from './weatherCard';
import './App.css';
require('dotenv').config()
const App = () => {

  const [string, setString] = useState('');
  const [weatherData, loadWeather] = useState([]); // weatherData = [];
  const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  const makeRequest = (str) => {
    axios.get(baseUrl,
      {
        params: {
          q: str,
          appId: process.env.REACT_APP_ID
        }
      }
    ).then(res => res.data.list.slice(0, 5))
      .then(data => {
        loadWeather(data);
      })
      .catch(err => alert(err));
  }

  useEffect(()=>{
    makeRequest('delhi');
  },[])
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" onChange={(e) => { setString(e.target.value) }} style={{ marginBottom: '2rem' }} />
      <br></br>
      <button type="button" className="btn btn-primary" onClick={() => makeRequest(string)} >Submit req.</button>
      <hr></hr>
      { weatherData.length !== 0 ? <Weather data={weatherData} /> : null}
    </div>
  )
}

export default App;
