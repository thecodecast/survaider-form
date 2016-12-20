import React, {Component} from 'react';

const Loading = () => {
  return (
    <div className="survaider-loader">
      <div className="loading-icon">
        <img src="imgs/icon.png" alt="Survaider" />
      </div>
      <div className="loading-text">
        <h1>Loading</h1>
        <div className="dots-animator">
          <div>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
