import {Card, Button} from 'react-bootstrap'
import { useState } from 'react';
import ForecastDetail from './ForecastDetail';
import wind from '../img/wind.png';

export default function ForecastCard(forecastData){
    const [showDetail, setShowDetail] = useState(false);

    function getAvgTemp(high, low){
        const average = ((high*1 + low*1) / 2);
        return Math.floor(average);        
    }

    

    const forecast = forecastData.data

    var outlook = '';

    if(forecast.outlook === 'Sunny'){
        outlook = 'card-outlook card-outlook-sunny';
    } else if(forecast.outlook === 'Rainy'){
        outlook = 'card-outlook card-outlook-rainy';
    } else{
        outlook='card-outlook card-outlook-cloudy';
    }

    const cardContent = (
                <Card>                    
                    <Card.Body>
                        <Card.Text>                            
                            <h4 className="card-day">{forecastData.data.day}</h4>
                            <div className="card-temp">{getAvgTemp(forecastData.data.tempHigh, forecastData.data.tempLow)}°</div>
                            <p className={outlook}>{forecastData.data.outlook}</p>
                            <p className="card-wind"><img alt="windy icon" src={wind} width='30px' /> {Math.floor(forecastData.data.windSpeed) + "mph " + forecastData.data.windDirection}</p>
                        </Card.Text>

                        <Button className="detail-button" onClick = {() => setShowDetail(true)}>Show Detail</Button>
                    </Card.Body>
                    
                </Card>
    )

    return (
    <div>
        {cardContent}
        <ForecastDetail state = { {showDetail, setShowDetail, forecast}}  />
    </div>
    )

}