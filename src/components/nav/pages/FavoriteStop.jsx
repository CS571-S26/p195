import { useContext, useState } from "react"
import { Container, Row, Col, Card, Form, InputGroup } from "react-bootstrap"
import BusBuddyDataContext from "../../../contexts/BusBuddyDataContext"
import StopInfo from "../../StopInfo"

export default function FavoriteStop() {

    const { stops, favoritedStopIds } = useContext(BusBuddyDataContext)
    const [searchTerm, setSearchTerm] = useState("")

    const favoritedStops = stops
        .filter(stop => favoritedStopIds.includes(stop.id))
        .filter(stop =>
            JSON.stringify(stop).toLowerCase().includes(searchTerm.trim().toLowerCase())
        )

    return (
        <div>
            <h1>Your Favorite Stops</h1>

            <Form className="mb-4">
                <InputGroup>
                    <Form.Control
                        type="search"
                        placeholder="Search favorite stops"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </InputGroup>
            </Form>

            {favoritedStops.length === 0 ? (
                <p>You have not favorited any stops yet.</p>
            ) : (
                <Container fluid>
                    <Row>
                        {favoritedStops.map(stop => (
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