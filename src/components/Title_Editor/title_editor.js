import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Styles from './title_editor.css'
// import "../Button_Editor/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Arrow_down from "../img/arrow_down.png";
import BrandingGuide from '../BrandingGuide/BrandingGuide';
import Lion from "../img/lion.png";
// import ToggleSwitch from 'toggle-switch-rn'

import Switch from "../Switch/Switch";
import { HuePicker, SketchPicker } from 'react-color';

import RangeSlider from 'react-bootstrap-range-slider';
// import '../Button_Editor/node_modules/semantic-ui-css/semantic.min.css'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';

import {
    setTitlesCanvas,
    setTitleColor,
    setTitleSize,
    setTitleWidth,
    setTitleHeight,
    setTitlesTextCanvas,
    setTitleAlign,
    setTitleBrandColor

} from '../../redux/actions/canvasActions'

import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';


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

            WidthTitleValue: '',
            HeightTitleValue: '',
            shapeProps: '',
            finalWidthTitleValue: '',
            finalHeightTitleValue: '',

            bold_img_align: 'left'
        };
        this.handleChange = this.handleChange.bind(this);
        this.onChangeTitleColor = this.onChangeTitleColor.bind(this)
        this.addToBrandColorArr = this.addToBrandColorArr.bind(this)
        this.onChangeTitleInput = this.onChangeTitleInput.bind(this)
    }
    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.canvasDetails.titles[titles_i].fill !== prevProps.canvasDetails.titles[titles_i].fill) {

    //     }
    // }

    changeImage1 = () => {
        this.setState({ bold_img_align: 'left' });
        this.props.dispatch(setTitleAlign(('left'), this.props.canvasDetails.titles_i))

    };
    changeImage2 = () => {
        this.setState({ bold_img_align: 'center' });
        this.props.dispatch(setTitleAlign(('center'), this.props.canvasDetails.titles_i))

    };
    changeImage3 = () => {
        this.setState({ bold_img_align: 'right' });
        this.props.dispatch(setTitleAlign(('right'), this.props.canvasDetails.titles_i))

    };
    handleChange(checked) {
        this.setState({ checked });
    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };
    onChangeTitleColor(e) {
        this.props.dispatch(setTitleColor((e.target.value), this.props.canvasDetails.titles_i))
    }
    addToBrandColorArr(e) {
        console.log("enter to")
        this.props.dispatch(setTitleBrandColor((e.target.value), this.props.canvasDetails.titles_i))
    }
    onChangeTitleInput(e) {
        this.props.dispatch(setTitlesTextCanvas((e.target.value), this.props.canvasDetails.titles_i))
    }
    onChangeTitleSizeSlider = (e) => {
        this.props.dispatch(setTitleSize((e.target.value), this.props.canvasDetails.titles_i))
        document.getElementById("title_size_input").value = ''
        this.setState({ shapeProps: e.target.value })
    }
    onChangeTitleSizeInput = (e) => {
        this.props.dispatch(setTitleSize((e.target.value), this.props.canvasDetails.titles_i))
        this.setState({ shapeProps: e.target.value })
    }
    onChangeTitleWidthSlider = (e) => {
        this.props.dispatch(setTitleWidth((e.target.value), this.props.canvasDetails.titles_i))
        document.getElementById("title_width_input").value = ''
        this.setState({ finalWidthTitleValue: e.target.value })
    }
    onChangeTitleWidthInput = (e) => {
        this.props.dispatch(setTitleWidth((e.target.value), this.props.canvasDetails.titles_i))
        this.setState({ finalWidthTitleValue: e.target.value })
    }
    onChangeTitleHeightSlider = (e) => {
        this.props.dispatch(setTitleHeight((e.target.value), this.props.canvasDetails.titles_i))
        document.getElementById("title_height_input").value = ''
        this.setState({ finalHeightTitleValue: e.target.value })
    }
    onChangeTitleHeightInput = (e) => {
        this.props.dispatch(setTitleHeight((e.target.value), this.props.canvasDetails.titles_i))
        this.setState({ finalHeightTitleValue: e.target.value })
    }

    render() {

        return (
            <div className="d-flex flex-column justify-content-around" style={{ marginLeft: "20px", marginRight: "20px" }}>
                <div className="d-flex flex-column justify-content-start">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="sideLittleTitles" style={{ color: this.props.color }}>Title Setting</div>
                    </div>
                </div>

                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column  sideTitles " style={{ color: this.props.color }}>Title Name</div>
                    <div className="d-flex flex-row  ">  <Switch /></div>
                </div>

                <div className="d-flex flex-column justify-content-start  mb-1" style={{ color: this.props.color }}>
                    <input className="w3-input  mb-2" id="title_input" style={{ color: "white", backgroundColor: "transparent" }}
                        onKeyUp={this.onChangeTitleInput} onClick={() => document.getElementById('title_input').value = this.props.canvasDetails.titles[this.props.canvasDetails.titles_i].text} placeholder={this.props.canvasDetails.titles[this.props.canvasDetails.titles_i] === undefined ? '' : this.props.canvasDetails.titles[this.props.canvasDetails.titles_i].text} />
                </div>

                <div className="d-flex flex-row justify-content-between" >
                    <div className="d-flex flex-column justify-content-between sideTitles">
                        <div className="d-flex flex-row sideTitles" style={{ color: this.props.color }}>Title Size</div>
                        <div className="d-flex flex-row justify-content-between">
                            <input type="range" min="12" max="98" className="col-8 slider mt-3"
                                value={this.state.shapeProps}
                                onChange={this.onChangeTitleSizeSlider}
                            />
                            <input style={{ color: this.props.color }} id="title_size_input" className="input_line col-3"
                                onKeyUp={this.onChangeTitleSizeInput} placeholder={this.state.shapeProps} />
                        </div>
                    </div>
                </div>
                <br />
                <div className="d-flex flex-row justify-content-around">
                    <div className="d-flex flex-column sideTitles mr-5" style={{ color: this.props.color }}>Alignment</div>
                    <div className="d-flex flex-row justify-content-between">
                        <FormatAlignLeftIcon onClick={this.changeImage1} style={{ color: this.state.bold_img_align === 'left' ? "#EBEAEA" : "#BCBDC7" }} />
                        <FormatAlignJustifyIcon onClick={this.changeImage2} style={{ color: this.state.bold_img_align === 'center' ? "#EBEAEA" : "#BCBDC7" }} />
                        <FormatAlignRightIcon onClick={this.changeImage3} style={{ color: this.state.bold_img_align === 'right' ? "#EBEAEA" : "#BCBDC7" }} />
                    </div>
                </div>

                <div className="d-flex flex-row justify-content-between mt-4 mb-1">
                    <div className="d-flex flex-column sideTitles" style={{ color: this.props.color }}>Title Fill</div>
                    <input style={{ backgroundColor: "transparent", border: "none" }} type="color" className="d-flex flex-column form-control" id="input_color" name="favcolor"
                        onPointerLeave={this.addToBrandColorArr} onChange={this.onChangeTitleColor} value={this.props.canvasDetails.titles[this.props.canvasDetails.titles_i] == undefined ? '' : this.props.canvasDetails.titles[this.props.canvasDetails.titles_i].fill} />
                </div>

                {/* 
                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column justify-content-between sideTitles">
                        <div className="d-flex flex-row sideTitles" style={{ color: this.props.color }}>Title Width</div>
                        <div className="d-flex flex-row justify-content-between">
                            <input type="range" min="1" max="100" className="col-8 slider mt-3"
                                value={this.state.finalWidthTitleValue}
                                onChange={this.onChangeTitleWidthSlider} />
                            <input style={{ color: "white" }} id="title_width_input" className="input_line col-3"
                                onKeyUp={this.onChangeTitleWidthInput} placeholder={this.finalWidthTitleValue} />
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column justify-content-between sideTitles">
                        <div className="d-flex flex-row sideTitles" style={{ color: this.props.color }}>Title Height</div>
                        <div className="d-flex flex-row justify-content-between">
                            <input type="range" min="1" max="100" className="col-9 slider mt-3"
                                value={this.state.finalHeightTitleValue}
                                onChange={this.onChangeTitleHeightSlider} />
                            <input style={{ color: "white" }} id="title_height_input" className="input_line col-3"
                                onKeyUp={this.onChangeTitleHeightInput} placeholder={this.finalHeightTitleValue} />
                        </div>
                    </div>
                </div> */}
                <BrandingGuide />
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

