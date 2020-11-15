import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import style from './components/Image_Editor/image_editor.css';
import { connect } from 'react-redux';
import logo from '../img/לוגו.png';
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from '../Title_Editor/title_editor.css'
import Image_Editor1 from '../Image_Editor/Image_editor.css';
import Switch from "../Switch/Switch";
import { red } from '@material-ui/core/colors';
import Styles2 from '../Title_Editor/title_editor.css'
import arrow_down from '../img/arrow_down.png';



class Image_Editor extends Component {
    constructor(prop) {
        super(prop);


        this.state = {
            checked: false,
            background: '#fff',
            value: '',
            valueRange: "14",
            valueColor: "red",
            BorderValue: '',
            finalValueRange: '',
            finalValueColor: '',
            WidthTitleValue: '',
            finalWidthTitleValue: '',
            finalBorderValue: '',


            bold_img_align: 1
        };
    }
    render() {
        return (





            <div className="col-12 d-flex flex-column justify-content-start">


                <div className="d-flex flex-column justify-content-between" style={{ marginLeft: "20px", marginRight: "20px" }}>
                    <div className="d-flex flex-column justify-content-start">
                        <div className="d-flex flex-row justify-content-between">
                            <div className="col sideLittleTitles  ">Image Details</div>
                            <img style={{ height: "5px", width: "10px", marginRight: "1vw", marginTop: "0.5vw" }} src={arrow_down} alt="image" />
                        </div>
                        <div className="d-flex flex-row justify-content-end">  <Switch /></div>

                    </div>

                    {/* {console.log("the img " + this.props.canvasDetails.element_img[this.props.canvasDetails.element_img_i])} */}
                    <div className="d-flex flex-row justify-content-center">
                        <img style={{ height: "90px", width: "100px" }}
                            // src={this.props.canvasDetails.element_img[this.props.canvasDetails.element_img_i].src}
                            alt="image" />
                    </div>





                    <div className="d-flex flex-row justify-content-between mt-4 mb-1">
                        <div className="d-flex flex-column justify-content-between">
                            <div className="d-flex flex-row sideTitles">Background Only Png</div>
                            <div className="d-flex flex-row justify-content-between">
                                <input style={{ backgroundColor: "#3A405E", border: "none" }} type="color" className="d-flex flex-column form-control" id="input_color" name="favcolor"
                                    onChange={this.onChangeTitleColor} value={this.props.canvasDetails.title_color} />
                                <input className="input_line col-2" value={this.finalValueColor} />
                            </div>
                        </div>
                    </div>

                    {/* 

                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-column justify-content-between sideTitles">
                            <div className="d-flex flex-row sideTitles">Image Width</div>


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
                            <div className="d-flex flex-row sideTitles">Image Height</div>


                            <div className="d-flex flex-row justify-content-between">
                                <input type="range" min="1" max="100" className="col-9 slider mt-3"
                                    value={this.state.HeightTitleValue}
                                    onChange={e => this.setState({ HeightTitleValue: (e.target.value) })}
                                    onAfterChange={e => this.setState({ finalHeightTitleValue: (e.target.value) })} />
                                <input className="input_line col-2" value={this.finalHeightTitleValue} />

                            </div>
                        </div>


                    </div>
 */}


                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-column justify-content-between sideTitles">
                            <div className="d-flex flex-row sideTitles">Border Radius Image</div>


                            <div className="d-flex flex-row justify-content-between">
                                <div className="radius_icon"></div>
                                <div className="rec_icon"></div>
                                <input type="range" min="1" max="100" className="col-6 slider mt-3"
                                    value={this.state.BorderValue}
                                    onChange={e => this.setState({ BorderValue: (e.target.value) })}
                                    onAfterChange={e => this.setState({ finalBorderValue: (e.target.value) })} />
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
export default connect(mapStateToProps)(Image_Editor)
