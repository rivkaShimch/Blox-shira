import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styles from './title_editor.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Arrow_down from "../img/arrow_down.png";

import Lion from "../img/lion.png";

export default class Title_Editor extends Component {
    constructor(prop) {
        super(prop);
        const my_img = require("../img/arrow_down.png")

        this.state = {

        };
    }
    render() {
        return (
         <> <div className="col-12 d-flex flex-column justify-content-between">

                {/* <div className="col-12 d-flex flex-row justify-content-between">
                    <div className="sideLittleDetail">images</div>
                    <img src={Arrow_down} style={{ height: "1vh", width: "1.5vh" }} alt="icon" />
                </div> */}

                <div className="d-flex flex-row justify-content-start">
                    <div className="sideLittleDetail">Title Setting</div>

                </div>

                <div className="d-flex flex-row justify-content-around">
                    <div className="sideLittleDetail">images<img src={Arrow_down} alt="icon" /></div>

                </div>
         </div>
            </>
        );
    }
}


