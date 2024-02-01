import {
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import Header from "../components/Header";

export default function Calculator() {
  return (
    <>
      <Header />

      <p className="c-title">Claculator!1! (malware-free edition)</p>

      <Container className="calculator-layout">
        <Row>
          <Col sm={12} md={2} lg={3} className="d-none d-md-block"></Col>
          <Col className="color-me">

            <Row className="c-row">
              <div className="c-text">_</div>
            </Row>

            <Row className="c-row">
              <Col>
                <Button variant="outline-secondary">1</Button>
              </Col>
              <Col>
                <Button variant="outline-secondary">2</Button>
              </Col>
              <Col>
                <Button variant="outline-secondary">3</Button>
              </Col>
              <Col>
                <Button variant="secondary">+</Button>
              </Col>
            </Row>
            <Row className="c-row">
              <Col>
                <Button variant="outline-secondary">4</Button>
              </Col>
              <Col>
                <Button variant="outline-secondary">5</Button>
              </Col>
              <Col>
                <Button variant="outline-secondary">6</Button>
              </Col>
              <Col>
                <Button variant="secondary">-</Button>
              </Col>
            </Row>
            <Row className="c-row">
              <Col>
                <Button variant="outline-secondary">7</Button>
              </Col>
              <Col>
                <Button variant="outline-secondary">8</Button>
              </Col>
              <Col>
                <Button variant="outline-secondary">9</Button>
              </Col>
              <Col>
                <Button variant="secondary">*</Button>
              </Col>
            </Row>
            <Row className="c-row">
              <Col>
                <Button variant="secondary">C</Button>
              </Col>
              <Col>
                <Button variant="outline-secondary">0</Button>
              </Col>
              <Col>
                <Button variant="secondary">%</Button>
              </Col>
              <Col>
                <Button variant="secondary">/</Button>
              </Col>
            </Row>
            <Row className="c-row">
              <Col>
                <Button variant="secondary">(</Button>
              </Col>
              <Col>
                <Button variant="secondary">)</Button>
              </Col>
              <Col className="col-equals" >
                <Button variant="primary">=</Button>
              </Col>
            </Row>

            <p className="calc-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Adipisci sit, vitae doloribus maiores impedit ducimus eaque possimus 
              perferendis ut modi placeat necessitatibus at nesciunt a assumenda sequi 
              quidem aliquid fugit eveniet eos dolorum. Eligendi dicta quisquam illum. 
              Beatae magnam non mollitia, voluptates illum voluptas, 
              quas facere dignissimos culpa suscipit voluptatem!
            </p>
          </Col>
          <Col sm={12} md={2} lg={3} className="d-none d-md-block"></Col>
        </Row>
      </Container>
    </>
  );
}
