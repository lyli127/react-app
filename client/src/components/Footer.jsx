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
          <img src="./favicon.ico" alt="ramen logo" width="100" />
          <br />
          <p>
            <span className="text-muted">Lylibete Tennikoff © 2021</span>
          </p>
          {/* <img src="../assets/linkedin.png" alt="linkedin" />
          <img src="ramen-app/client/src/assets/github.png" alt="github" />
          <img src="../assets/email" alt="email" /> */}
        </span>
      </div>
    </footer>
  );
}
