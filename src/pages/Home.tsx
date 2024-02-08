//import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Header from "../components/Header";

function Home() {


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

        <Col md="6" xl="4">
          <Card className="homepage-card">
            <h3>???</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
              consectetur.
            </p>
            <a href="./unknown" className="btn btn-primary homepage-btn">
              Open ???
            </a>
          </Card>
        </Col>

        <Col md="6" xl="4">
          <Card className="homepage-card">
            <h3>TROJANS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
              consectetur.
            </p>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="btn btn-primary homepage-btn">
              Download Malware
            </a>
          </Card>
        </Col>
        
      </Row>

      <Row>
        <div className="footer-ish">
        <p>Created by Aren Deza - made with typescript and react bootstrap</p>
        </div>
        
      </Row>
      
    </>
  );
}

export default Home;
