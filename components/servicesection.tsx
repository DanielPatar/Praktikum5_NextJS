"use client";
import { Container, Row, Col, Image } from 'react-bootstrap';

function ServiceSection() {
    return (
        <Container className='my-5'>
            <Row>
                <Col md={4} className="mb-3 text-center mb-3 py=3">
                    <Image src="images/infinity war.jpg" alt="Service 1" fluid ></Image>
                    <h2>Avengers : Infinity War</h2>
                    <p>As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality..</p>
                </Col>
                <Col md={4} className="mb-3 text-center mb-3 py=3">
                    <Image src="images/superman.jpg" alt="Service 2" fluid ></Image>
                    <h2>Superman</h2>
                    <p>Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent.</p>
                </Col>
                    <Col md={4} className="mb-3 text-center mb-3 py=3">
                    <Image src="images/no way home.jpg" alt="Service 3" fluid ></Image>
                    <h2>Spiderman : No Way Home</h2>
                    <p>Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ServiceSection;  