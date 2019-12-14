import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";

const Fjumbotron = () => {
  return (
    <Container>
      <Jumbotron>
        <h1>Legos For You</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="dark">Learn more</Button>
        </p>
      </Jumbotron>
    </Container>
  );
};

export default Fjumbotron;
