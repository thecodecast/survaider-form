import React, {Component} from 'react';
import {Link} from 'react-router';

class Footer extends Component{
  render(){
    return (
      <footer className="survaider-home-footer clearfix">

        <div className="footer-info pull-left">
          <div className="info-svg">
            <svg width="60" height="60">
              <g transform="scale(4)">
              <path style={{fill: '#030104' }} d="M7,0.935c-3.866,0-7,2.463-7,5.5c0,1.438,0.703,2.749,1.854,3.729
                c-0.044,0.955-0.242,2.239-0.942,2.901c1.337,0,2.706-0.88,3.518-1.514c0.796,0.248,1.663,0.384,2.57,0.384c3.866,0,7-2.463,7-5.5
                S10.866,0.935,7,0.935z M4,7.935c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1S4.553,7.935,4,7.935z M7,7.935
                c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1S7.553,7.935,7,7.935z M10,7.935c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1
                S10.553,7.935,10,7.935z"/>
              </g>
            </svg>
          </div>
        </div>

        {this.props.skipLink &&
          <div className="form-action skip-action pull-right">
            <Link to={this.props.skipLink} className="hollow-button">Skip</Link>
          </div>}


        <div className="form-action next-action pull-right">
          <Link to={this.props.nextLink} className="hollow-button">Next</Link>
        </div>

      </footer>
    );
  }
}

export default Footer;
