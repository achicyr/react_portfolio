import React from 'react'
import {
  Link
} from "react-router-dom";

export default function Footer(props){
  return(
    <footer className="container-fluid p-5">
      <div className="row">
        {props.data.blocks.map((item,i)=>
          <div className="col-md" key={i}>
            <h3>{item.h3}</h3>
            <ul>
              {item.items.map((items,i)=>
                <li key={i}><a target="_blank" title={items.title} href={items.href}>{items.texte}</a></li>
              )}
            </ul>
          </div>
        )}
      </div>
      <div className="row text-center border-top">copyright @2020</div>
    </footer>
  )
}
