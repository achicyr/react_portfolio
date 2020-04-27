import React from 'react'

export default function Carousel(props){
  return(
    <div id="carouselExampleIndicators" className="homeCarousel carousel slide container-fluid" data-ride="carousel">
      <ol className="carousel-indicators homeCarousel__indicators">
        {props.data.map((item, i)=>{
          return (
            <li data-target="#carouselExampleIndicators" data-slide-to={i} key={i} className={i===0?"active":""}></li>
          )
        })}
      </ol>
      <div className="homeCarousel__inner carousel-inner">
        {props.data.map((item, i)=>{
          return (
            <figure key={i} className={"homeCarousel__figure carousel-item " + (i==0?"active":"")}>
              <img height="400" src={item.src} className={item.class} alt={item.alt}/>
              <figcaption>
                <h3 className="text-uppercase">{item.h3}</h3>
                <div>{item.fig}</div>
                <div>{item.fig_}</div>
              </figcaption>
            </figure>
          )
        })}
      </div>
      <a className="homeCarousel__ctrl carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="homeCarousel__ctrl carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}
