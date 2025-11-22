"use client"
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function ContactSection() {
    return (
        <section id="contact">
            <Container className='my-5 py-5'>
                <Row className='justify-content-center my-3 py-5'>
                    <Col md={8} lg={6} className='mb-3'>
                        <Card className="text-center p-4 lb-card">
                            <h2 className="mb-3 fw-bold" style={{ color: 'var(--foreground-hover)' }}>Contact Us</h2>
                            <p style={{ color: 'var(--foreground)' }}>
                                Punya pertanyaan seputar film? Hubungi kami di bawah ini.
                            </p>
                            <Form className="mt-4 text-start">
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label className="fw-bold">Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Masukkan nama kamu" 
                                        className="lb-input"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label className="fw-bold">Email address</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Masukkan email kamu" 
                                        className="lb-input"
                                        required 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formMessage">
                                    <Form.Label className="fw-bold">Message</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={5} 
                                        placeholder="Apa pendapatmu Cinephile???" 
                                        className="lb-input"
                                        required 
                                    />
                                </Form.Group>
                                <Button variant="success" type="submit" className="lb-btn-submit w-100 py-2">
                                    Kirim 
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ContactSection;