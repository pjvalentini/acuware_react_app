import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logout from './Logout';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	signedIn: false
        };
    }

  componentDidMount() {
	$(document).ready(function(){
      $('.slider').slider();
    });
}

	componentWillMount(){
        fetch('/api/signed-in', {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'same-origin'
        }).then((response) => response.json())
        .then((results) => {
            if(results.message){
                if(results.message === "signed-in"){
                    this.setState({
                    	signedIn: true
                    })
                }
            }
        });
	}
  	render() {
  		const renderLinks = () => {
  			if(this.state.signedIn){
  				return (
  		      <nav className="navbar navbar-light bg-faded">
              <div className="nav-wrapper">
                <a className="brand-logo"><i className="material-icons">directions_walk</i>AcuWare<sup>&reg;</sup></a>
                  <ul className="right hide-on-med-and-down">
      						  <li><Link style={{textDecoration: 'none'}} className="nav-links" to="/home">Profile</Link></li>
                    <li><Logout /></li>
                  </ul>
              </div>
  					</nav>
  				)
  			} else {
  				return (
  		      <nav className="navbar navbar-light bg-faded">
              <div className="nav-wrapper">
                <a className="brand-logo"><i className="material-icons">directions_walk</i>AcuWare<sup>&reg;</sup></a>
                  <ul className="right hide-on-med-and-down">
        						<li><Link style={{textDecoration: 'none'}} className="nav-links" to="/sign-up">Sign Up</Link></li>
        						<li><Link style={{textDecoration: 'none'}} className="nav-links" to="/login">Login</Link></li>
                  </ul>
              </div>
  					</nav>
  				)
  			}
  		}
	    return (
	        <div>
	        	{renderLinks()}
            <div className="slider">
              <ul className="slides">
                <li>
                  <img src="/images/lotus.png" style={{height: '400px'}}/>
                  <div className="caption center-align">
                    <h3>Welcome to AcuWare!</h3>
                    <h5 className="light grey-text text-lighten-3">Your Acupuncture Study Resource.</h5>
                  </div>
                </li>
                <li>
                  <img src="/images/needles-dummy.jpg"/>
                  <div className="caption left-align">
                    <h3>Sign Up Today!</h3>
                    <h5 className="light grey-text text-lighten-3">Start Your Learning Experience.</h5>
                  </div>
                </li>
                <li>
                  <img src="/images/needles.png"/>
                  <div className="caption right-align">
                    <h3>Create Index Cards More Effenciently.</h3>
                    <h5 className="light grey-text text-lighten-3">Our data is just what you need.</h5>
                  </div>
                </li>
                <li>
                  <img src="/images/anciettcmtext.jpg"/>
                  <div className="caption center-align">
                    <h3>Always Free!</h3>
                    <h5 className="light grey-text text-lighten-3">All you have to is sign up ans start learning.</h5>
                  </div>
                </li>
              </ul>
            </div>
	        </div>
	    );
  	}
};

export default withRouter(Home)
