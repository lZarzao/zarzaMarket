import React from "react"
import MainCard from "./MainCard"
import OfferPromotion from "./OfferPromotion"
import SearchNew from "./SearchNew"
import { Container } from "react-bootstrap"

const Index = () => {

    return (
      <Container>
        <h1>¿Que estas Buscando?</h1>
        <br />
        <MainCard />
        <br />
      </Container>
    );
}

export default Index;
