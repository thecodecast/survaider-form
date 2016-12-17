import React, {Component} from 'react';

const AspectView = ({onClick, index, name, checked}) =>{
  return (
    <div className="option-aspect">
      {checked ? <input checked onClick={onClick.bind(null, name)} type="checkbox" id={'aspect-option-' + index} /> : <input onClick={onClick.bind(null, name)} type="checkbox" id={'aspect-option-' + index} />}
      <label className="option-hollow" htmlFor={'aspect-option-' + index}>{name}</label>
    </div>
  );
}

export default AspectView;
