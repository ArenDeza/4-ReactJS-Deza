import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";

export default function Hobbies() {
  return (
    <>
      <Header />
      <Row className="hobby-row">
        <h1 className="hobby-title">MY HOBBIES</h1>
      </Row>

      <Row className="hobby-row">
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
            ILLUSTRATION
          </div>
        </Col>
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
            GAME DEVELOPMENT
          </div>
        </Col>
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
            WRITING
          </div>
        </Col>
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
            VIDEO JAMES
          </div>
        </Col>
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
           DRINKING PAINT
          </div>
        </Col>
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
           LISTENING TO MUSIC
          </div>
        </Col>
      </Row>

      <Row className="hobby-row">
        <h1 className="hobby-title align-r">MY HOBBIES (derogatory)</h1>
      </Row>

      <Row className="hobby-row">
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
            STRUGGLING
          </div>
        </Col>
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
            SCREAMING
          </div>
        </Col>
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
            CRYING
          </div>
        </Col>
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
            PEST EXTERMINATION
          </div>
        </Col>
      </Row>
    </>
  );
}
