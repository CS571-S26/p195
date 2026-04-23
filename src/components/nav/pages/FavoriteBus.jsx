import { useContext } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import BusBuddyDataContext from "../../../contexts/BusBuddyDataContext"
import BusInfo from "../../BusInfo"

export default function FavoriteBus() {

    const { buses, favoritedBusIds } = useContext(BusBuddyDataContext)

    const favoritedBuses = buses.filter(bus =>
        favoritedBusIds.includes(bus.id)
    )

    return (
        <div>
            <h1>Your Favorite Buses</h1>

            {favoritedBuses.length === 0 ? (
                <p>You have not favorited any buses yet.</p>
            ) : (
                <Container fluid>
                    <Row>
                        {favoritedBuses.map(bus => (
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