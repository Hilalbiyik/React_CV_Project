import React, { Component } from "react";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Educations from "./components/Education";
import Portfolios from "./components/Portfolios";

export default class Home extends Component {
  render() {
    return (
      <section>
        <div className="row sameHeight">
          <div className="col s12 m12 l4 light-blue darken-4 sameHeight_child">
            <Profile />
            <Contact />
            <Skills />
          </div>
          <div className="col s12 m12 l8 white sameHeight_child">
            <About />
            <Educations />
            <Experiences />
            <Portfolios />
          </div>
        </div>
      </section>
    );
  }
}
