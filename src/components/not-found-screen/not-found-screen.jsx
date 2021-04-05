import React from 'react';

import Header from '../header/header';

const NotFoundScreen = () => {
  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main">
        <h1>404: Page not Found</h1>
      </main>
    </div>
  );
};

export default NotFoundScreen;
