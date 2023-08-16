import { MainNav } from "./MainNav";
import { Footer } from "./Footer";

function FindRamen() {
  return (
    <>
      <MainNav />
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <h2>Find Ramen</h2>
        <h3>This is the page I'll have Google Maps on</h3>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default FindRamen;
