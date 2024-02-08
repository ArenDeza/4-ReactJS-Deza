import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/Header";
import { useState } from "react";

function Calculator() {
  // state variable for the paragraph text
  const [text, setText] = useState("");

  // appends the character sent to the string text
  function append(char: string) {
    setText(text + char);
  }

  // evaluate the expression in the text
  function evaluate() {
    let result: string = "";
    try {
      result = eval(text);
    } catch (error: any) {
      // Output the error message to the paragraph
      result = error;
    } finally {
      setText(result.toString());
    }
  }

  // clears the text
  function clear() {
    setText("");
  }

  // backspace
  function deleteOne() {
    setText(text.slice(0, -1));
  }

  return (
    <>
      <Header />

      <p className="c-title">Claculator!1! (malware-free edition)</p>
      <Container className="calculator-layout">
        <Row>
          <Col sm={12} md={2} lg={3} className="d-none d-md-block"></Col>
          <Col className="color-me">
            <Row className="c-row">
              <div className="c-text">{text}</div>
            </Row>

            <Row className="c-row">
              <Col>
                <Button variant="outline-secondary" onClick={() => append("1")}>
                  1
                </Button>
              </Col>
              <Col>
                <Button variant="outline-secondary" onClick={() => append("2")}>
                  2
                </Button>
              </Col>
              <Col>
                <Button variant="outline-secondary" onClick={() => append("3")}>
                  3
                </Button>
              </Col>
              <Col>
                <Button variant="secondary" onClick={() => append("+")}>
                  +
                </Button>
              </Col>
            </Row>
            <Row className="c-row">
              <Col>
                <Button variant="outline-secondary" onClick={() => append("4")}>
                  4
                </Button>
              </Col>
              <Col>
                <Button variant="outline-secondary" onClick={() => append("5")}>
                  5
                </Button>
              </Col>
              <Col>
                <Button variant="outline-secondary" onClick={() => append("6")}>
                  6
                </Button>
              </Col>
              <Col>
                <Button variant="secondary" onClick={() => append("-")}>
                  -
                </Button>
              </Col>
            </Row>
            <Row className="c-row">
              <Col>
                <Button variant="outline-secondary" onClick={() => append("7")}>
                  7
                </Button>
              </Col>
              <Col>
                <Button variant="outline-secondary" onClick={() => append("8")}>
                  8
                </Button>
              </Col>
              <Col>
                <Button variant="outline-secondary" onClick={() => append("9")}>
                  9
                </Button>
              </Col>
              <Col>
                <Button variant="secondary" onClick={() => append("*")}>
                  *
                </Button>
              </Col>
            </Row>
            <Row className="c-row">
              <Col>
                <Button variant="secondary" onClick={() => append("(")}>
                  (
                </Button>
              </Col>
              <Col>
                <Button variant="outline-secondary" onClick={() => append("0")}>
                  0
                </Button>
              </Col>
              <Col>
                <Button variant="secondary" onClick={() => append(")")}>
                  )
                </Button>
              </Col>
              <Col>
                <Button variant="secondary" onClick={() => append("/")}>
                  /
                </Button>
              </Col>
            </Row>
            <Row className="c-row">
              <Col>
                <Button variant="secondary" onClick={clear}>
                  AC
                </Button>
              </Col>
              <Col>
                <Button variant="secondary" onClick={deleteOne}>
                  DEL
                </Button>
              </Col>
              <Col>
                <Button variant="secondary" onClick={() => append(".")}>
                  .
                </Button>
              </Col>
              <Col className="col-equals">
                <Button variant="primary" onClick={evaluate}>
                  =
                </Button>
              </Col>
            </Row>

            <p className="calc-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              sit, vitae doloribus maiores impedit ducimus eaque possimus
              perferendis ut modi placeat necessitatibus at nesciunt a assumenda
              sequi quidem aliquid fugit eveniet eos dolorum. Eligendi dicta
              quisquam illum. Beatae magnam non mollitia, voluptates illum
              voluptas, quas facere dignissimos culpa suscipit voluptatem!
            </p>
          </Col>
          <Col sm={12} md={2} lg={3} className="d-none d-md-block"></Col>
        </Row>
      </Container>
    </>
  );
}

export default Calculator;