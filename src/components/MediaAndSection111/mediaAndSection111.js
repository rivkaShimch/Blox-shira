import React, { Component, useState } from 'react';


import "bootstrap/dist/css/bootstrap.min.css";
// import styles from './MediaAndSection.css'
import { Link } from 'react-router-dom';
import Edit_choice from '../Edit_choice/edit_choice';

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
// import ContextAwareToggle from 'react-bootstrap/ContextAwareToggle';
import 'semantic-ui-css/semantic.min.css'
import { Container, Divider } from 'semantic-ui-react'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import section1 from '../img/section1.PNG';
import section2 from '../img/section2.PNG';
import section3 from '../img/section3.PNG';
import Scrollspy from 'react-scrollspy';

import {
    setTitlesCanvasServer,
    setButtonsCanvasServer,
    setShapesCanvasServer,

    setElementsCanvasServer,
    setBackgroundColor,
    setUpdateTitlesCanvas,
    getFirstItem
} from '../../redux/actions/canvasActions'

import {
    setDisplayMainOption
} from '../../redux/actions/componentsActions'


import { connect } from 'react-redux';
class MediaAndSection111 extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            display_media: true,
            color_media: '#A66DFF',
            color_section: 'gray'
        };
        this.mediaFunc = this.mediaFunc.bind(this)
        this.sectionFunc = this.sectionFunc.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
    }
    mediaFunc() {
        this.setState({ display_media: true, color_media: "#A66DFF" })
        this.setState({ color_section: "gray" })

    }
    sectionFunc() {
        this.setState({ display_media: false, color_media: "gray" })
        this.setState({ color_section: "#A66DFF" })

    }
    chooseCategory(type_, category_, width_, height_) {
        console.log("details of facebook" + type_ + " " + category_ + " " + width_ + " " + height_)
        this.props.dispatch(setTitlesCanvasServer([]))
        this.props.dispatch(setButtonsCanvasServer([]))
        this.props.dispatch(setShapesCanvasServer([]))
        this.props.dispatch(setElementsCanvasServer([]))
        this.props.dispatch(setBackgroundColor('white'))
        this.props.dispatch(setDisplayMainOption('canva'))

    }
    render() {
        return (
            <div className="container-fluid d-flex flex-column justify-content-around" style={{ paddingLeft: "0px", paddingRight: "0px" }} >

                <div className="d-flex flex-row justify-content-between navTitle tt ">
                    {/* <Navbar className="topnav " >

                        <Nav className="mr-auto " >

                            <Nav.Link className="navTitle a" href="" onClick={this.mediaFunc} style={{ color: this.state.color_media }}>Media</Nav.Link>
                            <Nav.Link className="navTitle a" href="" onClick={this.sectionFunc} style={{ color: this.state.color_section }}>Section</Nav.Link><Divider />
                        </Nav>

                    </Navbar> */}
                    <div className="col rr" onClick={this.mediaFunc}>Media</div>
                    <div className="col rr" onClick={this.sectionFunc}>Section</div>
                </div>

                <div className="d-flex flex-row justify-content-around ">
                    {this.state.display_media ?
                        <div id="media" className="d-flex flex-column scrollbar" >

                            <div className="d-flex flex-row justify-content-around" >
                                <div onClick={() => this.chooseCategory("web", "post_facebook", 500, 500)}>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>Logo</div>
                                </div>
                                <div onClick={() => this.chooseCategory("web", "post_facebook", 788, 940)}>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>Poster</div>
                                </div>
                                <div onClick={() => this.chooseCategory("web", "post_facebook", 500, 300)}>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>Card</div>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-around" >
                                <div onClick={() => this.chooseCategory("web", "post_facebook", 788, 940)}>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>Facebook Post</div>
                                </div>
                                <div onClick={() => this.chooseCategory("web", "post_facebook", 1080, 1080)}>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>Instegram Post</div>
                                </div>
                                <div onClick={() => this.chooseCategory("web", "post_facebook", 1080, 1920)}>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>Instegram Story</div>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-around" >
                                <div>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>media</div>
                                </div>
                                <div>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>media</div>
                                </div>
                                <div>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>media</div>
                                </div>
                            </div>
                        </div>
                        :
                        <div id="section" className="d-flex flex-column scrollbar" >
                            <div className="d-flex flex-row justify-content-around" >
                                <div>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>section</div>
                                </div>
                                <div>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>section</div>
                                </div>
                                <div>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>section</div>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-around" >
                                <div>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>section</div>
                                </div>
                                <div>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>section</div>
                                </div>
                                <div>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>section</div>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-around" >
                                <div>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>section</div>
                                </div>
                                <div>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>section</div>
                                </div>
                                <div>
                                    <img className="medAndSecImg" src={section3} alt="section3" />
                                    <div style={{ marginLeft: "12px" }}>section</div>
                                </div>
                            </div>
                        </div>
                    }


                </div>

            </div >
        );
    }
}


function mapStateToProps(state) {
    return {
        displayComponents: state.displayComponents.displayComponents,
        canvasDetails: state.canvasDetails.canvasDetails
    };
}

export default connect(mapStateToProps)(MediaAndSection111)