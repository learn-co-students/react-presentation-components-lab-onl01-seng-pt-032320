import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';


ReactDOM.render(
  <h2>
    <SimpleComponent />
    <SimplerComponent handleClick={() => {return <div>Now get in bitches. We're going shopping.</div>}} />
  </h2>,
  document.getElementById('root')
);