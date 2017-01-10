import React, {Component} from 'react';

class Header extends Component{
  render(){
    return (
      <header className="survaider-home-header clearfix">

        <a href="/" className="logo pull-left">
          <img src="imgs/icon.png" alt="Survaider" />
        </a>

        <div className="header-info pull-right">
          <span>This is a Survaider powered survey</span>
        </div>

      </header>
    );
  }
}

export default Header;
