import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="AboutMe" exact>
          <AboutMe />
        </Route>
        <Route path="Contact" exact></Route>
      </Switch>
      
      <Footer />
    </>
  );
}

export default App;
