export default function ForecastPage(props) {
    const layout = (
        <div style = {
            {
                backgroundColor: "limegreen"
            }
        }>
            <h3>{props.forecastDays} Day Forecast</h3>
        </div>
    );
    return layout;
}
