import {SCREENS} from '../constants'
import { getForecastData } from '../simulateDatabase';
import ForecastCard from './ForecastCard';
import { Row, CardGroup } from 'react-bootstrap';


export default function ForecastPage(props) {

    const data = getForecastData(props.forecastDays);

    const returnWelcome = (
        <div onClick = {() => props.setActiveScreen(SCREENS.WelcomePage)}>
            <p>Return to Welcome</p>
        </div>
    )
 
    const layout = (
        <div style = {{backgroundColor: "#FFFFFC"}}>
            {returnWelcome}

            <h3 style = {{color: 'white'}}>{props.forecastDays} Day Forecast</h3>
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
