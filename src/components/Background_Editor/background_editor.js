import React, { Component } from 'react';
// import styles from './home.css'
import { connect } from 'react-redux';
import BrandingGuide from '../BrandingGuide/BrandingGuide';

import {
    setBackgroundColor,
    setBackgroundBrandColor

} from '../../redux/actions/canvasActions'


class Background_Editor extends Component {

    constructor(prop) {
        super(prop);

        this.state = {

        };
        this.onChangeBackgroundColor = this.onChangeBackgroundColor.bind(this);
        this.n = this.n.bind(this);

    }

    onChangeBackgroundColor(e) {
        this.props.dispatch(setBackgroundColor(e.target.value))
        // console.log("onChangeBackgroundColor " + e.target.value)
    }
    n(e) {
        console.log("enter to")
        this.props.dispatch(setBackgroundBrandColor(e.target.value))
    }
    render() {
        return (
            <div className="d-flex flex-column align-item-center align-content-center justify-content-between">

                <div className="d-flex flex-row justify-content-between mt-4 mb-1">
                    <div className="d-flex flex-column sideTitles">Background Fill</div>
                    <input style={{ backgroundColor: "#3A405E", border: "none" }} type="color" className="d-flex flex-column form-control" id="input_color" name="favcolor"
                        onPointerLeave={this.n} onChange={this.onChangeBackgroundColor} value={this.props.canvasDetails.backgroundColor} />
                </div>

                <BrandingGuide />
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        canvasDetails: state.canvasDetails.canvasDetails
    };
}
export default connect(mapStateToProps)(Background_Editor)