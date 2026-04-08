import { Col, Container, Row } from "react-bootstrap";

export default function StartPage(props) {

    return <div>
        <h1>About BusBuddy</h1>
        <br/>
        <Container fluid={true}>
            <Row>
                <Col xs={12} lg={4} xl={6}>
                    <p>BusBuddy is an interactive website that aims to help students familiarize themselves with the public transportation available at 
                        the University of Wisconsin-Madison.
                    </p>
                    <p>This website is intended to display the the stops and schedules for all buses that are used by
                        The University of Wisconsin-Madison.
                    </p>
                    <p>BusBuddy is currently being developed by Timothy Chen.</p>
                    <p>Click on "University Buses" to view all available buses.</p>
                    <p>Click on "Favorites" to view any buses you have favorited.</p>
                    <h3>To-Do List</h3>
                    <ul>
                        <li>Replace placeholder buses.</li>
                        <li>Add bus name search bar.</li>
                        <li>Add bus stop search bar.</li>
                        <li>Consider a better way of displaying bus info.</li>
                        <li>Consider making different pages for each day of the week.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
}