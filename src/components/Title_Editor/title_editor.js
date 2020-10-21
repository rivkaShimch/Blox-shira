
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
    }


    handleChange(checked) {
        this.setState({ checked });
    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    render() {

        return (
            <> <div className="col-12 d-flex flex-column justify-content-start">

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
                <div className="custom-control custom-switch nearLable">
                    <input type="checkbox"
                        className="custom-control-input"
                        id="tb_full_name" checked=""
                        oninput="check_full_name(this.checked)" />
                    <label class="custom-control-label" for="tb_full_name"></label>
                </div>



            </div>




            </>
        );
    }

}

export default Title_Editor
















    //             <HuePicker width="19vh" height="0.5vh" pointer={CustomPointer} color={this.state.background}
    //                 onChangeComplete={this.handleChangeComplete} />
    //    <div className="d-flex flex-row justify-content-start">
    //             <div id="configurator" className="card-body p-2">
    //                 <label>size</label>
    //                 <input type="range" className="custom-range" min="0" max="100" id="buttonSize" value="100" />
    //                 <button className="btn btn-sm btn-dir buttonDir" id="start"><span class="material-icons">
    //                     format_align_left
    //     </span></button>


    //                 <button className="btn btn-sm btn-dir buttonDir" id="center"> <span class="material-icons">
    //                     format_align_center
    //     </span></button>


    //                 <button className="btn btn-sm btn-dir buttonDir" id="end"><span class="material-icons">
    //                     format_align_right
    //     </span></button>
    //                 <div className="d-flex">
    //                     <label for="bg_color_button">background color</label>
    //                     <input type="color" className="ml-auto" id="bg_color_button" name="favcolor" value="#A66DFF" /><br>
    //     </div>

    //                     <label for="button_value">button_value</label>
    //                     <input className="form-control" type="text" id="button_value" value="submit" />
    //                     <div className="d-flex">
    //                         <label for="color_value_button">color value color</label>
    //                         <input type="color" className="ml-auto" id="color_value_button" name="favcolor" value="#ffffff" /><br>
    //     </div>

    //                         <h5 className="mt-3">border</h5>

    //                         <label for="radiusButton">radius</label>
    //                         <input type="range" className="custom-range" min="0" max="1.2" step="3" id="radiusButton" value="0.7" />

    //                         <div claclassNamess="d-flex">
    //                             <label for="color_border_button">color value color</label>
    //                             <input type="color" class="ml-auto" id="color_border_button" name="favcolor" value="#A66DFF" /><br>
    //                         </div>

    //                             <label for="widthBorderButton">width</label>
    //                             <input type="range" className="custom-range" min="0" max="3" id="widthBorderButton" value="5" />
    //                         </div>





