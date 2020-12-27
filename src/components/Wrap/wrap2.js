
import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import axios from 'axios';
import { Link, withRouter, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
// import './wrap.css';
import profil from './assets/profil.png';

import ReactTooltip from 'react-tooltip';
import logo1 from '../img/logo1.png'
import thumbtack from '../img/thumbtack-solid.png'
import thumbtack2 from '../img/thumbtack-solid-stand.png'


import Canvas from '../canvas';
import Edit_choice from '../Edit_choice/edit_choice';
import Title_Editor from '../Title_Editor/title_editor';
import Button_Editor from '../Button_Editor/button_editor';
import Image_Editor from '../Image_Editor/image_editor';
import Shape_Editor from '../Shape_Editor/shape_editor';
import TemplateCards from '../Templates-Page/templates-page';
import Background_Editor from '../Background_Editor/background_editor';
// import '../Button_Editor/node_modules/semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux';
import { logOut } from '../../services/firebase'

import {
    addTemplateImage,
    setName,
    setCanvasWidth_,
    setCanvasHeight_,
    setSliderInputInScale
} from '../../redux/actions/canvasActions'



import {
    setDisplayEditor,
    setDisplayMainOption,
    setDisplayEditChoice,

} from '../../redux/actions/componentsActions'




class Wrap2 extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
        };
        this.onKeyTemplateName = this.onKeyTemplateName.bind(this)
        this.onChangeCanvaSizeSlider = this.onChangeCanvaSizeSlider.bind(this)
        // this.zoomFunc = this.zoomFunc.bind(this)
    }
    // zoomFunc = (e) => {
    //     const temp = e.target.value / 100;
    //     console.log("enter to zoomFunc " + e.target.value + " " + temp)


    // }
    onChangeCanvaSizeSlider = (e) => {
        const temp = e.target.value;
        console.log("enter to onChangeCanvaSizeSlider " + e.target.value + " " + temp)
        this.props.dispatch(setSliderInputInScale(temp))

        const temp_w = this.props.canvasDetails.width_canva * temp;
        console.log(temp_w)

        if (temp_w > 700) {
            this.props.dispatch(setDisplayEditChoice("none"))
            console.log("  this.props.dispatch(setDisplayEditChoice(false))")
        }
        if (temp_w <= 700) {
            console.log("  this.props.dispatch(setDisplayEditChoice(true))")

            this.props.dispatch(setDisplayEditChoice("block"))
        }

        // this.props.dispatch(setCanvasWidth_(temp))
        // this.props.dispatch(setCanvasHeight_(temp))


    }


    onKeyTemplateName = (e) => {
        this.props.dispatch(setName(e.target.value))
        // console.log("onKeyTemplateName " + this.props.canvasDetails.name)
    }
    render() {
        const { classes } = this.props;
        const open = Boolean(this.state.anchorEl)
        const header_fashion_media = false

        return (
            <div style={{ marginLeft: "4%", marginTop: "4%" }} >

                {
                    this.props.displayComponents.display_main_option === '' ?
                        <div className="d-flex flex-row justify-content-start col-7" style={{ marginLeft: "-40px", minHeight: "600px" }}>

                            <div class="d-flex flex-column col-5" id="edit_choice" >
                                <Edit_choice />
                            </div>
                            <div id="demo_canva" className="d-flex flex-column">
                                <img class="style_dmoCanva mr-5 d-flex flex-column" src={require('./assets/tellYourStory.jpg')} style={{ marginTop: "28vh", marginLeft: "7vw", width: "650px", height: "400px", border: "3px dashed #D6CBE3" }}

                                />

                            </div>

                        </div>
                        : <span></span>
                }

                {
                    this.props.displayComponents.display_main_option === 'canva' ?
                        <div className="d-flex flex-row  justify-content-start col-11" style={{ marginLeft: "-40px" }}>
                            <div className="d-flex flex-column col-3" id="edit_choice" >
                                <Edit_choice />
                            </div>
                            <div className="d-flex flex-column col-6  justify-content-center  align-items-center">
                                <div className="d-flex flex-row align-content-space-between align-items-center" style={{ width: this.props.canvasDetails.width_canva, height: this.props.canvasDetails.height_canva }}>
                                    <Canvas />
                                </div>
                            </div>

                            <div className="d-flex flex-row flex-end sl" style={{ width: "70%" }}>
                                <input type="range" min="1" max="3" value="1" step="0.01" className="col-8 slider ml-6"
                                    // {this.prop.canvasDetails.initial_canvas_width} 
                                    onChange={this.onChangeCanvaSizeSlider}
                                />
                            </div>

                            {/* <div className="d-flex flex-row " style={{ width: "70%" }}>
                                    <input type="range" min="100" max="150" className="col-12 slider mt-3"

                                        onChange={this.zoomFunc}
                                    />
                                </div> */}

                        </div>

                        : <span></span>
                }
                {
                    this.props.displayComponents.display_main_option === 'cards' ?
                        <div className="d-flex flex-row justify-content-between " style={{ padding: "10px" }} >
                            <TemplateCards />
                        </div>
                        : <span></span>
                }



            </div>
        )

    };
}
function mapStateToProps(state) {
    // console.log("state   " + state.displayComponents.displayComponents)
    return {
        displayComponents: state.displayComponents.displayComponents,
        canvasDetails: state.canvasDetails.canvasDetails,
        user: state.user.user
    };
}
export default connect(mapStateToProps)(withRouter(Wrap2))
