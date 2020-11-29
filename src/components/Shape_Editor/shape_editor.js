
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
// import Styles from './title_editor.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Arrow_down from "../img/arrow_down.png";
import Switch from "../Switch/Switch";
import RangeSlider from 'react-bootstrap-range-slider';
import 'semantic-ui-css/semantic.min.css'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import '../Title_Editor/title_editor';
import Title_Editor from '../Title_Editor/title_editor';
import Image_Editor from '../Image_Editor/image_editor';

import {
    setTitlesCanvas,
    setTitleColor,
    setShapeColor,
    setName,

} from '../../redux/actions/canvasActions'


import alignCenter from '../img/alignCenter.png';
import TextField from '@material-ui/core/TextField';
import alignLeftWhite1 from '../img/alignLeftWhite1.png';
import alignRight from '../img/alignRight.png';

class Shape_Editor extends Component {
    constructor(prop) {
        super(prop);


        this.state = {
            checked: false,
            background: '#fff',
            value: '',
            valueRange: "14",
            // valueColor: "red",
            finalValueRange: '',
            // finalValueColor: '',
            SizeTitleValue: '',
            WidthTitleValue: '',
            HeightTitleValue: '',
            WidthShapeValue: '',
            HeightShapeValue: '',
            finalSizeTitleValue: '',
            finalWidthTitleValue: '',
            finalHeightTitleValue: '',
            finalWidthShapeValue: '',
            finalHeightShapeValue: '',

            bold_img_align: 1
        };
        this.handleChange = this.handleChange.bind(this);
        this.onChangeTitleColor = this.onChangeTitleColor.bind(this)
        // this.onChangeShapeColor = this.onChangeShapeColor.bind(this)
        // this.onChangeTitleInput = this.onChangeTitleInput.bind(this)
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
    // onChangeShapeColor(e) {
    //     this.props.dispatch(setShapeColor(e.target.value))
    // }
    // onChangeShapeColor(e) {
    //     this.props.dispatch(setShapeColor(e.target.value))
    // }
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


                <div className="d-flex flex-column justify-content-between" style={{ height: "25vw", marginLeft: "20px", marginRight: "20px" }}>
                    <div className="d-flex flex-column justify-content-start">
                        <div className="d-flex flex-column justify-content-start">
                            <div className="d-flex flex-row justify-content-between mb-2">
                                <div className="sideLittleTitles  ">Shape Setting</div>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-column  sideTitles">Title Name</div>
                            <div className="d-flex flex-row  ">  <Switch /></div>
                        </div>

                        <div className="d-flex flex-column justify-content-start">
                            <input className="w3-input " style={{ padding: "0px", color: "white", backgroundColor: "#3A405E" }}
                                onKeyUp={this.onChangeTitleInput} placeholder={this.props.canvasDetails.titles} />
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-column justify-content-between sideTitles">
                            <div className="d-flex flex-row sideTitles">Text Size</div>


                            <div className="d-flex flex-row justify-content-between">
                                <input type="range" min="1" max="100" className="col-9 slider mt-3"
                                    value={this.state.SizeTitleValue}
                                    onChange={e => this.setState({ SizeTitleValue: (e.target.value) })}
                                // onAfterChange={e => this.setState({ finalSizeTitleValue: (e.target.value) })}
                                />
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

                    <div className="d-flex flex-column justify-content-between">
                        <div className="d-flex flex-row sideTitles">Title Fill</div>
                        <input style={{ backgroundColor: "#3A405E", border: "none" }} type="color" className="d-flex flex-row form-control" id="input_color1" name="favcolor1"
                            onChange={this.onChangeTitleColor} value={this.props.canvasDetails.title_color} />
                    </div>

                    <div className="d-flex flex-column justify-content-between">
                        <div className="d-flex flex-row sideTitles">Shape Fill</div>
                        <input style={{ backgroundColor: "#3A405E", border: "none" }} type="color" className="d-flex flex-row form-control" id="input_color2" name="favcolor2"
                            onChange={this.onChangeShapeColor} value={this.props.canvasDetails.shape_color} />
                    </div>

                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-column justify-content-between sideTitles">
                            <div className="d-flex flex-row sideTitles">Shape Width</div>


                            <div className="d-flex flex-row justify-content-between">
                                <input type="range" min="1" max="100" className="col-9 slider mt-3"
                                    value={this.state.WidthShapeValue}
                                    onChange={e => this.setState({ WidthShapeValue: (e.target.value) })}
                                // onAfterChange={e => this.setState({ finalWidthShapeValue: (e.target.value) })}
                                />
                                <input className="input_line col-2" value={this.finalWidthShapeValue} />

                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-column justify-content-between sideTitles">
                            <div className="d-flex flex-row sideTitles">Shape Height</div>


                            <div className="d-flex flex-row justify-content-between">
                                <input type="range" min="1" max="100" className="col-9 slider mt-3"
                                    value={this.state.HeightShapeValue}
                                    onChange={e => this.setState({ HeightShapeValue: (e.target.value) })}
                                // onAfterChange={e => this.setState({ finalHeightShapeValue: (e.target.value) })} 
                                />
                                <input className="input_line col-2" value={this.finalHeightShapeValue} />

                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-column justify-content-between sideTitles">
                            <div className="d-flex flex-row sideTitles">Border Radius Image</div>


                            <div className="d-flex flex-row justify-content-between">
                                <div className="radius_icon"></div>
                                <div className="rec_icon"></div>

                                <input className="input_line col-2 mr-2" value={this.finalBorderValue} />
                                <input className="input_line col-2 mr-2" value={this.finalBorderValue} />
                                <input className="input_line col-2 mr-2" value={this.finalBorderValue} />
                                <input className="input_line col-2" value={this.finalBorderValue} />

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
export default connect(mapStateToProps)(Shape_Editor)

