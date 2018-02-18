import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logout from './Logout';

class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	user: {}
        };
    }
    logoutUser(){
        fetch('/api/logout', {
            method: 'DELETE',
            credentials: 'same-origin'
        }).then((response) => {
        	if(response.status == 204){
        		this.props.history.push('/');
        	}
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
                if(results.message !== "signed-in"){
                    this.props.history.push("/login")
                } else {
                	this.setState({
                		user: results.user
                	})
                }
            }
        });
	}
  	render() {
      console.log(this.state) // shows the user logged in
	    return (
	        <div>
	       		<nav className="navbar navbar-light bg-faded">
              <div className="nav-wrapper">
                <h1 className="brand-logo">AcuWare<sup>&reg;</sup></h1>
                  <ul className="right hide-on-med-and-down">
					          <li><Link className="nav-links" to="/">Home</Link></li>
                    <li><Logout /></li>
                  </ul>
              </div>
				    </nav>
				  <div className="text-right">
		        	<h4 className="homepage-sign-in-confirm">Welcome {this.state.user.name}!</h4>
              {/* {this is where the points map will go with modal set up} */}
		        </div>
	        </div>
	    );
  	}
};
export default withRouter(UserHome)
