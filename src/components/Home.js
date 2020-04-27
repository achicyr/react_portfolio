import React from "react";
//import css from "../assets/css/home.scss";
import Carousel from "./blocks/Carousel"
import Article from "./blocks/Article"

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.ok = "ok"
  }
  render(){
    return(
      <main id="home" className="">
        <h2>Welcome to <span>Archist</span> webdev's porfolio !</h2>
        <Carousel data={this.props.data.diapo}/>
        <Article data={this.props.data.article}/>
      </main>
    )
  }
}
