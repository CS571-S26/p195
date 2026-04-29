import { Modal, Button, Form, Image } from "react-bootstrap"

export default function BusModal(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.name} Stops</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Image
                    src={props.image}
                    alt={`${props.name} route map`}
                    fluid
                    rounded
                    className="mb-3"
                />

                <ul>
                    {props.stops.map((stop, index) => (
                        <li key={index}>{stop}</li>
                    ))}
                </ul>

                <Form.Group className="mt-3">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={props.note}
                        onChange={(e) => props.setNote(e.target.value)}
                        placeholder="Write your notes here..."
                    />
                </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}