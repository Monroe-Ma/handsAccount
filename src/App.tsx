import React from 'react';
import './App.scss';
import AccountBook from './view/AccountBook';
import Tags from './view/Tags';
import Write from './view/Write';
import Analysis from './view/Analysis';
import NoMatch from './view/NoMatch';
import styled from 'styled-components';
import {
 HashRouter as Router,
  Switch,
  Route,
   Redirect
} from "react-router-dom";

const Wrapper = styled.div`
color: #333;
`;
function App() {
  return (
 <Wrapper>
    <Router>
      <Switch>
         <Route exact path="/">
            <AccountBook />
         </Route>
         <Route exact path="/accountbook">
            <AccountBook />
         </Route>
         <Route exact path="/write">
            <Write />
         </Route>
         <Route exact path="/tags">
            <Tags />
         </Route>
         <Route  exact path="/analysis">
            <Analysis />
         </Route>
         <Redirect exact from='/' to='/accountbook' />
         <Route exact path="*">
         <NoMatch/>
         </Route> 
      </Switch>
   </Router>
</Wrapper>
  );
}

export default App;
