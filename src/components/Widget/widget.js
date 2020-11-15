import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import lines from '../img/lines.png';
import Text from '../img/title_icon.png';
import onOff from '../img/button_icon.png';
import imageButton from '../img/imageButton.png';
import drawpolygonsolid from '../img/drawpolygonsolid.png';
import sign from '../img/signature_icon.png'
import backgroundIcon from '../img/background_icon.svg';
import { connect } from 'react-redux';


import {
    setDisplayEditor,
} from '../../redux/actions/componentsActions';

import {
    setTitlesCanvas,
    addElementsCanvas
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
        this.openBackgroundEditor = this.openBackgroundEditor.bind(this)

    }
    openTitleEditor() {

        if (this.props.displayComponents.display_main_option !== '') {
            this.props.dispatch(setDisplayEditor("title"))
            let arr_length = (this.props.canvasDetails.titles).length + (this.props.canvasDetails.removed_titles).length
            const newTitle = {
                id: arr_length,
                x: this.props.canvasDetails.title_position_x,
                y: 10,
                width: 100,
                height: 30,
                text: 'TITLE 0' + arr_length,
                align: 'left',
                fill: 'black',
                fontSize: 24
            }

            this.props.dispatch(setTitlesCanvas(newTitle))


            console.log("open title editor " + this.props.displayComponents.display_title_editor)
        }
    }




    openImageEditor(e) {
        if (this.props.displayComponents.display_main_option !== '') {
            this.props.dispatch(setDisplayEditor("image"))
            let arr_length = (this.props.canvasDetails.element_img).length
            const newImage = {
                src: URL.createObjectURL(e.target.files[0]),
                id: arr_length,
                x: 100,
                y: 100,
                width: 100,
                height: 100
            }
            this.props.dispatch(addElementsCanvas(newImage))
        }
    }
    openShapeEditor() {
        if (this.props.displayComponents.display_main_option !== '') {
            this.props.dispatch(setDisplayEditor("shape"))
        }
    }

    openBackgroundEditor() {
        if (this.props.displayComponents.display_main_option !== '') {
            this.props.dispatch(setDisplayEditor("background"))
        }
    }

    render() {
        return (
            <div className="col-12 d-flex flex-column justify-content-start white_circleborder_background">


                <p className="d-flex ml-3 mt-4"><b style={{ color: "#1C1D21", fontFamily: "Lato-Bold", fontSize: "18px" }}>Widget</b></p>
                <div className="d-flex flex-column justify-content-between wrap_flow_widget">


                    <div className="d-flex flex-row  widget_button " onClick={this.openTitleEditor}>
                        <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "15px", width: "13px" }} src={Text} alt="icon" /></div>
                        <div className="d-flex flex-col justify-content-between icon_text"> Title </div>
                    </div>

                    <div className="d-flex flex-row  widget_button " onClick={this.openImageEditor}>

                        <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "15px", width: "21px" }} src={imageButton} alt="icon" /></div>
                        <div className="d-flex flex-col justify-content-between icon_text"> Image </div>
                        {
                            this.props.displayComponents.display_main_option !== '' ?
                                <input type="file" class="form-control-file" id="element_img" style={{ width: "80vw", position: "absolute", zIndex: 0, opacity: 1 }} />

                                : <span></span>
                        }
                    </div>
                    <div className="d-flex flex-row  widget_button " >
                        <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "15px", width: "21px" }} src={onOff} alt="icon" /></div>
                        <div className="d-flex flex-col justify-content-between icon_text"> Button </div>
                    </div>
                    <div className="d-flex flex-row  widget_button ">
                        <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "15px", width: "17px", marginLeft: "3px" }} src={sign} alt="icon" /></div>
                        <div className="d-flex flex-col justify-content-between icon_text"> Signature </div>
                    </div>
                    <div className="d-flex flex-row  widget_button " onClick={this.openBackgroundEditor}>
                        <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "15px", width: "13px" }} src={drawpolygonsolid} alt="icon" /></div>
                        <div className="d-flex flex-col justify-content-between icon_text"> Background </div>
                    </div>
                    <div className="d-flex flex-row  widget_button " onClick={this.openShapeEditor}>
                        <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "15px", width: "13px" }} src={drawpolygonsolid} alt="icon" /></div>
                        <div className="d-flex flex-col justify-content-between icon_text"> Shape </div>
                    </div>
                    <div className="d-flex flex-row  widget_button " >
                        <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "15px", width: "21px" }} src={onOff} alt="icon" /></div>
                        <div className="d-flex flex-col justify-content-between icon_text"> Button </div>
                    </div>
                    <div className="d-flex flex-row  widget_button " >
                        <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "15px", width: "21px" }} src={onOff} alt="icon" /></div>
                        <div className="d-flex flex-col justify-content-between icon_text"> Button </div>
                    </div>

                </div>


                {/* 

                <div className="wrap_flow_widget">
                    <div className="d-flex flex-row  widget_button" onClick={this.openTitleEditor}>
                        <div className="d-flex flex-column justify-content-center ml-4 "> <img className="imgDetails" src={Text} alt="icon" /></div>
                        <div className="d-flex flex-col justify-content-between icon_text"> Title </div>
                    </div>
                    <div className="d-flex flex-row  widget_button " onClick={this.openImageEditor}>
                        <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "14px", width: "17px" }} src={lines} alt="icon" /></div>
                        <div className="d-flex flex-col justify-content-between icon_text"> Paragraph </div>
                    </div>
                    <div className="d-flex flex-row  widget_button ">
                        <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img className="imgDetails" style={{ height: "17px", width: "17px" }} id="backButton" src={imageButton} alt="icon" /></div>
                        <div className="d-flex flex-col justify-content-between icon_text"> image </div>
                        <input type="file" class="form-control-file" id="element_img" onChange={this.openImageEditor} style={{ opacity: 0, zIndex: 2 }} />

                    </div>
                    <div className="d-flex flex-row  widget_button " onClick={this.openBackgroundEditor}>
                        <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img className="imgDetails" style={{ height: "17px", width: "17px" }} id="backButton" src={imageButton} alt="icon" /></div>
                        <div className="d-flex flex-col justify-content-between icon_text"> Background </div>
                    </div>

                    <div className="d-flex flex-row  widget_button " onClick={this.openBackgroundEditor}>
                        <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img className="imgDetails" style={{ height: "17px", width: "17px" }} id="backButton" src={imageButton} alt="icon" /></div>
                        <div className="d-flex flex-col justify-content-between icon_text"> Background </div>
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

                </div> */}

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
