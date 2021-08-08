// import './App.css';
import { useState } from 'react';
import WelcomePage from './components/WelcomePage'
import ForecastPage from './components/ForecastPage';
import {SCREENS} from './constants'
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';

function App() {
  //pick which page renders
  const [forecastDays, setForecastDays] = useState(0)
  const [activeScreen, setActiveScreen] = useState(SCREENS.WelcomePage)

  const screenBank = {
    [SCREENS.WelcomePage]: (<WelcomePage setForecastDays={setForecastDays} setActiveScreen={setActiveScreen} />),
    [SCREENS.ForecastPage]: (<ForecastPage forecastDays={forecastDays} setActiveScreen={setActiveScreen} />)
  }
  

  return (

    <div className="App">
      {screenBank[activeScreen]}
      <Footer />
    </div>

  );
}

export default App;
