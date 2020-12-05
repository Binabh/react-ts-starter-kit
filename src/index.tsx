import React from 'react';
import ReactDOM from 'react-dom';
import 'src/assets/css/main.css';
import 'src/assets/sass/main.scss';

import App from './app';

function render() {
  ReactDOM.render(<App />, document.getElementById('content'));
}

render();
