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
                <h1 className="brand-logo">AcuWare<sup>&reg;</sup></h1>
                  <ul className="right hide-on-med-and-down">
      						  <li><Link className="nav-links" to="/home">Profile</Link></li>
                    <li><Logout /></li>
                  </ul>
              </div>
  					</nav>
  				)
  			} else {
  				return (
  		      <nav className="navbar navbar-light bg-faded">
              <div className="nav-wrapper">
                <h1 className="brand-logo">AcuWare<sup>&reg;</sup></h1>
                  <ul className="right hide-on-med-and-down">
        						<li><Link className="nav-links" to="/sign-up">Sign Up</Link></li>
        						<li><Link className="nav-links" to="/login">Login</Link></li>
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
		        	<h1>Welcome to AcuWare</h1>
		        	<h2>Please Sign up or Sign in</h2>
		        </div>
	        </div>
	    );
  	}
};

export default withRouter(Home)
