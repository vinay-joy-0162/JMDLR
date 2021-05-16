import React from 'react';
import { Home } from "../components/HomePage/homeCard";
import { About } from "../components/AboutUs/Aboutjournal";
import { journal } from "../components/Journals/journalpaper";
import { editorialboard } from "../components/Editorialboard/EditorialBoard";
import { submission } from "../components/Submission/Submission";
import { Register } from  "../components/SignUp/Registration";
import { BrowserRouter, Route, Switch }  from "react-router-dom";

const AppRouter = () => (
    <BrowserRouter>
      
      
        <Switch>
          <Route  path='/' component = { Home } exact   />
          <Route path='/About' component = {About} />
          <Route path='/journal' component = {journal} />
          <Route path='/editorialboard' component = {editorialboard} />
          <Route path='/submission' component = {submission} />
          <Route path='/Register' component = {Register} />
        </Switch>
      
      </BrowserRouter>

);
export default AppRouter