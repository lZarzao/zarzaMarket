import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainCard = () => {

  return (
    <Container>
  <div>
    <div className="card2">
      <div className="row">
        <div className="col-md-7 px-3">
          <div className="card-block px-6">
            <h2>Legos </h2>
            <p className="card-text">
            ¡En esta sección podrás encontrar los mejores legos a precios simplemente increíbles!
            </p>
            <p className="card-text">¿Que esperas? ¡Echa un vistazo!</p>
            <br/>
            <Link to="/zarzamarket/lego" className="mt-auto btn btn-primary">Buscar Legos</Link>
          </div>
        </div>
        <div className="col-md-5">
          <div id="CarouselTest" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="card-block" src="https://picsum.photos/450/300?image=1072" alt=""/>
              </div>
              <div className="carousel-item">
                <img className="card-block" src="https://picsum.photos/450/300?image=855" alt=""/>
              </div>
              <div className="carousel-item">
                <img className="card-block" src="https://picsum.photos/450/300?image=355" alt=""/>
              </div>
              <a className="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div>
    <div className="card2">
      <div className="row">
        <div className="col-md-5">
          <div id="CarouselTest2" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="card-block" src="https://picsum.photos/450/300?image=1072" alt=""/>
              </div>
              <div className="carousel-item">
                <img className="card-block" src="https://picsum.photos/450/300?image=855" alt=""/>
              </div>
              <div className="carousel-item">
                <img className="card-block" src="https://picsum.photos/450/300?image=355" alt=""/>
              </div>
              <a className="carousel-control-prev" href="#CarouselTest2" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#CarouselTest2" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-7 px-3">
          <div className="card-block px-6">
            <h2>Puzzles </h2>
            <p className="card-text">
            Para los amantes del rompecabeza.
            </p>
            <p className="card-text">Aquí podrás encontrar rompecabezas de distintas marcas y tamaños, en excelentes condicones. <br/>
            ¡No esperés mas!</p>
            <br/>
            <Link to="/zarzamarket/puzzle" className="mt-auto btn btn-primary">Buscar Puzzles</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div className="card2">
      <div className="row">
        <div className="col-md-7 px-3">
          <div className="card-block px-6">
            <h2>Video Juegos</h2>
            <p className="card-text">
            ¡En esta sección podrás encontrar los mejores legos a precios simplemente increíbles!
            </p>
            <p className="card-text">¿Que esperas? ¡Echa un vistazo!</p>
            <br/>
            <Link to="/zarzamarket/videogames" className="mt-auto btn btn-primary">Buscar Video Juegos</Link>
          </div>
        </div>
        <div className="col-md-5">
          <div id="CarouselTest3" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="card-block" src="https://picsum.photos/450/300?image=1072" alt=""/>
              </div>
              <div className="carousel-item">
                <img className="card-block" src="https://picsum.photos/450/300?image=855" alt=""/>
              </div>
              <div className="carousel-item">
                <img className="card-block" src="https://picsum.photos/450/300?image=355" alt=""/>
              </div>
              <a className="carousel-control-prev" href="#CarouselTest3" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#CarouselTest3" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </Container>
  );
};

export default MainCard;