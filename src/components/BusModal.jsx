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

                <p className="mt-3">
                    <a
                        href={props.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        View official Metro Transit route details
                    </a>
                </p>

                <Form.Group className="mt-3">
                    <Form.Label>Rating</Form.Label>
                    <div>
                        {[1, 2, 3, 4, 5].map(value => (
                            <Button
                                key={value}
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