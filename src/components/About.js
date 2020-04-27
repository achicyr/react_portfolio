import React from "react";
import {  useLocation, useParams, useRouteMatch } from "react-router-dom";
import Jumbotron from "./blocks/Jumbotron"
import Accordion from "./blocks/Accordion"


export default class About extends React.Component {
  constructor(props){
    super(props)
  console.log(this.props);
  console.log("okok");
  }
  render(){
    return(
      <main id="about">
        <Jumbotron data={this.props.data.intro} />
        <article id="accordion" className="container card py-3 mb-3">
          <Accordion data={this.props.data.universitaire} />
          <Accordion data={this.props.data.webdev} />
          <Accordion data={this.props.data.hobbies} />
        </article>
      </main>
    )
  }
}
