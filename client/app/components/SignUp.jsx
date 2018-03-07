import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

// creating a custom height for the slide show.
    componentDidMount() {
    $(document).ready(function(){
        $('.slider').slider();
        $('.slides').css('height', '650px');
        $('.slider').css('height', '690px')
      });
  }

    signUpForm(e){
    	e.preventDefault();
    	var newUser = {
    		name: this.refs.name.value,
    		username: this.refs.username.value,
    		password: this.refs.password.value
    	}
        fetch('/api/sign-up', {
            method: 'post',
            body: JSON.stringify(newUser),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'same-origin'
        }).then((response) => response.json())
        .then((results) => {
        	this.props.history.push("/login");
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
                if(results.message !== "no req.user"){
                    this.props.history.push("/home")
                }
            }
        });
	}
  	render() {
	    return (
	        <div>
	       		<nav className="navbar navbar-light bg-faded">
              <div className="nav-wrapper">
                <a className="brand-logo"><i className="material-icons">directions_walk</i>AcuWare<sup>&reg;</sup></a>
                 <ul className="right hide-on-med-and-down">
                   <li><Link style={{textDecoration: 'none'}} className="nav-links" to="/">Home</Link></li>
     					     <li><Link style={{textDecoration: 'none'}} className="nav-links" to="/login">Login</Link></li>
                 </ul>
              </div>
				    </nav>
            <div className="slider">
              <ul className="slides">
                <li>
                  <img src="/images/lotus-two.jpg" />
                </li>
                <li>
                  <img src="/images/needles-dummy.jpg"/>
                </li>
                <li>
                  <img src="/images/needles.png"/>
                </li>
                <li>
                  <img src="/images/anciettcmtext.jpg"/>
                </li>
              </ul>
            </div>
				  <div className="text-center">
					<div className="well center-block" id="sign-in-div">
            <h2 className="signUp-tag">Please sign up today!</h2>
						<form id="sign-in-form" onSubmit={this.signUpForm.bind(this)}>
							<label>Name</label><br></br>
							<input type="text" ref="name" /><br></br>
							<label>Username</label><br></br>
							<input type="text" ref="username" /><br></br>
							<label>Password</label><br></br>
							<input type="password" ref="password" /><br></br>
							<input className="btn btn-danger" type="submit" />
						</form>
					</div>
				</div>
	     </div>
	    );
  	}
};
export default withRouter(SignUp)
