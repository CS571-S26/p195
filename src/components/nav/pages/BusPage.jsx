import { useContext, useState } from "react"
import { Container, Row, Col, Card, Form, InputGroup } from "react-bootstrap"
import BusBuddyDataContext from "../../../contexts/BusBuddyDataContext"
import BusInfo from "../../BusInfo"

export default function BusPage() {

    const { buses } = useContext(BusBuddyDataContext)
    const [searchTerm, setSearchTerm] = useState("")

    const filteredBuses = buses.filter(bus =>
        JSON.stringify(bus).toLowerCase().includes(searchTerm.trim().toLowerCase())
    )

    return (
        <div>
            <h1>Available University Buses</h1>

            <Form className="mb-4">
                <InputGroup>
                    <Form.Control
                        type="search"
                        placeholder="Search buses"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </InputGroup>
            </Form>

            {filteredBuses.length === 0 ? (
                <p>No buses match your search terms.</p>
            ) : (
                <Container fluid>
                    <Row>
                        {filteredBuses.map(bus => (
                            <Col xs={12} sm={12} md={6} lg={4} xl={3} key={bus.id}>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <BusInfo {...bus} />
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