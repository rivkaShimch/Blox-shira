import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import arow from '../img/arow.png';




export default class Buttons_new extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onClickNewVar: false,
        };
        this.onClickNewFunc = this.onClickNewFunc.bind(this)
        // this.sendToParent = this.sendToParent.bind(this)
    }
    onClickNewFunc() {
        debugger
        console.log("onClickNewFunc1 " + this.state.onClickNewVar)
        this.setState({ onClickNewVar: true })
        console.log("New " + this.state.onClickNewVar)
        this.props.cbc2_new_button(this.state.onClickNewVar)

    }
    // sendToParent() {
    //     console.log("send " + this.state.onClickNewVar)
    //     this.props.cbc2_new_button(this.state.onClickNewVar)

    // }

    render() {


        return (
            <>
                <div className="col-12 d-flex flex-row justify-content-start" style={{marginTop: "9vh", height: "31px", padding:"0px"}}>
                    <div className="col-10 d-flex flex-column align-items-center white_circleborder_background up_button pt-1 "
                        onClick={this.onClickNewFunc} style={{ height: "35px" }} >
                        +New
                         </div>
                    <div className="col-2 d-flex flex-column justify-content-start " style={{ height: "37px" }}>
                       
                            <div className="d-flex flex-column justify-content-center  white_circleborder_background up_button"  style={{height: "34px", width: "34px",marginRight:"40px"}}>
                            <img className="arow_img" src={arow} alt="icon" />
                            </div>
                          
                    </div>
                </div>
            </>



        );
    }
}