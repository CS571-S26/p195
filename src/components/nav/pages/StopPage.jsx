import { useContext, useState } from "react"
import { Container, Row, Col, Card, Form, InputGroup } from "react-bootstrap"
import BusBuddyDataContext from "../../../contexts/BusBuddyDataContext"
import StopInfo from "../../StopInfo"

export default function StopPage() {

    const { stops } = useContext(BusBuddyDataContext)
    const [searchTerm, setSearchTerm] = useState("")

    const filteredStops = stops.filter(stop =>
        JSON.stringify(stop).toLowerCase().includes(searchTerm.trim().toLowerCase())
    )

    return (
        <div>
            <h1>Stops Visited By University Buses</h1>

            <Form className="mb-4">
                <Form.Group controlId="stop-search">
                    <Form.Label>Search Stops</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="search"
                            placeholder="Search stops"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
            </Form>

            {filteredStops.length === 0 ? (
                <p>No stops match your search terms.</p>
            ) : (
                <Container fluid>
                    <Row>
                        {filteredStops.map(stop => (
                            <Col xs={12} sm={12} md={6} lg={4} xl={3} key={stop.id}>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <StopInfo {...stop} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            )}
        </div>
    )
}