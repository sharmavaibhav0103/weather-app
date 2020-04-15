import React, { Component } from 'react';
import Realweather from './Realweather'

class Weather extends Component {
    constructor(){
        super()
        this.state = {
            coords: ''
        }
    }

    componentDidMount(){
        const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ this.props.location + '.json?access_token=pk.eyJ1Ijoic2hhcm1hdmFpYmhhdjAxMDMiLCJhIjoiY2s5MTE5am8yMDAzYzNtcWVoeGVrMjgzZiJ9.oxBEGXeB0X-Z3B6TzZDotQ'

        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                   coords:  data.features[1].center.reverse().join(',')
            })
        })
    }

    render() {
        const isCoords = (this.state.coords.length) > 0 ? <Realweather coords={this.state.coords}/> : <h1 style={{marginLeft:"20px",color:"whitesmoke"}}>Loading...</h1>
        return (
                <div>
                    {isCoords}   
                </div>
            );
        }
    }

export default Weather;
