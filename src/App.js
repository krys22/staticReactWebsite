import React from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
function App() {
  return (
    <PageWrapper>
      <Router>
        <Route 
        path="/home"
        component={Home}
        />
      </Router>
     
    </PageWrapper>
    
    
  );
}

export default App;
