import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app';

function render(Component: JSX.Element) {
  ReactDOM.render(Component, document.getElementById('content'));
}

render(<App />);
