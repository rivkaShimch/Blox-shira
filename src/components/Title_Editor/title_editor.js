
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Styles from './title_editor.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Arrow_down from "../img/arrow_down.png";

import Lion from "../img/lion.png";
// import ToggleSwitch from 'toggle-switch-rn'
import Switch from "../Switch/Switch";
import { HuePicker } from 'react-color';

import RangeSlider from 'react-bootstrap-range-slider';


import { connect } from 'react-redux';


import {
    setTitlesCanvas
} from '../../redux/actions/canvasActions'







class CustomPointer extends Component {
    render() {
        return (
            <>
                <div className="custom_pointer"></div>
            </>
        );

    }
}


class Title_Editor extends Component {
    constructor(prop) {
        super(prop);

        this.state = {
            checked: false,
            background: '#fff',
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onChangeTitleInput = this.onChangeTitleInput.bind(this)

    }


    handleChange(checked) {
        this.setState({ checked });
    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    onChangeTitleInput(e) {
        this.props.dispatch(setTitlesCanvas(e.target.value))
    }



    render() {

        return (
            <>
                <div className="col-12 d-flex flex-column justify-content-start">

                    {/* <div className="col-12 d-flex flex-row justify-content-between">
                    <div className="sideLittleDetail">images</div>
                    <img src={Arrow_down} style={{ height: "1vh", width: "1.5vh" }} alt="icon" />
                </div> */}
                    <div className="d-flex flex-row justify-content-start">
                        <div className="sideLittleTitles">Title Setting</div>
                    </div>


                    <div className="d-flex flex-row justify-content-between mt-2">
                        <div className="d-flex flex-column sideTitles">Title Name</div>
                        <div className="d-flex flex-row">  <Switch /></div>
                    </div>

                    <div className="d-flex flex-row justify-content-between">
                        <div className="sideLittleTitles">Title Name</div>
                        <input type="range" class="form-control-range range_style" name="range" RangeSlider="60px"
                        // onChange={changeEvent => this.setState({ value: changeEvent.target.value })}
                        />
                    </div>



                    <div className="categoryColorDiv"
                        id="categoryColorDiv"
                        style={{ backgroundColor: "rgb(178, 31, 31)" }}>sdfghjkl
                </div>

                    <div className="d-flex flex-column justify-content-start">
                        <div className="sideLittleDetail">Title Setting</div>
                        <label style={{ color: "white" }}>Title Name</label>
                        <input className="w3-input" style={{ color: "#EAEAEA", backgroundColor: "#3A405E" }} onKeyUp={this.onChangeTitleInput} placeholder={this.props.canvasDetails.titles} />                <div className="d-flex flex-row justify-content-start">
                            <div className="sideLittleTitles">Title setting</div>
                        </div>
                        <div className="custom-control custom-switch nearLable">
                            <input type="checkbox"
                                className="custom-control-input"
                                id="tb_full_name" checked=""
                                oninput="check_full_name(this.checked)" />
                            <label class="custom-control-label" for="tb_full_name"></label>
                        </div>



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
