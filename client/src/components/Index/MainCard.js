import React from "react";
import { Container, CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainCard = () => {

  return (
    <Container>
      <CardDeck>
        <Card>
          <Link to={`/zarzamarket/lego`}><Card.Img variant="top" src="images/lego-logo.png" /></Link>
          <Card.Body>
            <Card.Title>Lego</Card.Title>
            {/* <Card.Text>This is a wider card</Card.Text> */}
          </Card.Body>
        </Card>
        <Card>
          <Link to={`/zarzamarket/puzzle`}><Card.Img variant="top" src="images/puzzle.png" /></Link>
          <Card.Body>
            <Card.Title>Puzzle</Card.Title>
            {/* <Card.Text>This card has supporting</Card.Text> */}
          </Card.Body>
        </Card>
        <Card>
          <Link to={`/zarzamarket/videogames`}><Card.Img variant="top" src="images/videogames.png" /></Link>
          <Card.Body>
            <Card.Title>Video Games</Card.Title>
            {/* <Card.Text>This is a wider card</Card.Text> */}
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default MainCard;