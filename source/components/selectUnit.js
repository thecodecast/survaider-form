import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../actions';
import * as selectors from '../selectors';


import Footer from './footer';
import TitleView from './titleView';

class SelectUnit extends Component {

  constructor(){
    super();
    this.state = {
      units: [],
      showResults: false,
      selectedUnitName: ''
    }
  }

  filterResults(e){
    if (!this.state.showResults) {
      this.setState({
        showResults: true
      });
    }
    let query = e.target.value;
    let newFilteredUnits = this.props.units.filter((unit) => unit.unit_name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    this.setState({
      units: newFilteredUnits,
      selectedUnitName: query
    });
  }

  selectUnit(unit_name, survey_id){
    this.props.selectUnit({ unit_name, survey_id });
    this.setState({
      selectedUnitName: unit_name,
      showResults: false
    });
  }

  componentDidMount(){
    this.props.setNextLink('/rate');
    this.setState({
      units: this.props.units,
      selectedUnitName: this.props.selectedUnit.unit_name
    })
  }


  render(){
    let unitResults = this.state.units.map((unit, idx) => <li key={unit.survey_id} onClick={this.selectUnit.bind(this, unit.unit_name, unit.survey_id)}>{unit.unit_name}</li>);
    return (
      <section className="survaider-home-main">
        <div className="main-form">
          <TitleView title={this.props.title} />
          <div className="select-search">
            <input value={this.state.selectedUnitName} placeholder={this.props.placeholder} onChange={this.filterResults.bind(this)} onClick={this.filterResults.bind(this)} type="text" required="required" />
            <ul className="units-results-list">
              {this.state.showResults ? unitResults : ''}
            </ul>
          </div>
        </div>
      </section>
    );
  }

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
