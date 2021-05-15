import React from 'react';
import Container from "react-bootstrap/Container";
import { Home } from "../components/HomePage/homeCard";
import { About } from "../components/AboutUs/Aboutjournal";
import { Register } from  "../components/SignUp/Registration";
import { BrowserRouter, Route, Switch }  from "react-router-dom";

const AppRouter = () => (
    <BrowserRouter>
      
      <Container>
        <Switch>
          <Route  path='/' component = { Home } exact   />
          <Route path='/About' component = {About} />
          <Route path='/Register' component = {Register} />
        </Switch>
      </Container>
      </BrowserRouter>

);
export default AppRouter