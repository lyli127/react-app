import Image from "react-bootstrap/Image";

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
          <img src="/favicon.ico" alt="ramen logo" width="100" />
          <br />
          <p>
            <span className="text-muted">Lylibete Tennikoff © 2023</span>
          </p>
        </span>
      </div>
    </footer>
  );
}
