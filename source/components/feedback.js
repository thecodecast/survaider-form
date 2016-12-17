import React, {Component} from 'react';

import Footer from './footer';
import TitleView from './titleView';

const Feedback = () => {

  let nextLink = 'contact';

  return (
    <section className="survaider-home-main">

      <div className="main-form">

        <TitleView title="Thank you! Also, please let me know how we can improve." />

        <div className="response-view feedback-response">
          <div className="feedback-textarea">
            <textarea name="feedback" rows="10" cols="80" placeholder="Your thoughts here..."></textarea>
          </div>
        </div>

      </div>

      <Footer nextLink={nextLink} />
    </section>
  );
}

export default Feedback;
