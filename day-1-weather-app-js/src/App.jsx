
import { useState } from 'react'
import './App.css'
import ExtraDetails from './component/ExtraDetails/ExtraDetails'
import SearchBar from './component/SearchBar/SearchBar'
import TemDetails from './component/TemDetails/TemDetails'
import { useEffect } from 'react'
import Swal from 'sweetalert2'


function App() {
  const [city,setCity] = useState('dhaka');
  const [weather,setWeather] = useState([])

  const handleSearchByCity = (city)=>{
    setCity(city);
  }

  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=27d5a6fb4080e802de2b85bdd4d6c5e1&units=metric`)
      .then(res => res.json())
      .then(data=> setWeather(data))
  },[city])

  
  // console.log(weather);
  useEffect(()=>{
    if(weather?.cod === 401 || weather?.cod === 403){
      Swal.fire({
        title: "API Problem",
        text: "weather api is not working",
        icon: "warning"
      });
    }
  },[weather])
  

  return (
    <div className=' flex justify-center '>
      <div className='bg-color rounded-3xl px-8 py-10  my-10 mx-10'>
          <SearchBar
            handleSearchByCity={handleSearchByCity}
          ></SearchBar>
          <TemDetails 
          tem={weather.main} 
          city={weather.name} 
          country={weather?.sys?.country}
          weatherIcon={weather.weather}
          ></TemDetails>
          <ExtraDetails 
          wind={weather.wind?.speed} 
          humidity={weather?.main?.humidity
          }
          ></ExtraDetails>
      </div>


    </div>
  )
}

export default App
