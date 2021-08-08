import {SCREENS} from './../constants';
import {Button} from 'react-bootstrap'


export default function WelcomePage(props) {
    
    const selections = [
        {label: '3 Days', value: 3},
        {label: '5 Days', value: 5},
        {label: '7 Days', value: 7},
    ]

    const forecastButtons = selections.map((item) => (
        <Button 
            key={item.value} 
            onClick={() => {props.setForecastDays(item.value); props.setActiveScreen(SCREENS.ForecastPage)}}
        >
                {item.label}
        </Button>
    ))

    const layout = (
      <div style={{
          backgroundColor: "silver"
      }}>
          <h2>Select your forecast:</h2>
          {forecastButtons}
      
      </div>
    )
    return layout
  }

