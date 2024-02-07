import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";

function Unknown() {
  return (
    <>
      <Row>
        <Col>
          <h2>Something horrible is happening...</h2>
          <iframe
            className="iframe-window"
            src="../assets/www/index.html"
          ></iframe>
        </Col>
      </Row>
    </>
  );
}

export default Unknown;
