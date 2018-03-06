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
				    <div className="text-center">
		        	<h1>Welcome to AcuWare!</h1>
		        	<h2>Please Sign up or Sign in</h2>
		        </div>
            <div className="slider">
              <ul className="slides">
                <li>
                  <img src="https://lorempixel.com/580/250/nature/1"/>
                  <div className="caption center-align">
                    <h3>This is our big Tagline!</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                  </div>
                </li>
                <li>
                  <img src="https://lorempixel.com/580/250/nature/2"/>
                  <div className="caption left-align">
                    <h3>Left Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                  </div>
                </li>
                <li>
                  <img src="https://lorempixel.com/580/250/nature/3"/>
                  <div className="caption right-align">
                    <h3>Right Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                  </div>
                </li>
                <li>
                  <img src="https://lorempixel.com/580/250/nature/4"/>
                  <div className="caption center-align">
                    <h3>This is our big Tagline!</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                  </div>
                </li>
              </ul>
            </div>
	        </div>
	    );
  	}
};

export default withRouter(Home)
