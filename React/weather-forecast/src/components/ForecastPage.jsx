import {SCREENS} from '../constants'
import { getForecastData } from '../simulateDatabase';
import ForecastCard from './ForecastCard';
import { Row, CardGroup, Button } from 'react-bootstrap';


export default function ForecastPage(props) {

    const data = getForecastData(props.forecastDays);

    const returnWelcome = (
        <div onClick = {() => props.setActiveScreen(SCREENS.WelcomePage)}>
            <p>Return to Welcome</p>
        </div>
    )
 
    const layout = (
        <div className="forecastMain">
            <Button onClick = {() => props.setActiveScreen(SCREENS.WelcomePage)}>
                Select a new forecast
            </Button>

            <h3 className='forecastTitle'>{props.forecastDays} Day Forecast</h3>
        <Row>
            <div className="cardDeck" >
                <CardGroup>
                    {data.map((data) => {                       
                        return (
                            <ForecastCard data={data} />
                        )
                    })}
                </CardGroup>
                    
            </div>
        </Row>

        </div>
    );
    return layout;
}
