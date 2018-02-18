import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    logoutUser(){
        fetch('/api/logout', {
            method: 'DELETE',
            credentials: 'same-origin'
        }).then((response) => {
        	if(response.status == 204){
        		this.props.history.push('/login');
        	}
        });
    }
  	render() {
	    return (
			<ul className="right">
				<a onClick={this.logoutUser.bind(this)}>Logout</a>
			</ul>
	    );
  	}
};

export default withRouter(Logout)
