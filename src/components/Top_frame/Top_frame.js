
import React, { Component } from "react";
import { Link, withRouter, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './Top_frame.css'
import logo from '../img/logo1.png'
import Thumbtack from '../img/thumbtack-solid-stand.png'
import $ from 'jquery'
import Icon from '@material-ui/core/Icon';
import { BiLogOut, RiArrowDownSLine } from "react-icons/all";
import {
    setDisplayConfigurator,

} from '../../redux/actions/componentsActions';
// import { setFlagToggleCon ,setFlagthumbtack} from '../../redux/actions/funnel.action'

class Top_frame extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            configuratorOpen: true,
            toggleThumbtack: true,// הנעץ עומד
            thumbtack: true,

        };
        this.openConfigurator = this.openConfigurator.bind(this)
        this.changeFlagThumbtack = this.changeFlagThumbtack.bind(this)

    }
    changeFlagThumbtack = () => {
        this.state.toggleThumbtack = !(this.state.toggleThumbtack)
        console.log("555" + this.state.toggleThumbtack)
        console.log("this.state.configuratorOpen" + this.state.configuratorOpen)
    }

    openConfigurator = () => {
        // if ((this.state.toggleThumbtack === false) && (this.state.configuratorOpen)) {
        //     console.log("2  openConfigurator")
        //     this.props.dispatch(setDisplayConfigurator("none"))
        //     console.log(" if ((this.state.toggleThumbtack === false) && (this.state.configuratorOpen)) " + this.state.toggleThumbtack + " " + this.state.configuratorOpen)
        // }
        // if ((this.state.toggleThumbtack === false) && (!this.state.configuratorOpen)) {
        //     console.log("3  openConfigurator")
        //     this.props.dispatch(setDisplayConfigurator("block"))
        //     console.log("this.state.configuratorOpen" + this.state.configuratorOpen)
        // }
        if (this.state.toggleThumbtack === false) {
            if (this.state.configuratorOpen === true) {
                this.state.configuratorOpen = !this.state.configuratorOpen
                this.props.dispatch(setDisplayConfigurator("none"))
                console.log("this.state.configuratorOpen === trueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
            }
            if (this.state.configuratorOpen === false) {
                this.props.dispatch(setDisplayConfigurator("block"))
                console.log("this.state.configuratorOpen ===falseeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
            }

        }
    }
    render() {
        // const { isAuthenticated, photoURL, flagCon, thumbtack } = this.props;

        // const { classes, loginError, isAuthenticated, errorMessage } = this.props;
        return (
            <div id="top_frame" className="row d-flex justify-content-between align-items-center mx-0">
                <a id="leader_logo" href="https://lobby.leader.codes/" className="d-flex">
                    <img src={logo} id="img_logo" className="m-auto"></img>
                </a>

                <div className="row mr-3">


                    <img src={Thumbtack}
                        className={!this.state.thumbtack ? "rotateThumbtack" : "thumbtack"}
                        // onClick={!thumbtack && (() => this.changeFlagConfigurator(!flagCon))}
                        onClick={() => { this.changeFlagThumbtack() }}
                    />
                    <button id="menu2" className="material-icons align-middle pl-2 pointer btn btn-simple"
                        onClick={() => { this.openConfigurator() }}
                    >
                        menu
                    </button>

                </div>
            </div>

        );
    }
}
function mapStateToProps(state) {
    // console.log("state   " + state.displayComponents.displayComponents)
    return {
        displayComponents: state.displayComponents.displayComponents,
        canvasDetails: state.canvasDetails.canvasDetails,
        user: state.user.user
    };
}
export default connect(mapStateToProps)((withRouter(Top_frame)))

