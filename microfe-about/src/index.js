import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import About from './About';

// Render micro frontend function
window.renderAbout = (containerId, props) => {
  ReactDOM.render(
    <About {...props} />,
    document.getElementById(containerId)
  );
  serviceWorker.unregister();
};

// Unmount micro frontend function
window.unmountAbout = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('About-container')) {
  ReactDOM.render(<About />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

