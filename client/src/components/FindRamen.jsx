import { Loader } from "@googlemaps/js-api-loader";
import { useRef, useEffect, useState } from "react";

import { MainNav } from "./MainNav";
import { Footer } from "./Footer";
import ramenBowl from "../assets/ramen-64w.png";

const loader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_DEV_KEY,
  version: "weekly",
  libraries: ["places", "core", "marker"],
});

const { LatLng, LatLngBounds } = await loader.importLibrary("core");
const { Map, InfoWindow } = await loader.importLibrary("maps");
const { AdvancedMarkerElement, PinElement } = await loader.importLibrary(
  "marker"
);

const mapOptions = {
  center: new LatLng(-33.8688, 151.2093), // Sydney
  zoom: 13,
  mapId: "DEMO_MAP_ID",
};

/**
 * Function to plot restaurants on our map.
 *
 * This will loop over the restaurant data and get the lat/lng, add the marker with that info,
 * and include the name and use the slug to add a link to the review page for the restaurant.
 *
 * @param {Array} restaurantsData - array of restaurant objects with name, slug, latitude, longitude
 * @param {google.maps.MapsLibrary.Map} map - instance of the Map class to plot restaurants on
 */
function plotRestaurantsOnMap(restaurantsData, map) {
  // Get a reference to all the info windows so we can close them all at once
  const allInfoWindows = [];

  // Set up bounds so we can resize the map to fit all the markers
  const bounds = new LatLngBounds();

  // Start looping over the restaurants
  restaurantsData.forEach((restaurant) => {
    const position = new LatLng(
      Number(restaurant.latitude),
      Number(restaurant.longitude)
    );

    // Create an info window for each place
    const infoWindow = new InfoWindow({
      content: `
        <h3 style="color:black">${restaurant.name}</h3>
        <a href="/reviews/${restaurant.slug}">View Reviews</a>
        `,
      ariaLabel: restaurant.name,
    });
    allInfoWindows.push(infoWindow);

    // Create a funky glyph for the red location marker
    const glyphImg = document.createElement("img");
    glyphImg.src = ramenBowl;
    glyphImg.width = 64 / 2;
    const glyphPinElm = new PinElement({
      // background: "red",
      glyph: glyphImg,
      borderColor: "#333",
      scale: 1.7,
    });
    // Create a marker for each place
    const marker = new AdvancedMarkerElement({
      map,
      position,
      title: restaurant.name,
      content: glyphPinElm.element,
    });

    // Add an event listener on the marker to open the info window
    marker.addListener("click", () => {
      // Close all the others...
      allInfoWindows.forEach((oneOfOurInfoWindows) =>
        oneOfOurInfoWindows.close()
      );

      // ...and open the one just clicked
      infoWindow.open({ anchor: marker, map });
    });

    // Resize the map to fit this restaurant
    bounds.extend(position);
  });

  // Finally, use `bounds` to center and zoom the map
  map.setCenter(bounds.getCenter());
}

/**
 * FINALLY... OUR COMPONENT!!!!
 */
function FindRamen() {
  const mapContainerRef = useRef(null);

  //loop through lat long to add markers to map

  useEffect(() => {
    // Create our map instance
    const map = new Map(mapContainerRef.current, mapOptions);

    //get info from restaurants and plot data on map
    fetch(`http://localhost:3000/api/restaurants/all`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        plotRestaurantsOnMap(data, map);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <MainNav />
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <h2>Find Ramen</h2>
        <div
          ref={mapContainerRef}
          style={{ height: "60vh", width: "100%" }}
        ></div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default FindRamen;
