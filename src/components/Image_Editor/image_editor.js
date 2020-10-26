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



class Image_Editor extends Component {
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
    }
    render() {
        return (
            <>
                <div className="col-12 d-flex flex-column justify-content-start">
                    <div className="d-flex flex-row justify-content-between  mb-1 mt-2">
                        <div className="d-flex flex-column  mb-2 sideTitles">Image Details</div>
                        <div className="d-flex flex-row  mb-2">  <Switch /></div>
                    </div>
                    <div className="d-flex flex-row justify-content-center  mb-1 mt-2">
                        <img style={{ height: "90px", width: "100px" }} src={logo} alt="image" />
                    </div>

                    <div className="d-flex flex-row justify-content-between mt-4 mb-1">
                        <div className="d-flex flex-column sideTitles">Background Only Png</div>
                        <input type="color" className="d-flex flex-column form-control" name="favcolor" value={this.state.finalValueColor}
                            onChange={e => this.setState({ valueColor: (e.target.value) })}
                            onAfterChange={e => this.setState({ finalValueColor: (e.target.value) })} />
                    </div>


                    <div className="d-flex flex-row justify-content-between mt-2 mb-2">
                        <div className="d-flex flex-column sideTitles">Image Width</div>
                    </div>

                    <div className="d-flex flex-row justify-content-start mb-2 mb-1">
                        <input type="range" min="1" max="100" className="slider mt-4 mb-1"
                            value={this.state.WidthTitleValue}
                            onChange={e => this.setState({ WidthTitleValue: (e.target.value) })}
                            onAfterChange={e => this.setState({ finalWidthTitleValue: (e.target.value) })} />
                        <input style={{ color: "white", backgroundColor: "#3A405E", width: "2vw" }} value={this.finalWidthTitleValue} />

                    </div>

                    <div className="d-flex flex-row justify-content-between mt-2 mb-1">
                        <div className="d-flex flex-column sideTitles">Image Height</div>
                    </div>

                    <div className="d-flex flex-row justify-content-start mb-1">
                        <input type="range" min="1" max="100" className="slider mt-4"
                            value={this.state.valueRange}
                            onChange={e => this.setState({ valueRange: (e.target.value) })}
                            onAfterChange={e => this.setState({ finalValueRange: (e.target.value) })} />
                        <input className="input_line" style={{ color: "white", backgroundColor: "#3A405E", width: "2vw" }} value={this.finalValueRange} />

                    </div>
                    <div className="d-flex flex-row justify-content-between mt-2 mb-1">
                        <div className="d-flex flex-column sideTitles">Border Radius Image</div>
                    </div>

                    <div className="d-flex flex-row justify-content-start mb-1">
                        <div className="radius_icon"></div>
                        <div className="rec_icon"></div>                        <input type="range" min="1" max="100" className="slider mt-4"
                            value={this.state.valueRange}
                            onChange={e => this.setState({ valueRange: (e.target.value) })}
                            onAfterChange={e => this.setState({ finalValueRange: (e.target.value) })} />
                        <input style={{ color: "white", backgroundColor: "#3A405E", width: "2vw" }} value={this.finalValueRange} />

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
export default connect(mapStateToProps)(Image_Editor)
