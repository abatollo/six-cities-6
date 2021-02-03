import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";


const App = (props) => {
  const {hotels} = props;

  return (
    <MainPage hotels={hotels}/>
  );
};

App.propTypes = {
  hotels: PropTypes.array.isRequired
};

export default App;
