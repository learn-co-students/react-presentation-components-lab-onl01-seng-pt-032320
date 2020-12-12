import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const justFunc = event => {
  console.log('has been clicked')
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={justFunc} />
  </div>,
  document.getElementById('root')
);