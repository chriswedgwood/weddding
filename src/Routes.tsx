import * as React from "react";

// @ts-ignore
import { Suspense } from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from "./Header";
const AdminPage = React.lazy(() => import("./AdminPage"));
import ProductsPage from "./ProductsPage";
import ProductPage from "./ProductPage";
import LoginPage from "./LoginPage";
import NotFoundPage from "./NotFoundPage";
import HomePage from "./HomePage";
import VenuePage from "./VenuePage";
import CeremonyPage from "./CeremonyPage";
import ReceptionPage from "./ReceptionPage";
import AccomodationPage from "./AccomodationPage";
import RegistryPage from "./RegistryPage";

const RoutesWrap: React.FC = () => {
  return (
    <Router>
      <Route component={Routes} />
    </Router>
  );
};

const Routes: React.FC<RouteComponentProps> = props => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <div className="container-fluid ">
     
      <div className="row justify-content-center h-100">
      <div className="content-bar col-5">
              <Header />
              <TransitionGroup className="transition-group">
                <CSSTransition
                  key={props.location.key}
                  timeout={500}
                  classNames="animate"
                >
                  <Switch>
                    <Redirect exact={true} from="/" to="/home" />
                    <Route
                      exact={true}
                      path="/ceremony"
                      component={CeremonyPage}
                    />
                    <Route
                      exact={true}
                      path="/reception"
                      component={ReceptionPage}
                    />
                    <Route
                      exact={true}
                      path="/accomodation"
                      component={AccomodationPage}
                    />
                    <Route path="/registry" component={RegistryPage} />
                    <Route path="/admin">
                      {loggedIn ? (
                        <Suspense
                          fallback={
                            <div className="page-container">Loading...</div>
                          }
                        >
                          <AdminPage />
                        </Suspense>
                      ) : (
                        <Redirect to="/login" />
                      )}
                    </Route>
                    <Route path="/login" component={LoginPage} />
                    <Route component={NotFoundPage} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        </div>
    
  );
};

export default RoutesWrap;
