import React from 'react';
import './App.scss';
import AccountBook from './view/AccountBook';
import Tags from './view/Tags';
import Write from './view/Write';
import Analysis from './view/Analysis';
import NoMatch from './view/NoMatch';
import Nav from 'component/Nav';
import {
 HashRouter,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
function App() {
  return (
 
    < HashRouter>
   <Nav/>
        <Routes>
          <Route path="/analysis/*"
            element={<Analysis />} />
          <Route path="write/*" element={ <Write />} />
          <Route path="tags/*"  element={ <Tags />} /> 
          <Route path="/" element={ <AccountBook />} />
          <Route path="*" element={<NoMatch/>} />
        </ Routes   >
        
    </ HashRouter>
  );
}

export default App;
