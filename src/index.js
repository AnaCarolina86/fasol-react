import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import History from './components/History/History';
import Moda from './components/Moda/Moda';
import Personalizado from './components/Personalizado/Personalizado';

import './index.css';


ReactDOM.render(
 <HashRouter>
   <App />
   <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/history" component={History} />
      <Route exact path="/bikini" component={Moda} />
      <Route exact path="/personalizado" component={Personalizado} />
   </Switch>
 </HashRouter>
  ,  
  document.getElementById('root')
);

