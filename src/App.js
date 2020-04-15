import React from 'react';
import Mapbox from './components/Mapbox'

const App = () => {
  return (
    <div className="App">
      <img className="hero-image" src="https://weatherstack.com/site_images/sun_loading.svg" />
      <Mapbox /> 
    </div>
  );
}

export default App;
