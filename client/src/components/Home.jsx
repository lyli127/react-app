import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

//My components
import { MainNav } from "./MainNav";

//Images
import noodlesEdited from "../assets/noodlesEdited.jpg";
import ramenPic1 from "../assets/ramenPic1.jpeg";
import ramenPic2edited from "../assets/ramenPic2edited.jpg";

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
        <Image src={ramenPic2edited} fluid />
        <Carousel.Caption>
          <h3>Get Ramen Specials</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={noodlesEdited} fluid />
        <Carousel.Caption>
          <h3>Discover New Ramen Spots</h3>
          <p>You'll get access to all the best ramen spots in your area.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={ramenPic1} fluid />
        <Carousel.Caption>
          <h3>Sign Up Today</h3>
          <p>It's free and you'll get access to exclusive deals.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
