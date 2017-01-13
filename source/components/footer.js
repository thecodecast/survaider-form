import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../actions';
import * as selectors from '../selectors';

class Footer extends Component{

  constructor(){
    super();
    this.state = {
      showSpinner: false
    }
  }

  navigate(e){
    e.preventDefault();
    this.setState({
      showSpinner: true
    });
    setTimeout(() => {
      this.setState({
        showSpinner: false
      });
      this.props.router.push(this.props.nextLink);
      this.props.deactivateFooter();
    }, 1000);
  }

  render(){
    let spinner = <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>;

    return (
      <footer className="survaider-home-footer clearfix">
        <div onClick={this.navigate.bind(this)} className="form-action pull-right" disabled={!this.props.isFooterActive}>
          <button className="next-action hollow-button">Next</button>
          {this.state.showSpinner ? spinner : ''}
        </div>
      </footer>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    props,
    isFooterActive: state.isFooterActive,
    nextLink: state.nextLink
  }
};

export default connect(mapStateToProps, actionCreators)(Footer);
