import React  from 'react'
import ReactHtmlParser from 'react-html-parser';

export default function Accordion(props){

  return (
    <div className="card">
      <div className="card-header" id="headingOne">
        <h3 className="mb-0">
          <button className={"btn btn-link "+(props.data.id == 1 ? "" : "collapsed")} data-toggle="collapse" data-target={"#collapse_"+props.data.id} aria-expanded={(props.data.id == 1 ? "true" : "false")} aria-controls={"collapse_"+props.data.id}>
            {props.data.h3}
          </button>
        </h3>
        <img src={props.src} alt={props.data.alt}/>
      </div>

      <div id={"collapse_"+props.data.id} className={"collapse container "+(props.data.id == 1 ? "show" : "")} aria-labelledby={"heading_"+props.data.id} data-parent="#accordion">
        <div className="card-body">
          {props.data.p}
        </div>
        {props.data.items.map((item,i)=>{
          if(item.href || item.src){
          return (
            <ul className="row" key={i}>
              <li className="col-md-1" style={{background: "url(img/about/"+item.src+") center center / contain no-repeat"}}></li>
              <li className="col-md-4"><h4><a target="_blank" href={item.href}>{item.h4}</a></h4></li>
              <li className="col-md-6">{item.p}</li>
              <li className="col-md-1">
                <ul>
                {item._ ? item._.map((subitem, j)=>{return(
                  <li>{ReactHtmlParser(subitem)}</li>
                )}) : ""}
                </ul>
              </li>
            </ul>
          )}else{
            return(
              <section className={item.class}>
                <h4>{item.h4}</h4>
                <p>{ReactHtmlParser(item.p)}</p>
              </section>
            )
          }
        })}
      </div>
    </div>
  )
}
