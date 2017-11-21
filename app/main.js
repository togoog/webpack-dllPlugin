import React,{Component} from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux';
import App from '../router/router'; //路由配置
// import store from './store/Store';
render(
	<App />,
    document.getElementById('app')
);

