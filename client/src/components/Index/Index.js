import React from "react"
import MainCard from "./MainCard"
import OfferPromotion from "./OfferPromotion"
import Fjumbotron from "./Fjumbotron"
import SecondCard from "./SecondCard"
import SearchNew from "./SearchNew"
import SuscribeForm from "./Form"
import { Container } from "react-bootstrap"

const Index = () => {

    return (
      <Container>
        <h1>What are you looking for?</h1><br />
        <MainCard /><br />
        <OfferPromotion /><br />
        <Fjumbotron />
        <SecondCard /><br />
        <SearchNew /><br />
        <SuscribeForm />
      </Container>
    );
}

export default Index;
