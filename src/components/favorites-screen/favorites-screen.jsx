import React from "react";
import Header from "../header/header";
import FavoritesList from "../favorites-list/favorites-list";
import {PropsValidator} from "../../utils";

const FavoritesScreen = ({hotels}) => {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList hotels={hotels} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

FavoritesScreen.propTypes = {
  hotels: PropsValidator.HOTELS
};

export default FavoritesScreen;
