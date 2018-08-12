import React from 'react';
import ReactDOM from 'react-dom';
import './Components/index.css';
import App from './Components/App';
import registerServiceWorker from './Components/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
