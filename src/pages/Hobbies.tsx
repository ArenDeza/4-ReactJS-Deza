import Header from "../components/Header";
import {Row, Col, Card, CardText} from "react-bootstrap";
 
export default function Hobbies() {
    return (
       <>
       <Header />
       <p>Hobbies</p>

       {/* if you click a button, the text box expands. Clicking again hides it. */}
<Row className="color-this-1">

<Col>

    <Card>
    <CardText>
    adadaad
</CardText>
    </Card>
</Col>

<Col>
</Col>

</Row>
        
       </>
    )
}