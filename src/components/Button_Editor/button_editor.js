import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Styles from './button_editor.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "../Switch/Switch";
import { HuePicker, SketchPicker } from 'react-color';

import RangeSlider from 'react-bootstrap-range-slider';
import 'semantic-ui-css/semantic.min.css'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';

import {
    setButtonsCanvas,
    setButtonColor,
    setButtonShadowBlur,
    setButtonCorners,
    setButtonStrokeWidth,
    setButtonStroke


} from '../../redux/actions/canvasActions'

import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';


class Button_Editor extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            checked: false,
            shadowSize: '',
            finalShadowSize: '',
            shapeProps: '',
            finalStrokeWidth: '4',
            cornersRadius: '',
        };
        this.onChangeButtonColor = this.onChangeButtonColor.bind(this)
        this.onChangeShadowSizeSlider = this.onChangeShadowSizeSlider.bind(this)
        this.onChangeShadowSizeInput = this.onChangeShadowSizeInput.bind(this)
        this.finalBorderValue = this.finalBorderValue.bind(this)
        this.onChangeButtonStrokeColor = this.onChangeButtonStrokeColor.bind(this)
        this.onChangeStrokeWidthInput = this.onChangeStrokeWidthInput.bind(this)
        this.onChangeStrokeSlider = this.onChangeStrokeSlider.bind(this)

    }
    onChangeButtonColor(e) {
        this.props.dispatch(setButtonColor((e.target.value), this.props.canvasDetails.buttons_i))
    }
    onChangeButtonStrokeColor(e) {
        this.props.dispatch(setButtonStroke((e.target.value), this.props.canvasDetails.buttons_i))
    }
    handleChange(checked) {
        this.setState({ checked });
    }
    onChangeShadowSizeSlider(e) {

        this.props.dispatch(setButtonShadowBlur((e.target.value), this.props.canvasDetails.buttons_i))
        document.getElementById("shadowSize_input").value = ''
        this.setState({ shapeProps: e.target.value })
    }
    onChangeShadowSizeInput(e) {
        this.props.dispatch(setButtonShadowBlur((e.target.value), this.props.canvasDetails.buttons_i))
        this.setState({ shapeProps: e.target.value })
    }
    finalBorderValue(e) {
        this.props.dispatch(setButtonCorners((e.target.value), this.props.canvasDetails.buttons_i))
        this.setState({ cornersRadius: e.target.value })
    }
    onChangeStrokeWidthInput(e) {
        this.props.dispatch(setButtonStrokeWidth((e.target.value), this.props.canvasDetails.buttons_i))
        this.setState({ finalStrokeWidth: e.target.value })
    }
    onChangeStrokeSlider(e) {
        this.props.dispatch(setButtonStrokeWidth((e.target.value), this.props.canvasDetails.buttons_i))
        document.getElementById("stroke_width_input").value = ''
        this.setState({ finalStrokeWidth: e.target.value })
    }
    render() {

        return (
            <div className="d-flex flex-column justify-content-around" style={{ marginLeft: "20px", marginRight: "20px" }}>

                <div className="d-flex flex-row justify-content-between mt-4 mb-1">
                    <div className="d-flex flex-column sideTitles" style={{ color: this.props.color }}>Button Fill</div>
                    <input style={{ backgroundColor: "transparent", border: "none" }} type="color" className="d-flex flex-column form-control" id="input_color" name="favcolor"
                        onChange={this.onChangeButtonColor} value={this.props.canvasDetails.buttons[this.props.canvasDetails.buttons_i] == undefined ? '' : this.props.canvasDetails.buttons[this.props.canvasDetails.buttons_i].fill} />
                </div>
                <div className="d-flex flex-row justify-content-between mt-4 mb-1">
                    <div className="d-flex flex-column sideTitles" style={{ color: this.props.color }}>Stroke Color</div>
                    <input style={{ backgroundColor: "transparent", border: "none" }} type="color" className="d-flex flex-column form-control" id="input_color" name="favcolor"
                        onChange={this.onChangeButtonStrokeColor} value={this.props.canvasDetails.buttons[this.props.canvasDetails.buttons_i] == undefined ? '' : this.props.canvasDetails.buttons[this.props.canvasDetails.buttons_i].stroke} />
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column justify-content-between sideTitles">
                        <div className="d-flex flex-row sideTitles" style={{ color: this.props.color }}>Stroke Width</div>
                        <div className="d-flex flex-row justify-content-between">
                            <input type="range" min="1" max="50" className="col-8 slider mt-3"
                                value={this.state.finalStrokeWidth}
                                onChange={this.onChangeStrokeSlider} />
                            <input style={{ color: "white" }} id="stroke_width_input" className="input_line col-3"
                                onKeyUp={this.onChangeStrokeWidthInput} placeholder={this.finalStrokeWidth} />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between" >
                    <div className="d-flex flex-column justify-content-between sideTitles">
                        <div className="d-flex flex-row sideTitles" style={{ color: this.props.color }}>Shadow Size</div>
                        <div className="d-flex flex-row justify-content-between">
                            <input type="range" min="0" max="20" className="col-8 slider mt-3"
                                value={this.state.shapeProps}
                                onChange={this.onChangeShadowSizeSlider}
                            />
                            <input style={{ color: this.props.color }} id="shadowSize_input" className="input_line col-3"
                                onKeyUp={this.onChangeShadowSizeInput} placeholder={this.state.shapeProps} />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column justify-content-between sideTitles">
                        <div className="d-flex flex-row sideTitles">Border Radius</div>
                        <div className="d-flex flex-row justify-content-between">
                            <div className="radius_icon"></div>
                            <div className="rec_icon"></div>
                            <input type="number" min="10" max="100" className="input_line col-3"
                                style={{ color: this.props.color, backgroundColor: "white" }}
                                onChange={this.finalBorderValue} placeholder={this.state.cornersRadius} />

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
export default connect(mapStateToProps)(Button_Editor)

