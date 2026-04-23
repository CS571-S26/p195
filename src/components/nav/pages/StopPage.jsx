import { useContext } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import BusBuddyDataContext from "../../../contexts/BusBuddyDataContext"
import StopInfo from "../../StopInfo"

export default function StopPage() {

    const { stops } = useContext(BusBuddyDataContext)

    return (
        <div>
            <h1>Stops Visited By University Buses</h1>

            {stops.length === 0 ? (
                <p>No stops match your search terms.</p>
            ) : (
                <Container fluid>
                    <Row>
                        {stops.map(stop => (
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