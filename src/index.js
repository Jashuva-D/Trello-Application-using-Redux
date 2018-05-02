import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TrelleApp from './components/TrelleApp'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store/store'

ReactDOM.render(<Provider store={store}><TrelleApp /></Provider>, document.getElementById('root'));
registerServiceWorker();
