import React , { Component } from "react"
import Form from "./components/Lists"
import Weather from "./components/weather"

const API_Key = "77d332f64a518449ce9dfea7ead7d6a0";

class App extends Component {
  state = {
    temperature : "",
    city: "",
    humidity: "",
    description: "",
    error:""
  }
  GetWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value
   
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`)
    const data = await api.json()
    console.log(data)
    if (city && country ){
    this.setState({
      temperature : data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description
    })
  }else{
    this.setState({
      temperature : "",
      city: "",
      country: "",
      humidity: "",
      description: "",
      error : "Enter Data Please"
    })
  }

  }
  render(){
  return (
    <div className="wrapper">
      <div className="container" >
          <Form GetWeather={this.GetWeather}/>
          <Weather 
          temperature = {this.state.temperature}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}/>
      </div>
    </div>
  )
}
}

export default App;
