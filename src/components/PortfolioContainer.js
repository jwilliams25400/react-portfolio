import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./Footer";

function PortfolioContainer() {
  return (
    <Router>
      <>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route exact path="/AboutMe" component={AboutMe}>
            <AboutMe />
          </Route>
          <Route exact path="/Contact"component={Contact}>
            <Contact />
          </Route>
          <Route exact path="/Portfolio" component={Portfolio}>
            <Portfolio />
          </Route>
        </Switch>

        <Footer />
      </>
    </Router>
  );
}

export default PortfolioContainer;