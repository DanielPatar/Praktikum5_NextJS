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
            title: "Back to the Future",
            subtitle: "This is the subtitle for the first slide.",
            imageUrl: "/images/future.jpg"
        },
        {
            title: "Shutter Island",
            subtitle: "This is the subtitle for the second slide.",
            imageUrl: "/images/shutter island.jpg"
        },
        {
            title: "Taxi Driver",
            subtitle: "This is the subtitle for the third slide.",
            imageUrl: "/images/taxi.jpg"
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