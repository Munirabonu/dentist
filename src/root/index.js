import React from "react";
import routes from "../utils/path";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "../components/Loading/Index.jsx";
const Navbar = React.lazy(() => import("../components/Navbar"));
const Footer = React.lazy(() => import("../components/Footer/Footer"));

export default function Root() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Router>
        <Navbar />

        <Switch>
          {routes.map(({ id, path, Component }) => (
            <Route exact key={id} component={Component} path={path} />
          ))}
        </Switch>

        <Footer />
      </Router>
    </React.Suspense>
  );
}
