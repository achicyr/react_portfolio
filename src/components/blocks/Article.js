import React  from 'react'
import ReactHtmlParser from 'react-html-parser';

export default function Article(props){

  return (
    <article className="card mb-3">
      <img className="card-img-top" {...props.data.img} />
      <section className="card-body">
        <h5 className="card-title">{props.data.title}</h5>
        {props.data.p.map((item,i)=>
          <p className="card-text" key={i}>{ReactHtmlParser(item)}</p>
        )}
      </section>
    </article>
  )
}
