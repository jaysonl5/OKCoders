// import './App.css';
import { useState } from 'react';
import WelcomePage from './components/WelcomePage'
import ForecastPage from './components/ForecastPage';



function App() {
  //pick which page renders
  const [forecastDays, setForecastDays] = useState(0)

  const welcomePage = <WelcomePage setForecastDays={setForecastDays} forecastDays={forecastDays} />
  const forecastPage = <ForecastPage forecastDays={forecastDays} />
  

  return (
    <div className="App">
      {forecastDays !== 0 ? forecastPage : welcomePage}
    </div>
  );
}

export default App;
