import React from "react";
import { Container, Image, CardDeck, Card } from "react-bootstrap";

const SearchNew = () => {
  return (
    <Container>
      <CardDeck>
        <Card>
          <Card.Body>
            <CardDeck className="boxes">
              <Image width={50} height={50} src="images/search.png" rounded />
              <Card.Title className="boxes">
                <h5>The most wanted</h5>
              </Card.Title>
            </CardDeck>
            <Card.Text>The most searched on the web</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <CardDeck className="boxes">
              <Image width={50} height={50} src="images/new.png" rounded />
              <Card.Title className="boxes">
                <h5>The new</h5>
              </Card.Title>
            </CardDeck>
            <Card.Text>You'll find the latest here.</Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default SearchNew;