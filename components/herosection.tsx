"use client"
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "First Slide Title",
            subtitle: "This is the subtitle for the first slide.",
            imageUrl: "/images/Banner1.png"
        },
        {
            title: "Second Slide Title",
            subtitle: "This is the subtitle for the second slide.",
            imageUrl: "/images/Banner2.png"
        },
        {
            title: "Third Slide Title",
            subtitle: "This is the subtitle for the third slide.",
            imageUrl: "/images/Banner3.png"
        }
    ];

    return (
        <Carousel fade interval={4000} data-bs-theme="dark">
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div
                        style={{
                            backgroundImage:`url(${slide.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "60vh",
                        }}>
                    </div>
                    <Carousel.Caption>
                        <h1 className="display-4 fw-bold">{slide.title}</h1>
                        <p className="lead">{slide.title}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}    

export default HeroSection;