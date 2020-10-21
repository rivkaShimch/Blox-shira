import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styles from './title_editor.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Arrow_down from "../img/arrow_down.png";

import Lion from "../img/lion.png";
import { connect } from 'react-redux';


import {
    setTitlesCanvas
} from '../../redux/actions/canvasActions'


class Title_Editor extends Component {
    constructor(prop) {
        super(prop);
        const my_img = require("../img/arrow_down.png")

        this.state = {

        };
        this.onChangeTitleInput = this.onChangeTitleInput.bind(this)
    }
    onChangeTitleInput(e) {
        this.props.dispatch(setTitlesCanvas(e.target.value))
    }
    render() {
        return (
            <> <div className="col-12 d-flex flex-column justify-content-between">

                {/* <div className="col-12 d-flex flex-row justify-content-between">
                    <div className="sideLittleDetail">images</div>
                    <img src={Arrow_down} style={{ height: "1vh", width: "1.5vh" }} alt="icon" />
                </div> */}

                <div className="d-flex flex-column justify-content-start">
                    <div className="sideLittleDetail">Title Setting</div>
                    <label style={{ color: "white" }}>Title Name</label>
                    <input className="w3-input" style={{ color: "#EAEAEA", backgroundColor: "#3A405E" }} onKeyUp={this.onChangeTitleInput} placeholder={this.props.canvasDetails.titles} />
                </div>

                <div className="d-flex flex-row justify-content-around">
                    <div className="sideLittleDetail">images<img src={Arrow_down} alt="icon" /></div>

                </div>
            </div>
            </>
        );
    }
}


function mapStateToProps(state) {
    return {
        canvasDetails: state.canvasDetails.canvasDetails
    };
}
export default connect(mapStateToProps)(Title_Editor)
