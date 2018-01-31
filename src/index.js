import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './modal.css';
import Home from './views/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
