import React from 'react';
import { Home } from "../components/HomePage/homeCard";
import { About } from "../components/AboutUs/Aboutjournal";
import { journal } from "../components/Journals/journalpaper";
import PDFViewer from "../components/Journals/PDFViewer.js";
import { editorialboard } from "../components/Editorialboard/EditorialBoard";
import { Guideline } from "../components/Guidelines/GuideLines";
import { submission } from "../components/Submission/Submission";
import { Authorization } from  "../components/SignUp/Accountauthorization";
import { BrowserRouter, Route, Switch }  from "react-router-dom";

const AppRouter = () => (
    <BrowserRouter>
      
      
        <Switch>
          <Route  path='/' component = { Home } exact   />
          <Route path='/About' component = {About} />
          <Route path='/journal' component = {journal} exact={true} />
          <Route path='/journal/:file' component = {PDFViewer} />
          <Route path='/editorialboard' component = {editorialboard} exact={true} />
          <Route path='/Guideline' component = {Guideline} />
          <Route path='/submission' component = {submission} />
          <Route path='/Authorization' component = {Authorization} />
        </Switch>
      
      </BrowserRouter>

);
export default AppRouter