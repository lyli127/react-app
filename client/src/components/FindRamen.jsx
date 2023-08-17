import { Loader } from "@googlemaps/js-api-loader";
import { useRef, useEffect } from "react";

import { MainNav } from "./MainNav";
import { Footer } from "./Footer";
import ramenBowl from "../assets/ramen-64w.png";

const loader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_DEV_KEY,
  version: "weekly",
  libraries: ["places", "core", "marker"],
  // ...additionalOptions,
});

const { LatLng, LatLngBounds } = await loader.importLibrary("core");
const { Map, InfoWindow } = await loader.importLibrary("maps");
const { PlacesService } = await loader.importLibrary("places");
const { AdvancedMarkerElement, PinElement } = await loader.importLibrary(
  "marker"
);

const mapOptions = {
  center: new LatLng(-33.8688, 151.2093), // Sydney
  zoom: 13,
  mapId: "DEMO_MAP_ID",
};

// Create custom glyph for markers
const glyphImg = document.createElement("img");
glyphImg.src = ramenBowl;
glyphImg.width = 64 / 2;
const glyphPinElm = new PinElement({
  // background: "red",
  glyph: glyphImg,
  borderColor: "#333",
  scale: 1.7,
});

// This of this as a fancy search query:
const request = {
  query: "Ramen in NSW",
  fields: [
    "name",
    // "rating", // 1-5
    // "website",
    "geometry",
    // "businessStatus", // ie. "OPERATIONAL", etc.
    // "hasWheelchairAccessibleEntrance",
  ],
  // includedType: "restaurant",
  // // isOpenNow: true,
  // language: "en-AU",
  // maxResultCount: 7,
  // minRating: 3.2,
  // region: "au",
  // useStrictTypeFiltering: false,
};

// Docs: https://developers.google.com/maps/documentation/javascript/place-search

// const { places } = new PlacesService.findPlaceFromQuery(request);

const bound = new LatLngBounds();

function addPlacesToMap(placeArr, map) {
  // Get a reference to all the info windows so we can close them when a new
  // one is opened.
  const allInfoWindows = [];

  if (placeArr.length) {
    // Loop through and get all the results.
    placeArr.forEach((place) => {
      // Create an info window for each place
      const infoWindow = new InfoWindow({
        content: `<h3>${place.name}</h3><p>${place.website}</p>`,
        ariaLabel: place.name,
      });

      allInfoWindows.push(infoWindow);

      // Create a marker for each place
      const marker = new AdvancedMarkerElement({
        map,
        position: place.geometry.location,
        title: place.name,
        content: glyphPinElm.element,
      });

      // Add an event listener on the marker to open the info window
      marker.addListener("click", () => {
        // Close all the others...
        allInfoWindows.forEach((infoWindow) => infoWindow.close());

        // ...and open the one just clicked
        infoWindow.open({ anchor: marker, map });
      });

      // Resize the map to fit all the markers
      bound.extend(new LatLng(place.geometry.location));
    });
  } else {
    console.log("No results");
  }

  map.setCenter(bound.getCenter());
}

/**
 * FINALLY... OUR COMPONENT!!!!
 */
function FindRamen() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new Map(mapContainerRef.current, mapOptions);
    const placesService = new PlacesService(map);

    placesService.findPlaceFromQuery(request, (results, status) => {
      addPlacesToMap(results, map);
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
