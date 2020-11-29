import React, { Component } from 'react';
// import styles from './home.css'
import { connect } from 'react-redux';

import {
    setBackgroundColor

} from '../../redux/actions/canvasActions'


class Background_Editor extends Component {
    onChangeBackgroundColor = (e) => {
        this.props.dispatch(setBackgroundColor(e.target.value))
        console.log("onChangeBackgroundColor " + e.target.value)
    }
    render() {
        return (
            <div className="d-flex flex-column align-item-center align-content-center justify-content-between">

                <div className="d-flex flex-row justify-content-between mt-4 mb-1">
                    <div className="d-flex flex-column sideTitles">Background Fill</div>
                    <input style={{ backgroundColor: "#3A405E", border: "none" }} type="color" className="d-flex flex-column form-control" id="input_color" name="favcolor"
                        onChange={this.onChangeBackgroundColor} value={this.props.canvasDetails.backgroundColor} />
                </div>
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