import React from 'react';
import './App.scss';
import AccountBook from './view/AccountBook';
import Tags from './view/Tags';
import Write from './view/Write';
import Analysis from './view/Analysis';
import NoMatch from './view/NoMatch';
import Nav from 'component/Nav';
import styled from 'styled-components';
import {
 HashRouter,
  Routes,
  Route,
} from "react-router-dom";

const Wrapper = styled.div`
background:#f6f6f6;
`;
function App() {
  return (
 
    < HashRouter>
     < Wrapper> 
        <Nav />
      
        <Routes>
          <Route path="/analysis/*"
            element={<Analysis />} />
          <Route path="write/*" element={ <Write />} />
          <Route path="tags/*"  element={ <Tags />} /> 
          <Route path="/" element={ <AccountBook />} />
          <Route path="*" element={<NoMatch/>} />
        </ Routes   >
          </ Wrapper>
    </ HashRouter>
  );
}

export default App;
