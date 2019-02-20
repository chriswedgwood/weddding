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
    <div className="background">
      <div className="container-fluid h-100">
      <div className="row justify-content-center h-100">
      <div className="content-bar col-5">
      
      <Header />
      <TransitionGroup className="transition-group h-100">
        <CSSTransition
          key={props.location.key}
          timeout={500}
          classNames="animate"
        >
          <Switch>
            <Redirect exact={true} from="/" to="/home" />
            <Route exact={true} path="/products" component={ProductsPage} />
            <Route exact={true} path="/home" component={HomePage} />
            <Route exact={true} path="/venue" component={VenuePage} />
            <Route path="/products/:id" component={ProductPage} />
            <Route path="/admin">
              {loggedIn ? (
                <Suspense
                  fallback={<div className="page-container">Loading...</div>}
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
      </TransitionGroup></div></div>
    </div>
    </div>
  );
};

export default RoutesWrap;
