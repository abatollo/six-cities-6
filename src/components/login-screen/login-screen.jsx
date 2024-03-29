import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {login} from '../../store/api-actions';
import Header from '../header/header';

const LoginScreen = ({onSubmit}) => {
  const [user, setUser] = useState({
    email: ``,
    password: ``
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setUser({
      email: ``,
      password: ``
    });

    onSubmit({
      ...user,
      login: user.email
    });
  };

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setUser((prevUser) => (
      {...prevUser, [name]: value}
    ));
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" onChange={handleChange} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" onChange={handleChange} />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

LoginScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export default connect(null, mapDispatchToProps)(LoginScreen);
