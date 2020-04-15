import React, { Component } from 'react';
import Weather from './Weather'
class Mapbox extends Component {
    constructor(){
        super();
            this.state = {
                location: '',
                submitBool: false
            }
            this.handleChange = this.handleChange.bind(this);
    }
    //Event Handlers
    handleChange(event){
        this.setState({
            location: event.target.value,
            submitBool: false
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            submitBool: true
        })
        console.log(this.state.location,this.state.submitBool)
    }

    render() {
    const PrintData = (this.state.submitBool) ? <Weather location={this.state.location}/> : null
        return (
            <>

                <div className="outer-div">

                    <form onSubmit={this.handleSubmit}>
                        <h1 className="hero-heading" >Location </h1>
                        <div className="form-div">
                            <input type="text" name="location" value={this.state.location} onChange={this.handleChange} autoComplete="off"/>
                            <button type="submit"> <i className="fas fa-search"></i> </button>
                        </div>
                    </form>

                </div>
                {PrintData}
            </>
        );
    }
}

export default Mapbox;
