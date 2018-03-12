import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import App from './containers/app'
import Home from './containers/Home'
import Lession from './containers/Lession'
import Profile from './containers/Profile'
import './common/index.less'
ReactDOM.render(<Router>
    <App>
    <Switch>
        <Route  exact path={'/'} component={Home}></Route>
        <Route   path={'/lession'} component={Lession}></Route>
        <Route   path={'/profile'} component={Profile}></Route>
    </Switch>
    </App>
    
</Router>, document.getElementById('root'));
registerServiceWorker();
