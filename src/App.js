import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import json from "./assets/json/data.json";
import js from "./assets/js/_.js";
import routes from "./components/routes";
import css from "./assets/css/index.scss"


export default function App(props) {
  // console.log(props);
  return (
    <Router>
      <Header routes={routes}/>

      <Nav />
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        {/*
          <Switch>
          {routes.map(({path, name, Component}, i) =>
            <Route key={i}>
              <Component exact path={path}/>
            </Route>
            <Route exact path={path} key={i} render={Component} />
          )}
          </Switch>
        */}
      <Switch>
        {/*
          <Route path="/skills">
          <Skills />
        </Route>
        */}
        {
          routes.map((item,i)=>
              <Route path={item.path} key={i}>
                {
                  item.name == "Contact" ? <Contact data={json.contact} /> : item.name == "About" ? <About data={json.about} /> : ""
                }
              </Route>
          )
        }


        <Route path="/OCR_project4_react_portfolio/">
          <Home data={json.home}/>
        </Route>
        <Route path="/">
          <Home data={json.home}/>
        </Route>
      </Switch>

      <Footer data={json.footer}/>
    </Router>

  );
}
