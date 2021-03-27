import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {Routes} from "../../routes";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.MAIN}>
          <MainScreen />
        </Route>
        <Route exact path={Routes.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={Routes.FAVORITES}>
          <FavoritesScreen />
        </Route>
        <Route exact path={Routes.HOTELS}>
          <PropertyScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
