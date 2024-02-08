import Header from "../components/Header";
import Iframe from "react-iframe";
import { Row, Col } from "react-bootstrap";

function Unknown() {
  return (
    <>
      <Row>
        <Col>
        <Header/>
          <h2>Something horrible is happening...</h2>
          <br/>
          <Iframe
          className="iframe-window"
          height="624"
          width="816"
          url="https://github.com/"></Iframe>
        </Col>
      </Row>
    </>
  );
}

export default Unknown;
