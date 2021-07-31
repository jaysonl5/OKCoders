export default function WelcomePage(props) {
    
    const selections = [
        {label: '3 Days', value: 3},
        {label: '5 Days', value: 5},
        {label: '7 Days', value: 7},
    ]

    const forecastButtons = selections.map((item) => (
        <button 
            key={item.value} 
            onClick={() => props.setForecastDays(item.value)}
        >
                {item.label}
        </button>
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

