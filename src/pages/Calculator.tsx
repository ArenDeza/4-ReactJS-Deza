import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/Header";

export default function Calculator() {
  return (
    <Container className="calculator-layout">
      <Header />

      <Row>{/* input box */}</Row>
      <Row>
        <Col>
          {/* Number buttons */}
          <Row>
            <Col>
              <Button>1</Button>
              <Button>4</Button>
              <Button>7</Button>
              
            </Col>
            <Col>
              <Button>2</Button>
              <Button>5</Button>
              <Button>8</Button>
            </Col>
            <Col>
              <Button>3</Button>
              <Button>6</Button>
              <Button>9</Button>
            </Col>
          </Row>
        </Col>
        <Col>{/*Operation buttons*/}</Col>
      </Row>
      <Row>
        <Col>{/* Equals, Eval button */}</Col>
      </Row>
    </Container>
  );
}
