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
import { connect } from 'react-redux';


import {
    setDisplayTitleEditor,
    setDisplayEditor,
    setDisplayImageEditor
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

    }
    openTitleEditor() {
        this.props.dispatch(setDisplayEditor("title"))
        this.props.dispatch(setTitlesCanvas("TITLE 01"))


        console.log("open title editor " + this.props.displayComponents.display_title_editor)
    }
    openImageEditor() {
        this.props.dispatch(setDisplayEditor("image"))
    }
    sectionFunc() {



    }

    render() {
        return (

            <div className="col-12 d-flex flex-column justify-content-start white_circleborder_background">


                <p className="d-flex ml-3 mt-4"><b>Widget</b></p>

                <div className="d-flex flex-row  widget_button " onClick={this.openTitleEditor}>
                    <div className="d-flex flex-column justify-content-center ml-4 mr-3 "> <img className="imgDetails" src={Text} alt="icon" /></div>
                    <div className="d-flex flex-col justify-content-between icon_text"> Title </div>
                </div>

                <div className="d-flex flex-row  widget_button " onClick={this.openImageEditor}>
                    <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "17px", width: "17px" }} src={imageButton} alt="icon" /></div>
                    <div className="d-flex flex-col justify-content-between icon_text"> Image </div>
                </div>
                <div className="d-flex flex-row  widget_button " onClick={this.openTitleEditor}>
                    <div className="d-flex flex-column justify-content-center ml-4 mr-3 "> <img className="imgDetails" src={Text} alt="icon" /></div>
                    <div className="d-flex flex-col justify-content-between icon_text"> Title </div>
                </div>

                <div className="d-flex flex-row  widget_button " onClick={this.openTitleEditor}>
                    <div className="d-flex flex-column justify-content-center ml-4 mr-3 "> <img className="imgDetails" src={onOff} alt="icon" /></div>
                    <div className="d-flex flex-col justify-content-between icon_text"> Button </div>
                </div>
                <div className="d-flex flex-row  widget_button " onClick={this.openTitleEditor}>
                    <div className="d-flex flex-column justify-content-center ml-4 mr-3 "> <img className="imgDetails" src={Text} alt="icon" /></div>
                    <div className="d-flex flex-col justify-content-between icon_text"> Title </div>
                </div>

                <div className="d-flex flex-row  widget_button " onClick={this.openTitleEditor}>
                    <div className="d-flex flex-column justify-content-center ml-4 mr-3 "> <img className="imgDetails" src={onOff} alt="icon" /></div>
                    <div className="d-flex flex-col justify-content-between icon_text"> Button </div>
                </div>
                <div className="d-flex flex-row  widget_button " onClick={this.openTitleEditor}>
                    <div className="d-flex flex-column justify-content-center ml-4 mr-3 "> <img className="imgDetails" src={Text} alt="icon" /></div>
                    <div className="d-flex flex-col justify-content-between icon_text"> Title </div>
                </div>

                <div className="d-flex flex-row  widget_button " onClick={this.openTitleEditor}>
                    <div className="d-flex flex-column justify-content-center ml-4 mr-3 "> <img className="imgDetails" src={onOff} alt="icon" /></div>
                    <div className="d-flex flex-col justify-content-between icon_text"> Button </div>
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
