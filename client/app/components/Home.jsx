import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logout from './Logout';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: {},
        	signedIn: false
        };
    }

// breaking the custom height of the slideshow div and indicators.
  componentDidMount() {
	$(document).ready(function(){
      $('.slider').slider();
      $('.slides').css('height', '650px');
      $('.slider').css('height', '690px')
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
                      user: results.user,
                    	signedIn: true
                    })
                }
            }
        });
	}
  	render() {
      console.log(this.state)
  		const renderLinks = () => {
  			if(this.state.signedIn){
  				return (
  		      <nav className="navbar navbar-light bg-faded">
              <div className="nav-wrapper">
                <a className="brand-logo"><i className="material-icons">directions_walk</i>AcuWare<sup>&reg;</sup></a>
                  <ul className="right hide-on-med-and-down">
                    <li><h4 className="homepage-sign-in-confirm">Welcome {this.state.user.name}!</h4></li>
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
        						<li><Link style={{textDecoration: 'none'}} className="nav-links" to="/sign-up">SignUp</Link></li>
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
            <div className="slider" style={{height: "840px", touchAction: "pan-y", WebkitUserDrag: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>
              <ul className="slides" style={{height: "800px", touchAction: "pan-y", WebkitUserDrag: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>
                <li>
                  <img src="/images/anciettcmtext.jpg"/>
                  <div className="caption center-align">
                    <h3 className="main-tag-h3-slideOne">Welcome to AcuWare!</h3>
                    <h5 className="second-tag-slideOne"></h5>
                  </div>
                </li>
                <li>
                  <img src="/images/needles-dummy.jpg"/>
                  <div className="caption left-align">
                    <h3 className="main-tag-h3-slideTwo">Sign Up Today!</h3>
                    <h5 className="second-tag-slideTwo">Start Your Learning Experience.</h5>
                  </div>
                </li>
                <li>
                  <img src="/images/needles.png"/>
                  <div className="caption right-align">
                    <h3 className="main-tag-h3-slideThree">Create Index Cards More Efficiently.</h3>
                    <h5 className="second-tag-slideThree">Our data is just what you need.</h5>
                  </div>
                </li>
                <li>
                  <img src="/images/greentree.jpg"/>
                  <div className="caption center-align">
                    <h3 className="main-tag-h3-slideFour">Always Free!</h3>
                    <h5 className="second-tag-slideFour" >All you have to is sign up.</h5>
                  </div>
                </li>
              </ul>
            </div>
	        </div>
	    );
  	}
};

export default withRouter(Home)
