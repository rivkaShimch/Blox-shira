import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MediaAndSection111 from '../MediaAndSection111/mediaAndSection111';
import Buttons_new from '../Buttons_new/buttons_new';
import Widget from '../Widget/widget';
import styles from '../Edit_choice/edit_choice.css';
import { connect } from 'react-redux';


// import MediaAndSection from '../MediaAndSection/mediaAndSection';

class Edit_choice extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            // col-lg-6 col-md-2
            // <div className="d-flex flex-column justify-content-between col-lg-12">
            <div className="col-12" style={{ display: this.props.displayComponents.display_edit_choice }}>
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


function mapStateToProps(state) {
    return {
        displayComponents: state.displayComponents.displayComponents,
        canvasDetails: state.canvasDetails.canvasDetails,
    };
}
export default connect(mapStateToProps)(Edit_choice)