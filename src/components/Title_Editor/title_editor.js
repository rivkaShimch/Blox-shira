import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styles from './title_editor.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Arrow_down from "../img/arrow_down.png";
import Switch from "react-switch";
import Lion from "../img/lion.png";
// import ToggleSwitch from 'toggle-switch-rn'
import Switch from "./Switch";



export default class Title_Editor extends Component {
    constructor(prop) {
        super(prop);

        this.state = { checked: false};
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(checked) {
        this.setState({ checked, onColor });
    }
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

    //     }


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
                <div className="d-flex flex-row justify-content-around p-2">
                    <div className="d-flex flex-column col sideTitles">Title Name</div>
                    <div className="mr-5 mt-1"> <input type="checkbox" checked /><div className="d-flex flex-column slider round"></div></div>
                </div>

                {/* <div class="Title">
                    <span class="TitleContent">Category Color</span>
                    {/* <div> <canvas id="colorCanvasCategory" width="100%" height="100%"></canvas>   </div> */}


                {/* <label class="switch">
  <input type="checkbox" checked/>
  <span className="slider round"></span>
</label> */}

                <label>

                    <Switch
                        // onColor={this.state.onColor}
                        // onAuxClick={this.state.onColor}
                        onChange={this.handleChange}
                        checked={this.state.checked}
                    //   style={{ height: "100px", width: "100px", backgroundColor: "yellow" }} 
                    />
                </label>

                {/* <ToggleSwitch
                    isOn={false}
                    onColor="green"
                    offColor="red"
                    label="Example label"
                    labelStyle={{ color: "black", fontWeight: "900" }}
                    size="large"
                    onToggle={isOn => console.log("changed to : ", isOn)}
                /> */}
            </div>
            </>
        );
    }

}


