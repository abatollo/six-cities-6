import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/action';

import {ERROR_DISPLAY_TIMEOUT} from '../../const';

const Error = ({onTimerEnd}) => {
  const divStyle = {
    display: `flex`,
    top: `0`,
    justifyContent: `center`,
    alignItems: `center`,
    position: `fixed`,
    zIndex: `999`,
    backgroundColor: `red`,
    color: `white`,
    width: `100vw`,
    height: `10vh`
  };

  const [isErrorVisible, setErrorVisibility] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setErrorVisibility(false);
      onTimerEnd();
    }, ERROR_DISPLAY_TIMEOUT);
  }, [onTimerEnd]);

  return isErrorVisible && (
    <div style={divStyle}>
      An error occured. Try again later.
    </div>
  );
};

Error.propTypes = {
  onTimerEnd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onTimerEnd() {
    dispatch(ActionCreator.removeError());
  }
});

export default connect(null, mapDispatchToProps)(Error);
