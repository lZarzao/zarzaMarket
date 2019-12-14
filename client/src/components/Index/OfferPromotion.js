import React from "react";
import { Container, Image, CardDeck, Card } from "react-bootstrap";

const OfferPromotion = () => {
  return (
    <Container>
      <CardDeck>
        <Card>
          <Card.Body>
            <CardDeck className="boxes">
              <Image width={50} height={50} src="images/offer.png" rounded />
              <Card.Title className="boxes">
                <h5>Just for Today!</h5>
              </Card.Title>
            </CardDeck>
            <Card.Text>Come to see what do we have today.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <CardDeck className="boxes">
              <Image width={50} height={50} src="images/promo.png" rounded />
              <Card.Title className="boxes">
                <h5>Promotions!</h5>
              </Card.Title>
            </CardDeck>
            <Card.Text>You will find the best promotions here</Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
}

export default OfferPromotion;