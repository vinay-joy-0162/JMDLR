import React from "react";
import { Home } from "../components/HomePage/homeCard";
import { About } from "../components/AboutUs/Aboutjournal";
import { journal } from "../components/Journals/journalpaper";
import PDFViewer from "../components/Journals/PDFViewer.js";
import { editorialboard } from "../components/Editorialboard/EditorialBoard";
import { Guideline } from "../components/Guidelines/GuideLines";
import { Index } from "../components/Indexing/index";
import { submission } from "../components/Submission/Submission";
import { Authorization } from "../components/SignUp/Accountauthorization";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "../components/Admin/routes/PublicRoute";
import PrivateRoute from "../components/Admin/routes/PrivateRoute";

// admin
import Login from "../components/Admin/auth/Login";
import Archives from "../components/Admin/Archives";
import Issue from "../components/Admin/Issue";
import Volume from "../components/Admin/Volume";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute path="/" component={Home} exact />
      <PublicRoute path="/About" component={About} />
      <PublicRoute path="/journal" component={journal} exact={true} />
      <PublicRoute path="/journal/:file" component={PDFViewer} exact={true} />
      <PublicRoute
        path="/editorialboard"
        component={editorialboard}
        exact={true}
      />
      <PublicRoute path="/Guideline" component={Guideline} />
      <PublicRoute path="/Index" component={Index} exact={true} />
      <PublicRoute path="/submission" component={submission} exact={true} />
      <PublicRoute
        path="/Authorization"
        component={Authorization}
        exact={true}
      />
      <PublicRoute path="/admin-login" component={Login} exact={true} />
      <PrivateRoute path="/admin/volume" component={Volume} exact={true} />
      <PrivateRoute path="/admin/archives" component={Archives} exact={true} />

      <PrivateRoute path="/admin/issue" component={Issue} exact={true} />

      <PrivateRoute path="/admin/archives" component={Archives} exact={true} />

      <PublicRoute path="/admin/volume/issue" component={Issue} exact={true} />
    </Switch>
  </BrowserRouter>
);
export default AppRouter;
