import React from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//Pages
import Home from './components/Pages/home';
import About from './components/Pages/about';
import Services from './components/Common/services';
import Portfolio from './components/Common/portfolio';


function App() {
  return (
    <Router>
    <PageWrapper>
     
        <Route 
        exact={true}
        path="/"
        component={Home}
        />
        <Route
        path="/about"
        component={About}
        />
         <Route
        path="/services"
        component={Services}
        />
        <Route
        path="/portfolio"
        component={Portfolio}
        />
        
    </PageWrapper>
    </Router>
    
  );
}

export default App;
