import { Button, Modal } from "react-bootstrap";

export default function ForecastDetail(props){

    const data = props.state.forecast;
    const layout = (
        <Modal show={props.state.showDetail} >
            <Modal.Header>
                <Modal.Title>Forecast Detail for {data.day}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h4>{data.outlook}</h4>
                <p>Wind Speed: {Math.floor(data.windSpeed)}mph {data.windDirection}</p>
                <p>High: {Math.floor(data.tempHigh)}° Low: {Math.floor(data.tempLow)}°</p>
                <p>Sunrise: 6:25 am  |  Sunset: 8:00 pm</p>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick = {() => props.state.setShowDetail(false)} >Close</Button>
            </Modal.Footer>

        </Modal>
    )
    return layout;
}