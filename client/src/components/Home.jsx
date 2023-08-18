import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

//My components
import { MainNav } from "./MainNav";
import { Footer } from "./Footer";

//Images
import noodlesEdited from "../assets/noodlesEdited.jpg";
import ramenPic1 from "../assets/ramenPic1.jpeg";
import ramenPic2edited from "../assets/ramenPic2edited.jpg";

function HomePage() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* NAVBAR */}
      <MainNav />
      {/* HOMEPAGE CONTENT */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image src={ramenPic2edited} alt="ramen image" fluid />
          <Carousel.Caption>
            <h3>Get Ramen Specials</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={noodlesEdited} alt="noodles image" fluid />
          <Carousel.Caption>
            <h3>Discover New Ramen Spots</h3>
            <p>You'll get access to all the best ramen spots in your area.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={ramenPic1} alt="ramen shop image" fluid />
          <Carousel.Caption>
            <h3>Sign Up Today</h3>
            <p>It's free and you'll get access to exclusive deals.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default HomePage;
