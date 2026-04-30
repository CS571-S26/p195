import { Modal, Button, Form } from "react-bootstrap"

export default function StopModal(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Routes to {props.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <ul>
                    {props.buses.map((bus, index) => (
                        <li key={index}>{bus}</li>
                    ))}
                </ul>

                <Form.Group className="mt-3">
                    <Form.Label>Rating</Form.Label>
                    <div>
                        {[1, 2, 3, 4, 5].map(value => (
                            <Button
                                key={value}
                                type="button"
                                variant={value <= props.rating ? "warning" : "outline-secondary"}
                                size="sm"
                                className="me-1"
                                onClick={() => props.setRating(value)}
                            >
                                {value <= props.rating ? "★" : "☆"}
                            </Button>
                        ))}
                        <span className="ms-2">
                            {props.rating > 0 ? `${props.rating} / 5` : "Not rated yet"}
                        </span>
                    </div>
                </Form.Group>

                <Form.Group controlId="notesTextarea" className="mt-3">
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