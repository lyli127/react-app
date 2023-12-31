import Image from "react-bootstrap/Image";
import shiba from "../assets/shiba.png";

export function Footer() {
  return (
    <footer
      className="footer"
      style={{ textAlign: "center", backgroundImage: "../assets/05.svg" }}
    >
      <hr style={{ marginTop: "10%" }} />
      <div className="container">
        <span className="text-muted">
          <br />
          <img src={shiba} alt="ramen logo" width="100" />
          <br />
          <p>
            <span className="text-muted">
              Lylibete Tennikoff © {new Date().getFullYear()}
            </span>
          </p>
        </span>
      </div>
    </footer>
  );
}
