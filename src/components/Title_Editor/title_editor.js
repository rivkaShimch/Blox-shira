
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Styles from './title_editor.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Arrow_down from "../img/arrow_down.png";

import Lion from "../img/lion.png";
// import ToggleSwitch from 'toggle-switch-rn'

import Switch from "../Switch/Switch";
import { HuePicker, SketchPicker } from 'react-color';

import RangeSlider from 'react-bootstrap-range-slider';
import 'semantic-ui-css/semantic.min.css'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux';


import {
    setTitlesCanvas,
    setTitleColor,
    setName,

} from '../../redux/actions/canvasActions'

import Slider from '@material-ui/core/Slider';
import alignCenter from '../img/alignCenter.png';
import TextField from '@material-ui/core/TextField';
import alignLeftWhite1 from '../img/alignLeftWhite1.png';
import alignRight from '../img/alignRight.png';

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
            value: '',
            valueRange: "14",
            valueColor: "red",
            finalValueRange: '',
            finalValueColor: '',
            WidthTitleValue: '',
            finalWidthTitleValue: '',

            bold_img_align: 1
        };
        this.handleChange = this.handleChange.bind(this);
        this.onChangeTitleColor = this.onChangeTitleColor.bind(this)
        this.onChangeTitleInput = this.onChangeTitleInput.bind(this)
        this.onKeyTemplateName = this.onKeyTemplateName.bind(this)
    }

    changeImage1 = () => {
        this.setState({ bold_img_align: 1 });
    };
    changeImage2 = () => {
        this.setState({ bold_img_align: 2 });
    };
    changeImage3 = () => {
        this.setState({ bold_img_align: 3 });
    };
    handleChange(checked) {
        this.setState({ checked });
    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    onChangeTitleColor(e) {
        this.props.dispatch(setTitleColor(e.target.value))
    }
    onChangeTitleInput(e) {
        this.props.dispatch(setTitlesCanvas(e.target.value))
    }
    onKeyTemplateName(e) {
        this.props.dispatch(setName(e.target.value))
    }
    // hh = () => {
    //     slider = new Slider('#ex26');
    //     slider.refresh({ useCurrentValue: true });
    // }
    render() {

        return (
            <div className="col-12 d-flex flex-column justify-content-start">


                <div className="d-flex flex-row justify-content-start mb-1">
                    <div className="sideLittleTitles  mb-2">Title Setting</div>
                </div>

                <div className="d-flex flex-row justify-content-between  mb-1 mt-2">
                    <div className="d-flex flex-column  mb-2 sideTitles">Title Name</div>
                    <div className="d-flex flex-row  mb-2">  <Switch /></div>
                </div>


                <div className="d-flex flex-column justify-content-start  mb-1">
                    <input className="w3-input  mb-2" style={{ color: "white", backgroundColor: "#3A405E" }}
                        onKeyUp={this.onChangeTitleInput} placeholder={this.props.canvasDetails.titles} />

                </div>

                <div className="d-flex flex-row justify-content-between mt-2  mb-1">
                    <div className="d-flex flex-column sideTitles">Title Size</div>
                </div>

                <div className="d-flex flex-row justify-content-start  mb-2">
                    <input type="range" min="1" max="100" className="slider mt-4  mb-1"
                        value={this.state.valueRange}
                        onChange={e => this.setState({ valueRange: (e.target.value) })}
                        onAfterChange={e => this.setState({ finalValueRange: (e.target.value) })} />
                    <input type="number" style={{ color: "white", backgroundColor: "#3A405E", width: "2vw" }} value={this.finalValueRange} />

                </div>
                <div className="d-flex flex-row justify-content-between mt-4 mb-1">
                    <div className="d-flex flex-column sideTitles">Alignment</div>
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-row">
                            <img className="col" onClick={this.changeImage1} style={{ height: "20px" }} src={this.state.bold_img_align === 1 ? alignCenter : alignLeftWhite1} alt="icon" />
                            <img className="col" onClick={this.changeImage2} style={{ height: "20px" }} src={this.state.bold_img_align === 2 ? alignCenter : alignLeftWhite1} alt="icon" />
                            <img className="col" onClick={this.changeImage3} style={{ height: "20px" }} src={this.state.bold_img_align === 3 ? alignCenter : alignLeftWhite1} alt="icon" />

                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between mt-4 mb-1">
                    <div className="d-flex flex-column sideTitles">Title Fill</div>
                    <input style={{ backgroundColor: "#3A405E", border: "none" }} type="color" className="d-flex flex-column form-control" id="input_color" name="favcolor"
                        onChange={this.onChangeTitleColor} value={this.props.canvasDetails.title_color} />
                    {/* <input type="color" className="d-flex flex-column form-control" name="favcolor" value={this.state.finalValueColor}
                        onChange={e => this.setState({ valueColor: (e.target.value) })}
                        onAfterChange={e => this.setState({ finalValueColor: (e.target.value) })} /> */}
                </div>




                <div className="d-flex flex-row justify-content-between mt-2 mb-2">
                    <div className="d-flex flex-column sideTitles">Title Width</div>
                </div>

                <div className="d-flex flex-row justify-content-start mb-2 mb-1">
                    <input type="range" min="1" max="100" className="slider mt-4 mb-1"
                        value={this.state.WidthTitleValue}
                        onChange={e => this.setState({ WidthTitleValue: (e.target.value) })}
                        onAfterChange={e => this.setState({ finalWidthTitleValue: (e.target.value) })} />
                    <input style={{ color: "white", backgroundColor: "#3A405E", width: "2vw" }} value={this.finalWidthTitleValue} />

                </div>

                <div className="d-flex flex-row justify-content-between mt-2 mb-1">
                    <div className="d-flex flex-column sideTitles">Title Height</div>
                </div>

                <div className="d-flex flex-row justify-content-start mb-1">
                    <input type="range" min="1" max="100" className="slider mt-4"
                        value={this.state.valueRange}
                        onChange={e => this.setState({ valueRange: (e.target.value) })}
                        onAfterChange={e => this.setState({ finalValueRange: (e.target.value) })} />
                    <input style={{ color: "white", backgroundColor: "#3A405E", width: "2vw" }} value={this.finalValueRange} />

                </div>
                <div className="d-flex">
                    <label>template name</label>
                    <input placeholder="template name" onKeyUp={this.onKeyTemplateName} />
                </div>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        canvasDetails: state.canvasDetails.canvasDetails
    };
}
export default connect(mapStateToProps)(Title_Editor)

