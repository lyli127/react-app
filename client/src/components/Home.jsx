import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import { MainNav } from "./MainNav";

function HomePage(props) {
  return (
    <>
      {/* NAVBAR */}
      <MainNav />

      {/* HOMEPAGE CONTENT */}
      <LoggedOutHomepage />
    </>
  );
}

export default HomePage;

// CAROUSEL
function LoggedOutHomepage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src="https://placehold.co/1100x800/blue/FFF" alt="" />
        <Carousel.Caption>
          <h3>Get Ramen Specials</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src="https://placehold.co/1000x800/orange/FFF" alt="" />
        <Carousel.Caption>
          <h3>Discover New Ramen Spots</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src="https://placehold.co/1000x800/pink/FFF" alt="" />
        <Carousel.Caption>
          <h3>Sign Up Today</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
