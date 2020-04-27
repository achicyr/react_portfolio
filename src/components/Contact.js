import React from "react";
import { Form, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import Map from "./blocks/Map"
//import css from "../assets/css/contact.scss";

export default class Contact extends React.Component {
  constructor(props){
    super(props)
    // this.ok = "ok"
  }
  render(){
    return (
      <main id="contact" className="container-fluid p-5">
        <section className="row">
          <article className="showContacts col-7">
          {
            this.props.data.showContacts.map((item,i)=>{
              var rs = [], a
              if(item.data instanceof Object){
                for(a in item.data)
                  rs.push(<a href={item.data[a]} target="_blank" key={a}>{a}</a>)
              }
              return(
                <ul className={"showContacts__"+item.item+" row my-3 py-3"} key={i}>
                  <li className="col-4">
                    <img src={"img/contact/"+item.src} alt={item.alt}/>
                  </li>
                  <li className="col-8">
                    {
                      item.href ?
                        <a href={item.href}>{item.data}</a>
                      :
                      item.data ?
                        rs.map(item_=>item_)
                      :
                        <Map/>
                    }
                  </li>
                </ul>
              )
            })
          }
          </article>
          <Form className="col-5 my-5">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address*</Form.Label>
              <Form.Control required type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Name and Surname*</Form.Label>
              <Form.Control required type="text" placeholder="Name Surname" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="tel" placeholder="+33 690 020 020" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput4">
              <Form.Label>Contact's purpose*</Form.Label>
              <Form.Control required type="text" placeholder="'I want to meet you'" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Content of your message*</Form.Label>
              <Form.Control required as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </section>
      </main>
    )
  }
}
