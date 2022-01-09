import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Blogs from './Blogs';

// Render micro frontend function
window.renderBlogs = (containerId, props) => {
  ReactDOM.render(
    <Blogs {...props} />,
    document.getElementById(containerId)
  );
  serviceWorker.unregister();
};

// Unmount micro frontend function
window.unmountBlogs = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('Blogs-container')) {
  ReactDOM.render(<Blogs />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

