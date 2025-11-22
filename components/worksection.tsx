'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function WorkSection() {
    return (
        <Container >
            <Row className='mb-3'>
                <Col md={12} className="text-center">
                    <h2>What We Work</h2>
                    <p>Track films you’ve watched.Save those you want to see.Tell your friends what’s good.</p>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/godfather.jpg"></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                The Godfather
                            </Card.Title>
                            <Card.Text>
                                Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/goodfellas.jpg"></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                GoodFellas
                            </Card.Title>
                            <Card.Text>
                                The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/schindler's list.jpg"></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                Schindler’s List
                            </Card.Title>
                            <Card.Text>
                                The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default WorkSection;