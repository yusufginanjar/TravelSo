import React from 'react'
import { useState } from 'react'
import { Routes, Route} from 'react-router-dom';

import Package from 'parts/Package'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarker} from '@fortawesome/free-solid-svg-icons'
import {faCalendarCheck} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

export default function SearchBox(props) {
    // const tabContent = () => {
    //     if (window.location.hash === '#nav-contact')
    //     return <Package/>
    //     else return <h2>Other</h2>
    // }

    return (
        <div className="search">
        <div className="container bg-white">
          <div className="row pl-4">
            <div className="col-lg-10 offset-lg-1 pl-4">
              <nav>
                <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
                  <a className="nav-item nav-link active" id="nav-tour-tab" data-toggle="tab" href="#nav-tour" role="tab" aria-controls="nav-tour" aria-selected="true">Tour Package</a>
                  <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Hotel</a>
                  <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Flight</a>
                </div>
              </nav>
                <div className="tab-content" id="nav-tabContent">
                   {/* {tabContent()} */}
                    {/* {window.location.hash === '#nav-tour' && (
                      <div><h2>Cek1</h2></div>
                    )}
                    {window.location.hash === '#nav-profile' && (
                      <div><h2>Cek2</h2></div>
                    )}
                    {window.location.hash === '#nav-contact' && (
                      <div><h2>Cek3</h2></div>
                    )} */}

                    <App1 />

                   <p>masuk</p>                   
                </div>
                
              </div>
            </div>
          </div>
          <div className="search-form my-4 py-4">
              
          </div>
        </div>
    )
}


class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: false,
    };

    this.LoginOnClick = () => {
      this.setState({ signIn: true });
    };
  }

  render() {
    if (this.state.signIn) {
      return (
        <div className="container">
          {/* <SignIn /> */}
          <h4>hehe</h4>
        </div>
      );
    }

    return (
      <div className="container">
        <button onClick={this.LoginOnClick}>Login</button>
        {/* <Login /> */}
        <h4>haha</h4>
      </div>
    );
  }
}