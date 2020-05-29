import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cards from './Cards';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div>
    	<Cards />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
