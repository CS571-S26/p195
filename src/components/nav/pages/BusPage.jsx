import { useContext } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import BusBuddyDataContext from "../../../contexts/BusBuddyDataContext"
import BusInfo from "../../BusInfo"

export default function BusPage() {

    const { buses } = useContext(BusBuddyDataContext)

    return (
        <div>
            <h1>Available University Buses</h1>

            {buses.length === 0 ? (
                <p>No buses match your search terms.</p>
            ) : (
                <Container fluid>
                    <Row>
                        {buses.map(bus => (
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