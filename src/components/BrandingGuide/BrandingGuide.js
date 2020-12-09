import React, { Component, useState } from 'react';
import {

    setTitleBrandColor,
    setBackgroundBrandColor,
    setShapeBrandColor


} from '../../redux/actions/canvasActions'

import "bootstrap/dist/css/bootstrap.min.css";
// import styles from './MediaAndSection.css'
import { Link } from 'react-router-dom';
import circle from '../img/circle.PNG';
import { connect } from 'react-redux';
// import { Twitter } from 'react-color';
import { TwitterPicker } from 'react-color';
import { BrandingWatermark } from '@material-ui/icons';
class BrandingGuide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exsist: false,
            arrbackground: [],
        }
        this.onChangeColor1 = this.onChangeColor1.bind(this)

    };
    onChangeColor1(color) {



        if (this.props.displayComponents.display_editor === "title")
            this.props.dispatch(setTitleBrandColor((color), this.props.canvasDetails.titles_i))
        if (this.props.displayComponents.display_editor === "background")
            this.props.dispatch(setBackgroundBrandColor((color), this.props.canvasDetails.backgroundColor))
        if (this.props.displayComponents.display_editor === "shape")
            this.props.dispatch(setShapeBrandColor((color), this.props.canvasDetails.shapes_i))


    };

    render() {
        return (

            <div className="d-flex flex-wrap scrollbar white_circleborder_background ml-2" >
                {this.props.canvasDetails.brandColors.map(item => {
                    // if (item.id == -1)
                    // this.state.arrbackground = this.state.arrbackground.concat(item)
                    // if (item.id != -1)
                    return <div
                        style={{ borderRadius: "5px", boxShadow: "2px 2px 2px #888888", margin: "2px", marginTop: "1px", marginBottom: "1px", height: "30px", width: "30px", backgroundColor: item.color }}
                        onClick={() => this.onChangeColor1(item.color)}
                    ></div>


                })}
                {/* <br /> */}
                {/* <div>רקע</div> */}
                {/* 
                {this.state.arrbackground.map(item => {

                    return <div
                        style={{ border: "black solid 1px", borderRadius: "5px", margin: "2px", marginTop: "1px", marginBottom: "1px", height: "30px", width: "30px", backgroundColor: item.color }}
                        onClick={() => this.onChangeColor1(item.color)}
                    ></div>


                })} */}



            </div>


        );
    }
}


function mapStateToProps(state) {
    // console.log("state canvas  " + state.canvasDetails.canvasDetails)
    return {
        canvasDetails: state.canvasDetails.canvasDetails,
        displayComponents: state.displayComponents.displayComponents,

    };
}
export default connect(mapStateToProps)(BrandingGuide)



