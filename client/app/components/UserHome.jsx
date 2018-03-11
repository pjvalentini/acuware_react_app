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

// Removing a materialize class due to a conflict with a bootstrap element
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
              <div className="points-data-div" style={{width: '50%'}}>
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
                <a className="brand-logo"><i className="material-icons">directions_walk</i>AcuWare<sup>&reg;</sup></a>
                  <ul className="right hide-on-med-and-down">
                    <li><h4 className="homepage-sign-in-confirm">Welcome {this.state.user.name}!</h4></li>
					          <li><Link className="nav-links" style={{textDecoration: 'none'}} to="/">Home</Link></li>
                    <li><Logout /></li>
                  </ul>
              </div>
				    </nav>
            <div style={{width: '100%'}} className="center">
              <h3 className="dropdown-tag">LV Meridian - Points Selector</h3><br></br>
  					  <select ref="pointSelect">
    					  <option defaultValue="" disabled selected className="choose-default">Choose Your Point From The Dropdown Menu</option>
    					  <option value="LV 1">Point - LV 1 - (Liver 1) - Large Pile - Da Dun - 大敦</option>
    					  <option value="LV 2">Point - LV 2 - (Liver 2) - Moving Between - Xing Jian - 行間</option>
    					  <option value="LV 3">Point - LV 3 - (Liver 3) - Great Surge - Tai Chong - 太沖</option>
    						<option value="LV 4">Point - LV 4 - (Liver 4) - Mound Center - Zhong Feng - 中封</option>
    						<option value="LV 5">Point - LV 5 - (Liver 5) - Wormwood Canal - Li Gou - 蠡溝</option>
    						<option value="LV 6">Point - LV 6 - (Liver 6) - Central Metropolis - Zhong Du - 中都</option>
    						<option value="LV 7">Point - LV 7 - (Liver 7) - Knee Joint - Xi Guan - 膝關</option>
    						<option value="LV 8">Point - LV 8 - (Liver 8) - Spring At The Bend - Qu Quan - 曲泉</option>
    						<option value="LV 9">Point - LV 9 - (Liver 9) - Yin Bladder - Yin Bao - 陰包</option>
    						<option value="LV 10">Point - LV 10 - (Liver 10) - Foot Five Li - Zu Wu Li - 足五里</option>
    						<option value="LV 11">Point - LV 11 - (Liver 11) - Yin Corner - Yin Lian - 陰廉</option>
    						<option value="LV 12">Point - LV 12 - (Liver 12) - Urgent Pulse - Ji Mai - 急脈</option>
                <option value="LV 13">Point - LV 13 - (Liver 13) - Camphorwood Gate - Zhang Men - 章門</option>
                <option value="LV 14">Point - LV 14 - (Liver 14) - Cycle Gate - Qi Men - 期門</option>
  					  </select>
              <br></br>
            </div>
            <div className="diagram-wrapper" style={{display: 'inline-flex'}}>
              <div className="diagram-div" style={{width: '25%'}}>
                <div>
                  <h2 className="diagram-title">LV Meridian Points</h2>
                </div>
                <div>
                  <img className="materialboxed" data-caption="LV Meridian Diagram" src="/images/lv-channel-new.jpg"/>
                </div>
              </div>
              <div style={{width: '75%'}} className="liver-channel-info">
                <div className="liver-div">
                  <span className="liver-page-title">LIVER MERIDIAN:</span>
                    <div className="liver-page-div-one">
                      1. The liver is called the 'General' or 'Chief of Staff' and is responsible for filtering, detoxifying, nourishing, replenishing, and storing blood.
                    </div>
                    <div className="liver-page-div-two">
                      2. The liver stores large amounts of sugar in the form of glycogen, which it releases into the blood stream as glucose whenever the body requires extra infusions of metabolic energy.
                    </div>
                    <div className="liver-page-div-three">
                      3. The liver receives all amino acids extracted from food by the small intestine and recombines them to synthesize the various forms of protein required for growth and repair of bodily tissues.
                    </div>
                    <div className="liver-page-div-four">
                      4. The liver controls the peripheral nervous system, which regulates muscular activity and tension.
                    </div>
                    <div className="liver-page-div-five">
                      5. The inability to relax is often caused by liver dysfunction or imbalance in Wood energy.  Liver energy also controls ligaments and tendons, which together with muscles regulate motor activity and determine physical coordination.
                    </div>
                    <div className="liver-page-div-six">
                      6. Liver function is reflected externally in the condition of finger- and toenails and by the eyes and vision.
                    </div>
                    <div className="liver-page-div-seven">
                      7. Blurry vision is often a result of liver malfunction rather than an eye problem, and even Western medicine recognizes the symptomatic yellow eyes of liver jaundice.
                    </div>
                    <div className="liver-page-div-eight">
                      8. Through its association with Wood energy, the liver governs growth and development, drive and desires, ambitions and creativity.
                    </div>
                    <div className="liver-page-div-nine">
                      9. Obstruction of liver energy can cause intense feelings of frustration, rage, and anger, and these emotions in turn further disrupt liver energy and suppress liver function, in a vicious self-destructive cycle.
                    </div>
                </div>
              </div>
              {appendPoints()}
            </div>
          </div>
	    );
  	}
};
export default withRouter(UserHome)
