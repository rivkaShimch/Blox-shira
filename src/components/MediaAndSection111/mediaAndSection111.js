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

import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import section1 from '../img/section1.PNG';
import section2 from '../img/section2.PNG';
import section3 from '../img/section3.PNG';
import Scrollspy from 'react-scrollspy';



export default class MediaAndSection111 extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            display_media: '',
            display_section: '',
            color_media:'',
            color_section:''
        };
        this.mediaFunc = this.mediaFunc.bind(this)
        this.sectionFunc = this.sectionFunc.bind(this)

    }
    mediaFunc() {
        this.setState({ display_media: "block",color_media:"#A66DFF" })
        console.log(" display_media:block")
        this.setState({ display_section: "none" ,color_section:"black"})
        console.log("this.setState({ display_section: none")
    }
    sectionFunc() {
        this.setState({ display_media: "none" ,color_media:"black" })
        console.log(" this.setState({ display_media: none")

        this.setState({ display_section: "block" ,color_section:"#A66DFF" })
        console.log("  this.setState({ display_section: block")

    }
    render() {
        return (
            <div className="container-fluid d-flex flex-column justify-content-around">
                <div className="d-flex flex-row justify-content-around navTitle">
                    <Navbar >

                        <Nav className="mr-auto ">
                            <Nav.Link className="navTitle" href="#media" onClick={this.mediaFunc} style={{color:this.state.color_media}}>Media</Nav.Link>
                            <Nav.Link className="navTitle" href="#section" onClick={this.sectionFunc} style={{color:this.state.color_section}}>Section</Nav.Link>
                        </Nav>

                    </Navbar>
                </div>
                <div className="d-flex flex-row justify-content-around" style={{ maxHeight: "17vh", overflow: "auto" }}>

                    <div id="#media" className="d-flex flex-column" style={{display:this.state.display_media}}>
                        <div className="d-flex flex-row justify-content-around" >
                            <div>
                                <img className="medAndSecImg" src={section1} alt="section3" />
                                <div style={{ marginLeft: "12px" }}>media</div>
                            </div>
                            <div>
                                <img className="medAndSecImg" src={section2} alt="section3" />
                                <div style={{ marginLeft: "12px" }}>media</div>
                            </div>
                            <div>
                                <img className="medAndSecImg" src={section3} alt="section3" />
                                <div style={{ marginLeft: "12px" }}>media</div>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-around" >
                            <div>
                                <img className="medAndSecImg" src={section1} alt="section3" />
                                <div style={{ marginLeft: "12px" }}>media</div>
                            </div>
                            <div>
                                <img className="medAndSecImg" src={section2} alt="section3" />
                                <div style={{ marginLeft: "12px" }}>media</div>
                            </div>
                            <div>
                                <img className="medAndSecImg" src={section3} alt="section3" />
                                <div style={{ marginLeft: "12px" }}>media</div>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-around" >
                            <div>
                                <img className="medAndSecImg" src={section1} alt="section3" />
                                <div style={{ marginLeft: "12px" }}>media</div>
                            </div>
                            <div>
                                <img className="medAndSecImg" src={section2} alt="section3" />
                                <div style={{ marginLeft: "12px" }}>media</div>
                            </div>
                            <div>
                                <img className="medAndSecImg" src={section3} alt="section3" />
                                <div style={{ marginLeft: "12px" }}>media</div>
                            </div>
                        </div>
                    </div>
                    {/* <div id="#section" className="d-flex flex-column" style={{display:this.state.display_section}}>
                        <div className="d-flex flex-row justify-content-around" >
                            <div>
                                <img src={section3} alt="section3" />
                                <div style={{ marginLeft: "12px" }}>section</div>
                            </div>
                            <div>
                                <img src={section3} alt="section3" />
                                <div style={{ marginLeft: "12px" }}>section</div>
                            </div>
                            <div>
                                <img src={section3} alt="section3" />
                                <div style={{ marginLeft: "12px" }}>section</div>
                            </div>
                        </div>
                    </div> */}

                </div>

            </div >
        );
    }
}


