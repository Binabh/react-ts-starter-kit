import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'src/assets/css/main.css';
import 'src/assets/sass/main.scss';

import App from './app';

function render(Component: JSX.Element) {
  ReactDOM.render(Component, document.getElementById('content'));
}

render(<App />);
