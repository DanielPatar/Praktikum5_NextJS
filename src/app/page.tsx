"use client";
import React from "react";
import Hero from "../../components/herosection";
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';

import Navbar from "../../components/navbar";
import HeroSection from "../../components/herosection";
import WorkSection from "../../components/worksection";
import ServiceSection from "../../components/servicesection";
import ContactSection from "../../components/contactsection";
 
export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection></HeroSection>
        <Container className="my-5">
          <Row className="my-4">
            <Col md={6} className="align-self-center mb-3">
            <h2>About Us</h2>
            <h6>What we do?</h6>
            <p>
              Write and share reviews. Compile your own lists. Share your life in film.
            </p>
            <Button variant="info">Learn More</Button>
            </Col>
            <Col md={6}>
            <p>
              <Image src="/images/nolantarantino.webp" alt="About us" width={500} height={300}></Image>
            </p>
            </Col>
          </Row>
        </Container>
        <WorkSection></WorkSection>
        <ServiceSection ></ServiceSection>
        <section id="contact">
          <ContactSection ></ContactSection>
        </section>
      </main>
      </div>
  );
}