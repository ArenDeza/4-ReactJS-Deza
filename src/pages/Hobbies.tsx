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
            <Row><img src="https://artsdot.com/ADC/Art-ImgScreen-1.nsf/O/A-5ZKGND/$FILE/Vincent-van-gogh-poet-s-garden-the.Jpg"></img></Row>
          </div>
        </Col>
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
            GAME DEVELOPMENT
            <Row><img src="https://learnodo-newtonic.com/wp-content/uploads/2016/05/Marc-Chagall-Famous-Paintings-Featured.jpg"></img></Row>
          </div>
        </Col>
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
            WRITING
            <Row><img src="https://www.millefleurstapestries.com/fotos/resized/XM06002_ORIG_01.jpg"></img></Row>
          </div>
        </Col>
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
            VIDEO JAMES
            <Row><img src="https://pics.craiyon.com/2023-10-10/9594971d144a4927839cd3277725d920.webp" alt="me and the boys"></img></Row>
          </div>
        </Col>
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
           LISTENING TO MUSIC
           <Row><img src="https://www.lambiek.net/artists/img/1021-78482-999-p2c.jpg"></img></Row>
          </div>
        </Col>
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
           DRINKING PAINT
           <Row><img src="https://preview.redd.it/people-liked-my-fear-and-hunger-character-post-so-have-v0-es9tn5of36ab1.png?width=640&crop=smart&auto=webp&s=e1ba65e491762260c754045697001b8025bd4e19"></img></Row>
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
            <Row><img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Sisyphus_by_von_Stuck.jpg"></img></Row>
          </div>
        </Col>
        <Col md="6" className="hobby-col">
          <div className="hobby-card bg-img-scream">
            SCREAMING
            <Row><img src="https://ichef.bbci.co.uk/images/ic/480xn/p03lcphh.jpg.webp"></img></Row>
          </div>
        </Col>
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
            CRYING
            <Row><img src="https://i.redd.it/rz2649vb7je91.png"></img></Row>
          </div>
        </Col>
        <Col md="6" className="hobby-col">
          <div className="hobby-card">
            PEST EXTERMINATION
            <Row><img src="https://i.kym-cdn.com/entries/icons/facebook/000/035/328/kafkiano.jpg"></img></Row>
          </div>
        </Col>
      </Row>
      <Row>
      <a href="./hobbies" className="btn btn-primary homepage-btn">Back to the Top</a>
      </Row>
    </>
  );
}
