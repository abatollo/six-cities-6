import {AuthorizationStatus} from '../const';

const checkAuthorizationStatus = (currentAuthorizationStatus) => {
  return currentAuthorizationStatus === AuthorizationStatus.AUTH;
};

export {checkAuthorizationStatus};
