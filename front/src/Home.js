import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

function Home() {
  
  return (
    <div className="body">
      <Container>

        <Row>

          <Col >
          
          <Image fluid src="Aashiq2.jpg"/>
          
          </Col>

          <Col> <Image fluid src="lagaan2.jpg"/></Col>

          <Col> <Image fluid src="stdnt1.jpg"/></Col>

          
        </Row>

        <Row><Col >Aashiq2</Col>
        <Col className="bg-white mt-0">lagaan2</Col>
        <Col>stdnt1</Col></Row>

        

      </Container>
    </div>
  );
}
export default Home;
