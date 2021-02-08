import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";

const App = (props) => {
  const {hotels} = props;

  return (
    <PropertyScreen/>
  );
};

App.propTypes = {
  hotels: PropTypes.array.isRequired
};

export default App;
