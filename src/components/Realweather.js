import React, { Component } from 'react';

class Realweather extends Component {
    constructor(){
        super()
        this.state = {
            region: '',
            localtime: '',
            observation_time: '',
            temperature: '',
            wind_speed: '',
            wind_degree: '',
            humidity: '',
            region:'',
            country: ''

        }
    }
    componentDidMount(){
        const url = 'http://api.weatherstack.com/current?access_key=d89c8416a1777407d4de90e1172d5424&query=' + this.props.coords
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    observation_time: data.current.observation_time,
                    temperature: data.current.temperature,
                    humidity: data.current.humidity,
                    region: data.location.region,
                    country: data.location.country
                })
            })
    }
    render() {
        return (
            <div className="data-div">
                <h4><img style={{width:"30px",height:"40px"}} src="https://i.ibb.co/6WQCrD6/toppng-com-location-png-icon-location-icon-png-free-674x980.png"/></h4><h3>{this.state.region},{this.state.country}</h3>
                <h4>Temperature: </h4><h3>{this.state.temperature} °C</h3>
                <h4>Humidity: </h4><h3>{this.state.humidity}</h3>
                <h4>Observation Time: </h4><h3>{this.state.observation_time}</h3>
            </div>
        );
    }
}

export default Realweather;
