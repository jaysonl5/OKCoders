import { Button, Modal } from "react-bootstrap";

export default function ForecastDetail(props){

    const data = props.state.forecast;
    const layout = (
        <Modal show={props.state.showDetail} >
            <Modal.Header>
                <Modal.Title>{data.day}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h4>{data.outlook}</h4>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick = {() => props.state.setShowDetail(false)} >Close</Button>
            </Modal.Footer>

        </Modal>
    )
    return layout;
}