import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

import Logout from './Logout';

class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	user: {},
          selected: undefined,
          points: []
        };
    }

// Dropdown Code
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

// Delete for the logout
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

// Getting my points data
    fetch('/points', {
      headers: {
         'content-type': 'application/json',
         'accept': 'application/json'
     },
     credentials: 'same-origin'
    }).then((response) => response.json())
    .then((results) => {
    	this.setState({
    		points: results
    	})
    });
	}
  	render() {
      console.log(this.state) // shows the user logged in and points: results
      const appendPoints = () => {
        if (this.state.selected) {
          const pointSelected = this.state.points.filter((point) => point.meridian === this.state.selected);
          return pointSelected.map((selectedPoint, index) => {
            return (
              <div className="points-data-div">
                <p key={index}>LV Meridian Point: {selectedPoint.meridian}</p>
                <p key={index}>English Name: {selectedPoint.english_name}</p>
                <p key={index}>Pinyin Name: {selectedPoint.pinyin_name}</p>
                <p key={index}>Chinese Character: {selectedPoint.chinese_character}</p>
                <p key={index}>Location: {selectedPoint.location}</p>
                <p>Clinical Usage:</p>
                <ol>
                {
                  selectedPoint.clinical_uses.map((clinicalUsage, index) => {
                      return(
                        <div>
                            <li key={clinicalUsage}>{clinicalUsage}</li>
                        </div>
                      )
                  })
                }
                </ol>
                <p>Point Associations:</p>
                <ol>
                {
                  selectedPoint.point_associations.map((pointAssociation, index) => {
                    return(
                      <div>
                          <li key={pointAssociation}>{pointAssociation}</li>
                      </div>
                    )
                  })
                }
              </ol>
              </div>
            )
          })
        }
      }
	    return (
	        <div>
	       		<nav className="navbar navbar-light bg-faded">
              <div className="nav-wrapper">
                <h1 className="brand-logo">AcuWare<sup>&reg;</sup></h1>
                  <ul className="right hide-on-med-and-down">
					          <li><Link className="nav-links" style={{textDecoration: 'none'}} to="/">Home</Link></li>
                    <li><Logout /></li>
                  </ul>
              </div>
				    </nav>
  				  <div>
  		        	<h4 className="homepage-sign-in-confirm">Welcome {this.state.user.name}!</h4>
                {/* {this is where the points map will go with modal set up} */}
  		      </div>
            <br></br>
            <div className="diagram-div">
              <img src="/images/lv-meridian.jpg"></img>
            </div>
            <div style={{width: '50%'}} className="dropdown-div">
              <label className="dropdown-tag">LV Meridian</label><br></br>
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
            </div>
            {appendPoints()}
          </div>
	    );
  	}
};
export default withRouter(UserHome)
