import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

import Logout from './Logout';

class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	user: {},
          selected: undefined
        };
    }

    onSelectChange(e) {
      this.setState({
        selected: e.target.value
      })
    }
    componentDidMount() {
      var element = ReactDOM.findDOMNode(this.refs.dropdown)

      $(element).ready(function() {
        $('select').material_select();
      });
      $(ReactDOM.findDOMNode(this.refs.pointSelect)).on('change', this.onSelectChange.bind(this));
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
  				  <div>
  		        	<h4 className="homepage-sign-in-confirm">Welcome {this.state.user.name}!</h4>
                {/* {this is where the points map will go with modal set up} */}
  		      </div>
            <br></br>
            <div style={{width: '25%'}}>
              <label>LV Meridian</label><br></br>
  					  <select ref="pointSelect">
    					  <option defaultValue="" disabled selected>Choose Your Point</option>
    					  <option value="LV 1">LV 1</option>
    					  <option value="LV 2">LV 2</option>
    					  <option value="LV 3">LV 3</option>
    						<option value="LV 4">LV 4</option>
    						<option value="LV 5">LV 5</option>
    						<option value="LV 6">LV 6</option>
    						<option value="LV 7">LV 7</option>
    						<option value="LV 8">LV 8</option>
    						<option value="LV 9">LV 9</option>
    						<option value="LV 10">LV 10</option>
    						<option value="LV 11">LV 11</option>
    						<option value="LV 12">LV 12</option>
                <option value="LV 13">LV 13</option>
                <option value="LV 14">LV 14</option>
  					  </select>
              <br></br>
  				    <input className="btn btn-danger" type="submit"/>
            </div>
          </div>
	    );
  	}
};
export default withRouter(UserHome)
