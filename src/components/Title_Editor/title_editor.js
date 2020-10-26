
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
            SizeTitleValue: '',
            WidthTitleValue: '',
            HeightTitleValue: '',
            finalSizeTitleValue: '',
            finalWidthTitleValue: '',
            finalHeightTitleValue: '',

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
                <div className="d-flex flex-column justify-content-between" style={{ height: "400px", marginLeft: "20px", marginRight: "20px" }}>
                    <div className="d-flex flex-column justify-content-start">
                        <div className="d-flex flex-row justify-content-between">
                            <div className="sideLittleTitles  ">Title Setting</div>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-column  sideTitles">Title Name</div>
                        <div className="d-flex flex-row  ">  <Switch /></div>
                    </div>

                    <div className="d-flex flex-column justify-content-start  mb-1">
                        <input className="w3-input  mb-2" style={{ color: "white", backgroundColor: "#3A405E" }}
                            onKeyUp={this.onChangeTitleInput} placeholder={this.props.canvasDetails.titles} />
                    </div>


                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-column justify-content-between sideTitles">
                            <div className="d-flex flex-row sideTitles">Title Size</div>


                            <div className="d-flex flex-row justify-content-between">
                                <input type="range" min="1" max="100" className="col-9 slider mt-3"
                                    value={this.state.SizeTitleValue}
                                    onChange={e => this.setState({ SizeTitleValue: (e.target.value) })}
                                    onAfterChange={e => this.setState({ finalSizeTitleValue: (e.target.value) })} />
                                <input className="input_line col-2" value={this.finalSizeTitleValue} />

                            </div>
                        </div>
                    </div>


                    <div className="d-flex flex-row justify-content-between ">
                        <div className="d-flex flex-column sideTitles mr-5">Alignment</div>
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row justify-content-end">
                                <img onClick={this.changeImage1} style={{ height: "20px", marginLeft: "9px" }} src={this.state.bold_img_align === 1 ? alignCenter : alignLeftWhite1} alt="icon" />
                                <img onClick={this.changeImage2} style={{ height: "20px", marginLeft: "9px" }} src={this.state.bold_img_align === 2 ? alignCenter : alignLeftWhite1} alt="icon" />
                                <img onClick={this.changeImage3} style={{ height: "20px", marginLeft: "9px" }} src={this.state.bold_img_align === 3 ? alignCenter : alignLeftWhite1} alt="icon" />

                            </div>
                        </div>
                    </div>



                    <div className="d-flex flex-row justify-content-between mt-4 mb-1">
                        <div className="d-flex flex-column sideTitles">Title Fill</div>
                        <input style={{ backgroundColor: "#3A405E", border: "none" }} type="color" className="d-flex flex-column form-control" id="input_color" name="favcolor"
                            onChange={this.onChangeTitleColor} value={this.props.canvasDetails.title_color} />
                    </div>



                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-column justify-content-between sideTitles">
                            <div className="d-flex flex-row sideTitles">Title Width</div>


                            <div className="d-flex flex-row justify-content-between">
                                <input type="range" min="1" max="100" className="col-9 slider mt-3"
                                    value={this.state.WidthTitleValue}
                                    onChange={e => this.setState({ WidthTitleValue: (e.target.value) })}
                                    onAfterChange={e => this.setState({ finalWidthTitleValue: (e.target.value) })} />
                                <input className="input_line col-2" value={this.finalWidthTitleValue} />

                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-column justify-content-between sideTitles">
                            <div className="d-flex flex-row sideTitles">Title Height</div>


                            <div className="d-flex flex-row justify-content-between">
                                <input type="range" min="1" max="100" className="col-9 slider mt-3"
                                    value={this.state.HeightTitleValue}
                                    onChange={e => this.setState({ HeightTitleValue: (e.target.value) })}
                                    onAfterChange={e => this.setState({ finalHeightTitleValue: (e.target.value) })} />
                                <input className="input_line col-2" value={this.finalHeightTitleValue} />

                            </div>
                        </div>
                    </div>


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

