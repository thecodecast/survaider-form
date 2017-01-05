import React, {Component} from 'react';

const StarView = ({fill, onClick, value}) => {

  let unselectColor = '#E9F1DE';
  let selectColor = '#007E8D';

  return (
    <div onClick={onClick.bind(null, value)} className="star-svg">
      <svg width="60px" height="57px" viewBox="54 123 60 57">
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <polygon id="Shape" stroke="none" fill={ fill ? selectColor : unselectColor } points="84 168.819059 102.54 180 97.6349412 158.913059 114 144.732 92.4270588 142.880941 84 123 75.5730588 142.880941 54 144.732 70.3650588 158.913059 65.46 180"></polygon>
      </svg>
    </div>
  );
}

export default StarView;
