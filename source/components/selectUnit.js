import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../actions';
import * as selectors from '../selectors';


import Footer from './footer';
import TitleView from './titleView';

const SelectUnit = ({props, selectedUnit, selectUnit, title, placeholder, units, }) => {

  let nextLink = '/contact';

  let onChange = (e) => {
    console.log(e.target.value);
    selectUnit(e.target.value);
  }

  return (
    <section className="select-unit-section">
      <div className="select-form">
        <TitleView title={title} />
        <div className="select-response">
          <div className="form-field">
            <input placeholder={placeholder} onChange={onChange} type="text" required="required" />
          </div>
        </div>
      </div>
      <Footer nextLink={nextLink} />
    </section>
  );
}


const mapStateToProps = (state, props) => {
  return {
    title: state.units_question,
    placeholder: state.units_placeholder_text,
    units: state.units,
    props,
    selectedUnit: state.selectedUnit
  }
};

export default connect(mapStateToProps, actionCreators)(SelectUnit);
