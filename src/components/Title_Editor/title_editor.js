
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





    // this.initColorPickercategoryName = this.initColorPickercategoryName.bind(this)


    // finitColorPickercategoryName() {
    //     let canvas = document.getElementById('colorCanvasCategory');
    //     let canvasContext = canvas.getContext('2d');

    //     let gradient = canvas.getContext('2d').createLinearGradient(0, 0, canvas.width, 0)
    //     gradient.addColorStop(0, '#ff0000')
    //     gradient.addColorStop(1 / 6, '#ffff00')
    //     gradient.addColorStop((1 / 6) * 2, '#00ff00')
    //     gradient.addColorStop((1 / 6) * 3, '#00ffff')
    //     gradient.addColorStop((1 / 6) * 4, '#0000ff')
    //     gradient.addColorStop((1 / 6) * 5, '#ff00ff')
    //     gradient.addColorStop(1, '#ff0000')
    //     canvas.getContext('2d').fillStyle = gradient
    //     canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height)

    //     gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, canvas.height)
    //     gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
    //     gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
    //     gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
    //     canvas.getContext('2d').fillStyle = gradient
    //     canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height)

    //     gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, canvas.height)
    //     gradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
    //     gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)')
    //     gradient.addColorStop(1, 'rgba(0, 0, 0, 1)')
    //     canvas.getContext('2d').fillStyle = gradient
    //     canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height)


    //     canvas.onClick = function (e) {
    //         console.log()
    //         let imgData = canvasContext.getImageData((e.offsetX / canvas.clientWidth) * canvas.width, (e.offsetY / canvas.clientHeight) * canvas.height, 1, 1)
    //         let rgba = imgData.data;
    //         let color = "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")";
    //         //   let colorChange="%c" + color, "color:" + color
    //         console.log("%c" + color, "color:" + color)
    //         //   $('#colorshow').css('background-color', `${$("#colorload").val()}`);
    //         //   $('.box_blog').css('background-color', `${$("#colorload").val()}`);
    //         document.getElementById('categoryName').css("color", color)
    //         };
    //     }
    //    componentDidMount() {
    //         initColorPickercategoryName();


    render() {


        return (
            <> <div className="col-12 d-flex flex-column justify-content-start">

                {/* <div className="col-12 d-flex flex-row justify-content-between">
                    <div className="sideLittleDetail">images</div>
                    <img src={Arrow_down} style={{ height: "1vh", width: "1.5vh" }} alt="icon" />
                </div> */}
                <div className="d-flex flex-row justify-content-start">
                    <div className="sideLittleTitles">Title setting</div>
                </div>
                <div className="d-flex flex-row justify-content-start">
                    <div className="sideLittleTitles">Title setting</div>
                    <input type="range" class="form-control-range range_style" name="range" RangeSlider="60px"
                    // onChange={changeEvent => this.setState({ value: changeEvent.target.value })}
                    />
                </div>
                <div className="d-flex flex-row justify-content-around p-2">
                    <div className="d-flex flex-column col sideTitles">Title Name</div>
                    <Switch />
                </div>
                <HuePicker width="19vh" height="0.5vh" pointer={CustomPointer} color={this.state.background}
                    onChangeComplete={this.handleChangeComplete} />



                <div id="configurator" className="card-body p-2">
                    <label>size</label>
                    <input type="range" className="custom-range" min="0" max="100" id="buttonSize" value="100" />
                    <button className="btn btn-sm btn-dir buttonDir" id="start"><span class="material-icons">
                        format_align_left
        </span></button>


                    <button className="btn btn-sm btn-dir buttonDir" id="center"> <span class="material-icons">
                        format_align_center
        </span></button>


                    <button className="btn btn-sm btn-dir buttonDir" id="end"><span class="material-icons">
                        format_align_right
        </span></button>
                    <div className="d-flex">
                        <label for="bg_color_button">background color</label>
                        <input type="color" className="ml-auto" id="bg_color_button" name="favcolor" value="#A66DFF" /><br>
        </div>

                        <label for="button_value">button_value</label>
                        <input className="form-control" type="text" id="button_value" value="submit" />
                        <div className="d-flex">
                            <label for="color_value_button">color value color</label>
                            <input type="color" className="ml-auto" id="color_value_button" name="favcolor" value="#ffffff" /><br>
        </div>

                            <h5 className="mt-3">border</h5>

                            <label for="radiusButton">radius</label>
                            <input type="range" className="custom-range" min="0" max="1.2" step="3" id="radiusButton" value="0.7" />

                            <div claclassNamess="d-flex">
                                <label for="color_border_button">color value color</label>
                                <input type="color" class="ml-auto" id="color_border_button" name="favcolor" value="#A66DFF" /><br>
         </div>

                                <label for="widthBorderButton">width</label>
                                <input type="range" className="custom-range" min="0" max="3" id="widthBorderButton" value="5" />
                            </div>







                            {/* <RangeSlider
                    value={this.state.value}
                    onChange={changeEvent => this.setState({ value: changeEvent.target.value })} */}
                />
                {/* <div class="Title">
                    <span class="TitleContent">Category Color</span>
                    {/* <div> <canvas id="colorCanvasCategory" width="100%" height="100%"></canvas>   </div> */}


                            {/* <label class="switch">
  <input type="checkbox" checked/>
  <span className="slider round"></span>
</label> */}



                            {/* <ToggleSwitch
                    isOn={false}
                    onColor="green"
                    offColor="red"
                    label="Example label"
                    labelStyle={{ color: "black", fontWeight: "900" }}
                    size="large"
                    onToggle={isOn => console.log("changed to : ", isOn)}
                /> */}
                        </div >
            </>
        );
    }

}

export default Title_Editor
