import React from 'react'
import ReactHtmlParser from 'react-html-parser';

export default class Jumbotron extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      jumbotron_button_is_ToggleOn: true,
      isToggleOn: true
    }
  }

  buttonToggler = ()=>{
    this.setState(s=>({
      jumbotron_button_is_ToggleOn: !s.jumbotron_button_is_ToggleOn
    }))
  }

  render(){
    return (
      <section className="jumbotron">
        <h2 className="display-4">{this.props.data.h2}</h2>
        {/*
          <img src={this.props.src} alt={this.props.data.alt}/>
        */}
        <hr className="my-4"/>
        <p className="lead">
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseIntro" aria-expanded="false" aria-controls="collapseIntro" onClick={this.buttonToggler}>
            <span style={{color: this.state.jumbotron_button_is_ToggleOn ? "greenyellow" : "red", fontWeight: "bold"}}>{(this.state.jumbotron_button_is_ToggleOn ? "Show " : "Hide " )}</span> {this.props.data.button}
          </button>
        </p>
        <div className="collapse lead" id="collapseIntro">
          <p className="card-body">
            {ReactHtmlParser(this.props.data.p)}
          </p>
        </div>
      </section>
    )
  }
}
