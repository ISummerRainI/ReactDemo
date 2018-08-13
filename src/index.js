import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Router from './utils/router';
import FastClick from 'fastclick';
import 'lib-flexible';

import './index.css';

// 引入fastclick解决移动端点击时间延时，以及touch穿透问题
FastClick.attach(document.body);

ReactDOM.render(Router, document.getElementById('root'));
registerServiceWorker();
