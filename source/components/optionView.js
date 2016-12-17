import React, {Component} from 'react';

const OptionView = ({ onClick, index, title, checked }) => {
  return (
    <div className="radio-option">
      <input checked={checked} onChange={onClick.bind(null)} type="checkbox" id={'radio-option-' + index} />
      <label htmlFor={'radio-option-' + index}>{title}</label>
    </div>
  );
}

export default OptionView;
