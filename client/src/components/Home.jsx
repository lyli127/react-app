import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

//My components
import { MainNav } from "./MainNav";
import { Footer } from "./Footer";

//Images
import noodlesCropped from "../assets/noodlesEdited.jpg";
// import ramenPic2edited from "../assets/ramenPic2edited.jpg";
import ramenShopCropped from "../assets/ramenShopCropped.jpg";
import bowlOfRamenResized from "../assets/bowlOfRamenResized.jpg";

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
          <Image src={ramenShopCropped} alt="ramen shop image" fluid />
          <Carousel.Caption>
            <h3>Find the best ramen spots in Sydney</h3>
            <p>We only promote the best spots in the city!</p>
            {/* </div> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={noodlesCropped} alt="noodles image" fluid />
          <Carousel.Caption>
            <h3>Discover New Ramen Spots</h3>
            <p>You'll get access to all the best ramen spots in your area.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={bowlOfRamenResized} alt="ramen image" fluid />
          <Carousel.Caption>
            <h3>Add your reviews</h3>
            <p>
              No need to share personal data - add and share your review in one
              easy step!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default HomePage;
