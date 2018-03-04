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
        $('span').removeClass('caret')
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
              <div className="points-data-div" style={{width: '75%'}}>
                <div>
                  <p key={index} className="points-data-div-title"><span className="channel-title">LV Meridian Point:</span><span className="channel-number"> {selectedPoint.meridian}</span></p>
                </div>
                <div className= "tri-div-wrapper" style={{display: 'inline-flex'}}>
                  <div>
                    <p key={index} className="points-data-div-english-name"><span className="english-name-title">English Name:</span><br></br><span className="english-name"> {selectedPoint.english_name}</span></p>
                  </div>
                  <div>
                    <p key={index} className="points-data-div-pinyin-name"><span className="pinyin-name-title">Pinyin Name:</span><br></br><span className="pinyin-name"> {selectedPoint.pinyin_name}</span></p>
                  </div>
                  <div>
                    <p key={index} className="points-data-div-chinese_character"><span className="chinese_character-title">Chinese Character:</span><br></br><span className="chinese_character"> {selectedPoint.chinese_character}</span></p>
                  </div>
                </div>
                <div>
                  <p key={index} className="points-data-div-location"><span className="location-title">Location:</span><span className="location"> {selectedPoint.location}</span></p>
                </div>
                <div className="points-data-div-clinical-usage">
                  <p key={index}><span className="clinical-usage-title">Clinical Usage:</span></p>
                  <ol>
                  {
                    selectedPoint.clinical_uses.map((clinicalUsage, index) => {
                        return(
                          <div>
                              <span className="clinical-usage"><li key={clinicalUsage}>{clinicalUsage}</li></span>
                          </div>
                        )
                    })
                  }
                  </ol>
                </div>
                <div className="points-data-div-point-associations">
                  <p key={index}><span className="point-associations-title">Point Associations:</span></p>
                  <ol>
                  {
                    selectedPoint.point_associations.map((pointAssociation, index) => {
                      return(
                        <div>
                            <span className="point-associations"><li key={pointAssociation}>{pointAssociation}</li></span>
                        </div>
                      )
                    })
                  }
                </ol>
                </div>
              </div>
            )
          })
        }
      }
	    return (
	        <div>
	       		<nav className="navbar navbar-light bg-faded">
              <div className="nav-wrapper">
                <a className="brand-logo"><i class="material-icons">directions_walk</i>AcuWare<sup>&reg;</sup></a>
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
            <div className="diagram-wrapper" style={{display: 'inline-flex'}}>
              <div className="diagram-div" style={{width: '25%'}}>
                <div>
                  <h2 className="diagram-title">LV Meridian</h2>
                </div>
                <div>
                  <img className="materialboxed" data-caption="LV Meridian Diagram" src="/images/lv-channel-new.jpg"/>
                </div>
              </div>
              <div style={{width: '75%'}} className="liver-channel-info">
                <div className="liver-div">
                  <span className="liver-page-title">LIVER Meridian:</span><span className="liver-channel-text"> The liver is called the 'General' or 'Chief of Staff' and is responsible for filtering, detoxifying, nourishing, replenishing, and storing blood.  The liver stores large amounts of sugar in the form of glycogen, which it releases into the blood stream as glucose whenever the body requires extra infusions of metabolic energy.  The liver receives all amino acids extracted from food by the small intestine and recombines them to synthesize the various forms of protein required for growth and repair of bodily tissues. The liver controls the peripheral nervous system, which regulates muscular activity and tension.  The inability to relax is often caused by liver dysfunction or imbalance in Wood energy.  Liver energy also controls ligaments and tendons, which together with muscles regulate motor activity and determine physical coordination.  Liver function is reflected externally in the condition of finger- and toenails and by the eyes and vision.  Blurry vision is often a result of liver malfunction rather than an eye problem, and even Western medicine recognizes the symptomatic yellow eyes of liver jaundice. Through its association with Wood energy, the liver governs growth and development, drive and desires, ambitions and creativity.  Obstruction of liver energy can cause intense feelings of frustration, rage, and anger, and these emotions in turn further disrupt liver energy and suppress liver function, in a vicious self-destructive cycle.</span>
                </div>
              </div>
              {appendPoints()}
            </div>
            <br></br>
            <div style={{width: '100%'}} className="center">
              <h3 className="dropdown-tag">LV Meridian - Points Selector</h3><br></br>
  					  <select ref="pointSelect">
    					  <option defaultValue="" disabled selected className="choose-default">Choose Your Point From The Dropdown Menu</option>
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
          </div>
	    );
  	}
};
export default withRouter(UserHome)
