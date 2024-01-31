//import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Header from "../components/Header";

/*
 * TODO
 * - research how to hide navbar elements at certain screen sizes
 * - hobbies page with collapsing text boxes
 * - styling and functionality of calculator
 * - remember to have fun
 * - learn how to output the JSON
 */

function Home() {
  /*
  const [text, setText] = useState("vafdsvfbvsdf");
  const displayMessage = () => {
    setText("hello world");
  };
  */

  return (
    <>
      <Header />
      <Row>

        <Col md="6" xl="4">
          <Card className="homepage-card">
            <h3>CALCULATOR</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
              consectetur.
            </p>
            <a href="./calculator" className="btn btn-primary homepage-btn">
              Go to Calculator
            </a>
          </Card>
        </Col>

        <Col md="6" xl="4">
          <Card className="homepage-card">
            <h3>JSON</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
              consectetur.
            </p>
            <a href="./json" className="btn btn-primary homepage-btn">
              View Users
            </a>
          </Card>
        </Col>

        <Col md="6" xl="4">
          <Card className="homepage-card">
            <h3>HOBBIES</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
              consectetur.
            </p>
            <a href="./hobbies" className="btn btn-primary homepage-btn">
              See Hobbies
            </a>
          </Card>
        </Col>
      </Row>

      <Row>
        <div className="footer-ish">
        <p>Created by Aren Deza</p>
        </div>
        
      </Row>
      
    </>
  );
}

export default Home;
