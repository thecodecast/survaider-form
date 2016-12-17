import React, {Component} from 'react';

const AspectView = ({onClick, index, name, checked}) =>{
  return (
    <div className="option-aspect">
      <input checked={checked} onChange={onClick.bind(null, name)} type="checkbox" id={'aspect-option-' + index} />
      <label className="option-hollow" htmlFor={'aspect-option-' + index}>{name}</label>
    </div>
  );
}

export default AspectView;
