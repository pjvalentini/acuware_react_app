import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
                <a className="brand-logo"><i class="material-icons">directions_walk</i>AcuWare<sup>&reg;</sup></a>
                 <ul className="right hide-on-med-and-down">
                   <li><Link style={{textDecoration: 'none'}} className="nav-links" to="/">Home</Link></li>
     					     <li><Link style={{textDecoration: 'none'}} className="nav-links" to="/login">Login</Link></li>
                 </ul>
              </div>
				    </nav>
				  <div className="text-center">
		        	<h1>Welcome to AcuWare</h1>
		        	<h2>Not a member? Please Sign Up</h2>
					<div className="well center-block" id="sign-in-div">
						<form id="sign-in-form" onSubmit={this.signUpForm.bind(this)}>
							<label>Name</label><br></br>
							<input type="text" ref="name" /><br></br>
							<label>Username</label><br></br>
							<input type="text" ref="username" /><br></br>
							<label>Password</label><br></br>
							<input type="password" ref="password" /><br></br>
							<input className="btn btn-danger"  type="submit" />
						</form>
					</div>
				</div>
	     </div>
	    );
  	}
};
export default withRouter(SignUp)
