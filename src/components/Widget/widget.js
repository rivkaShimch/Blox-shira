import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import Edit_choice from '../Edit_choice/edit_choice';
// import { FaRocket } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Scrollspy from 'react-scrollspy';
import lines from '../img/lines.png';
import Text from '../img/text.png';
// import { Circle } from 'react-konva';
import onOff from '../img/onOff.png';
import imageButton from '../img/imageButton.png';
import drawpolygonsolid from '../img/drawpolygonsolid.png';
import sign from '../img/sign.png';

import { connect } from 'react-redux';


import {
    setDisplayTitleEditor,
    setDisplayEditor,
    setDisplayImageEditor,
    setDisplayShapeEditor
} from '../../redux/actions/componentsActions';

import {
    setTitlesCanvas
} from '../../redux/actions/canvasActions'

class Widget extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {

        };
        this.openTitleEditor = this.openTitleEditor.bind(this)
        this.openImageEditor = this.openImageEditor.bind(this)
        this.openShapeEditor = this.openShapeEditor.bind(this)
    }
    openTitleEditor() {
        this.props.dispatch(setDisplayEditor("title"))
        let arr_length = (this.props.canvasDetails.titles).length
        const newTitle = {
            id: arr_length,
            x: this.props.canvasDetails.title_position_x,
            y: 10,
            width: 100,
            height: 100,
            text: 'TITLE 0' + arr_length,
            align: 'left',
            fill: 'black',
            fontSize: 24,
            // x: 10,
            // y: 10,
            // width: 100,
            // height: 100,
            // id: arr_length,
            // text: 'TITLE 0' + arr_length,
            // align: 'left',
            // fill: 'black',
            // fontSize: '24'
        }
        this.props.dispatch(setTitlesCanvas(newTitle))


        console.log("open title editor " + this.props.displayComponents.display_title_editor)
    }
    openImageEditor() {
        this.props.dispatch(setDisplayEditor("image"))
    }
    openShapeEditor() {
        this.props.dispatch(setDisplayEditor("shape"))
    }
    sectionFunc() {



    }

    render() {
        return (

            <div className="col-12 d-flex flex-column justify-content-start white_circleborder_background">


                <p className="d-flex ml-3 mt-4"><b>Widget</b></p>

                <div className="d-flex flex-row  widget_button" onClick={this.openTitleEditor}>
                    <div className="d-flex flex-column justify-content-center ml-4 mr-3 "> <img className="imgDetails" src={Text} alt="icon" /></div>
                    <div className="d-flex flex-col justify-content-between icon_text"> Title </div>
                </div>
                <div className="d-flex flex-row  widget_button " onClick={this.openImageEditor}>
                    <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "14px", width: "17px" }} src={lines} alt="icon" /></div>
                    <div className="d-flex flex-col justify-content-between icon_text"> Paragraph </div>
                </div>
                <div className="d-flex flex-row  widget_button " onClick={this.openImageEditor}>
                    <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "17px", width: "17px" }} src={imageButton} alt="icon" /></div>
                    <div className="d-flex flex-col justify-content-between icon_text"> Image </div>
                </div>

                <div className="d-flex flex-row  widget_button " onClick={this.openImageEditor}>
                    <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img className="imgDetails" src={onOff} alt="icon" /></div>
                    <div className="d-flex flex-col justify-content-between icon_text"> Button </div>
                </div>
                <div className="d-flex flex-row  widget_button " onClick={this.openImageEditor}>
                    <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "14px", width: "17px" }} src={drawpolygonsolid} alt="icon" /></div>
                    <div className="d-flex flex-col justify-content-between icon_text"> Logo </div>
                </div>

                <div className="d-flex flex-row  widget_button " onClick={this.openImageEditor}>
                    <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "14px", width: "17px" }} src={sign} alt="icon" /></div>
                    <div className="d-flex flex-col justify-content-between icon_text"> Signature </div>
                </div>

                <div className="d-flex flex-row  widget_button " onClick={this.openShapeEditor}>
                    <div className="d-flex flex-column justify-content-center ml-4 mr-3 "> <img className="imgDetails" src={onOff} alt="icon" /></div>
                    <div className="d-flex flex-col justify-content-between icon_text">shape!כפתור זמני </div>
                </div>


            </div >
        );
    }
}

function mapStateToProps(state) {
    console.log("state   " + state.displayComponents.displayComponents)
    return {
        displayComponents: state.displayComponents.displayComponents,
        canvasDetails: state.canvasDetails.canvasDetails
    };
}
export default connect(mapStateToProps)(Widget)
// export default (Widget)
