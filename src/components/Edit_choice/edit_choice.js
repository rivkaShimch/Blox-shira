import React, { Component } from 'react';
import styles from './edit_choice.css'
import { Link } from 'react-router-dom';
import MediaAndSection111 from '../MediaAndSection111/mediaAndSection111';
import Buttons_new from '../Buttons_new/buttons_new';
import Widget from '../Widget/widget';

// import MediaAndSection from '../MediaAndSection/mediaAndSection';

export default class Edit_choice extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (

            <div className="d-flex flex-column justify-content-between">
                <div className="d-flex flex-row justify-content-between mb-3" >

                    {/* <div className="col-12 d-flex flex-column justify-content-between" style={{ marginTop: "30%" }}> */}
                    <Buttons_new />
                </div>
                <div className="d-flex flex-row justify-content-around white_circleborder_background mb-3" style={{ textUnderlineOffset: "red" }}>
                    <MediaAndSection111 />
                </div>
                <div className="d-flex flex-row justify-content-between mb-3">
                    <Widget />
                </div>


            </div>

        );
    }
}