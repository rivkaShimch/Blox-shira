
import React, { Component } from 'react';
// import "../Button_Editor/node_modules/bootstrap/dist/css/bootstrap.min.css"
import lines from '../img/lines.png';
import Text from '../img/title_icon.png';
import onOff from '../img/button_icon.png';
import imageButton from '../img/imageButton.png';
import drawpolygonsolid from '../img/drawpolygonsolid.png';
import $ from 'jquery'
import sign from '../img/signature_icon.png'
import backgroundIcon from '../img/background_icon.svg';
import { connect } from 'react-redux';

import ReactTooltip from 'react-tooltip';
import {
    setDisplayEditor,

} from '../../redux/actions/componentsActions';

import {
    setTitlesCanvas,
    setButtonsCanvas,
    addElementsCanvas,
    setElementWidth,
    setTempElementImg,
    setTempFd,
    setCounterTitles,
    uploadImageTofileServer,
    setCounterButtons,


} from '../../redux/actions/canvasActions'
class Widget extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            img: ''
        };
        this.openTitleEditor = this.openTitleEditor.bind(this)
        this.openButtonEditor = this.openButtonEditor.bind(this)
        this.openImageEditor = this.openImageEditor.bind(this)
        this.openShapeEditor = this.openShapeEditor.bind(this)
        this.openBackgroundEditor = this.openBackgroundEditor.bind(this)

    }
    openTitleEditor() {

        if (this.props.displayComponents.display_main_option !== '') {
            this.props.dispatch(setDisplayEditor("title"))

            // let arr_length = (this.props.canvasDetails.titles).length + (this.props.canvasDetails.removed_titles).length
            const newTitle = {
                id: this.props.canvasDetails.counter_titles,
                x: this.props.canvasDetails.title_position_x + this.props.canvasDetails.counter_titles * 5,
                y: this.props.canvasDetails.title_position_y + this.props.canvasDetails.counter_titles * 5,
                width: 100,
                height: 30,
                text: 'TITLE 0' + this.props.canvasDetails.counter_titles,
                align: 'left',
                fill: 'black',
                fontSize: 24,
                display: true,
                preText: [],
                followText: []
            }
            let tempCount = this.props.canvasDetails.counter_titles + 1
            this.props.dispatch(setCounterTitles(tempCount))
            this.props.dispatch(setTitlesCanvas(newTitle))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        //add image after the image upload from the server
        if (prevProps.canvasDetails.temp_element_img !== this.props.canvasDetails.temp_element_img) {
            let arr_length = (this.props.canvasDetails.element_img).length

            const newImage = {
                // src: 'https://files.leader.codes/uploads/undefined/img/1605085195090__profil.png',
                src: this.props.canvasDetails.temp_element_img,
                id: arr_length,
                x: 100,
                y: 100,
                width: 100,
                height: 100
            }
            this.props.dispatch(addElementsCanvas(newImage))
        }
    }

    openButtonEditor() {
        if (this.props.displayComponents.display_main_option !== '') {
            this.props.dispatch(setDisplayEditor("button"))
            let arr_length_btn = (this.props.canvasDetails.buttons).length
            const newButton = {
                id: arr_length_btn,
                x: 10,
                y: 20,
                width: 100,
                height: 30,
                fill: 'rgb(212, 200, 200)',

                strokeWidth: '0',
                stroke: 'none',
                display: true,
                cornerRadius: '',
                shadowBlur: 0,
            }
            let tempCount = this.props.canvasDetails.counter_buttons + 1
            this.props.dispatch(setCounterButtons(tempCount))
            this.props.dispatch(setButtonsCanvas(newButton))
        }

    }
    openShapeEditor() {
        if (this.props.displayComponents.display_main_option !== '') {

            this.props.dispatch(setDisplayEditor("shape"))
        }

    }

    // openImageEditor = (event) => {
    //     this.props.dispatch(setDisplayEditor("image"))
    //     // שימוש בFileReader לצורך הצגה מקומית של התמונה, היות ולוקח כמה שניות עד שחוזר url מהשרת.
    //     const reader1 = new FileReader();
    //     const file = event;
    //     reader1.onloadend = () => {
    //         this.props.dispatch(setTempElementImg(reader1.result));

    //         let arr_length = (this.props.canvasDetails.element_img).length

    //         const newImage = {
    //             // src: 'https://files.leader.codes/uploads/undefined/img/1605085195090__profil.png',
    //             src: this.props.canvasDetails.temp_element_img,
    //             id: arr_length,
    //             x: 100,
    //             y: 100,
    //             width: 100,
    //             height: 100
    //         }
    //         this.props.dispatch(addElementsCanvas(newImage))
    //     }
    // }

    openImageEditor = (event) => {

        this.props.dispatch(setDisplayEditor("image"))
        // שימוש בFileReader לצורך הצגה מקומית של התמונה, היות ולוקח כמה שניות עד שחוזר url מהשרת.
        // const reader1 = new FileReader();
        const file = new FormData();
        file.append("file", event)


        // reader1.onloadend = () => {
        // }

        this.props.dispatch(uploadImageTofileServer(file))

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

            <div className="col-12 d-flex flex-column justify-content-start white_circleborder_background ">


                <p className="d-flex ml-3 mt-4"><b style={{ color: "#1C1D21", fontFamily: "Lato-Bold", fontSize: "18px" }}>Widget</b></p>
                <div className="d-flex flex-column justify-content-between wrap_flow_widget">


                    <div className="d-flex flex-row  widget_button " onClick={this.openTitleEditor}>
                        <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "15px", width: "13px" }} src={Text} alt="icon" /></div>
                        <div className="d-flex flex-col justify-content-between icon_text"> Title </div>
                    </div>
                    <div className="d-flex flex-row  widget_button ">
                        <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style" style={{ width: "50px" }}>
                            <img style={{ height: "17px", width: "17px" }} src={imageButton} alt="icon" /></div>
                        <div className="d-flex flex-col justify-content-between icon_text"> Image </div>
                        <input type="file" class="form-control-file" id="element_img" onChange={(e) => this.openImageEditor(e.target.files[0])} style={{ opacity: 0, zIndex: 2 }} />


                    </div>
                    {/* <div className="d-flex flex-row  widget_button ">

                        <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "15px", width: "21px" }} src={imageButton} alt="icon" /></div>
                        <div className="d-flex flex-col justify-content-between icon_text"> Image </div>
                        {
                            this.props.displayComponents.display_main_option !== '' ?
                                <input type="file" class="form-control-file" id="element_img" onClick={(e) => this.openImageEditor(e.target.files[0])} style={{ width: "80vw", position: "absolute", zIndex: 0, opacity: 0 }} />

                                : <span></span>
                        }
                    </div> */}

                </div>
                <div className="d-flex flex-row  widget_button " onClick={this.openButtonEditor}>
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

            </div>


            // <div className="wrap_flow_widget">
            //     <div className="d-flex flex-row  widget_button" onClick={this.openTitleEditor}>
            //         <div className="d-flex flex-column justify-content-center ml-4 "> <img className="imgDetails" src={Text} alt="icon" /></div>
            //         <div className="d-flex flex-col justify-content-between icon_text"> Title </div>
            //     </div>
            //     <div className="d-flex flex-row  widget_button " onClick={this.openImageEditor}>
            //         <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "14px", width: "17px" }} src={lines} alt="icon" /></div>
            //         <div className="d-flex flex-col justify-content-between icon_text"> Paragraph </div>
            //     </div>
            //     <div className="d-flex flex-row  widget_button ">
            //         <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style" style={{ width: "50px" }}>
            //             <img style={{ height: "17px", width: "17px" }} src={imageButton} alt="icon" /></div>
            //         <div className="d-flex flex-col justify-content-between icon_text"> Image </div>
            //         <input type="file" class="form-control-file" id="element_img" onChange={(e) => this.openImageEditor(e.target.files[0])} style={{ opacity: 0, zIndex: 2 }} />


            //     </div>
            //     <div className="d-flex flex-row  widget_button " onClick={this.openBackgroundEditor}>
            //         <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img className="imgDetails" style={{ height: "17px", width: "17px" }} id="backButton" src={imageButton} alt="icon" /></div>
            //         <div className="d-flex flex-col justify-content-between icon_text"> Background </div>
            //     </div>

            //     <div className="d-flex flex-row  widget_button " onClick={this.openBackgroundEditor}>
            //         <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img className="imgDetails" style={{ height: "17px", width: "17px" }} id="backButton" src={imageButton} alt="icon" /></div>
            //         <div className="d-flex flex-col justify-content-between icon_text"> Background </div>
            //     </div>
            //     <div className="d-flex flex-row  widget_button " onClick={this.openImageEditor}>
            //         <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img className="imgDetails" src={onOff} alt="icon" /></div>
            //         <div className="d-flex flex-col justify-content-between icon_text"> Button </div>
            //     </div>
            //     <div className="d-flex flex-row  widget_button " onClick={this.openImageEditor}>
            //         <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "14px", width: "17px" }} src={drawpolygonsolid} alt="icon" /></div>
            //         <div className="d-flex flex-col justify-content-between icon_text"> Logo </div>
            //     </div>

            //     <div className="d-flex flex-row  widget_button " onClick={this.openImageEditor}>
            //         <div className="d-flex flex-column justify-content-center ml-4 mr-3 icon_style"> <img style={{ height: "14px", width: "17px" }} src={sign} alt="icon" /></div>
            //         <div className="d-flex flex-col justify-content-between icon_text"> Signature </div>
            //     </div>

            //     <div className="d-flex flex-row  widget_button " onClick={this.openShapeEditor}>
            //         <div className="d-flex flex-column justify-content-center ml-4 mr-3 "> <img className="imgDetails" src={onOff} alt="icon" /></div>
            //         <div className="d-flex flex-col justify-content-between icon_text">shape!כפתור זמני </div>
            //     </div>

            // </div> 

            // </div >
        );
    }
}

function mapStateToProps(state) {
    // console.log("state   " + state.displayComponents.displayComponents)
    return {
        displayComponents: state.displayComponents.displayComponents,
        canvasDetails: state.canvasDetails.canvasDetails
    };
}
export default connect(mapStateToProps)(Widget)
// export default (Widget)
