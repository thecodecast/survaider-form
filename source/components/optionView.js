import React, {Component} from 'react';

class OptionView extends Component{
  render(){
    return (
      <div className="radio-option">
        <input type="radio" id={'radio-option-' + this.props.index} name="response" />
        <label htmlFor={'radio-option-' + this.props.index}>{this.props.title}</label>
      </div>
    );
  }
}

export default OptionView;
