import React from 'react'
import {
  Link
} from "react-router-dom";

let isSubdomain = __dirname == "/"
isSubdomain = isSubdomain ? "/" : "OCR_project4_react_portfolio"
export default function Header(props){
  return(
    <header id="header" className="container-fluid row navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light text-primary">
      <Link id="link_home" className="col-1 navbar-brand" to={"/"+isSubdomain}><i className="material-icons icon-image-preview">home</i></Link>
      <h1>Fullstack Web-developper Portfolio</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="col-md-3 collapse navbar-collapse" id="navbarNav">
        <menu id="menu" className="navbar-nav">
          {props.routes.map(({path, name}, i)=>
            <li className="nav-item" key={i}>
              <Link id={"link_"+name.toLowerCase()} className="nav-link" to={path}>{name}</Link>
            </li>
          )}
        </menu>
      </div>
    </header>
  )
}
