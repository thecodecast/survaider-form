import React, {Component} from 'react';

import Container from './container';

const App = ({isParent}) =>{
  return (
      <Container isParent={isParent} />
  );
}

export default App;
