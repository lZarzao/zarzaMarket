import React from "react";
import { Container, CardDeck, Card } from "react-bootstrap";

const SecondCard = () => {
  return (
    <Container>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="images/videogames.png" />
          <Card.Body>
            <Card.Title>PS4</Card.Title>
            {/* <Card.Text>This is a wider card</Card.Text> */}
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/xbox.png" />
          <Card.Body>
            <Card.Title>X-BOX</Card.Title>
            {/* <Card.Text>This card has supporting</Card.Text> */}
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="images/switch.png" />
          <Card.Body>
            <Card.Title>Switch</Card.Title>
            {/* <Card.Text>This is a wider card</Card.Text> */}
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default SecondCard;
