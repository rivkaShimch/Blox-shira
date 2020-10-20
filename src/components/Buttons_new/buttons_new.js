import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import arow from '../img/arow.png';


import { connect } from 'react-redux';


import {
    setNewCanva
} from '../../redux/actions/componentsActions'


class Buttons_new extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onClickNewFunc = this.onClickNewFunc.bind(this)
    }
    onClickNewFunc() {
        this.props.dispatch(setNewCanva(true))
    }

    render() {
        return (
            <>
                <div className="col-12 d-flex flex-row justify-content-start" style={{ marginTop: "9vh", height: "31px", padding: "0px" }}>
                    <div className="col-10 d-flex flex-column align-items-center white_circleborder_background up_button pt-1 "
                        onClick={this.onClickNewFunc} style={{ height: "35px" }} >
                        +New
                         </div>
                    <div className="col-2 d-flex flex-column justify-content-start " style={{ height: "37px" }}>

                        <div className="d-flex flex-column justify-content-center  white_circleborder_background up_button" style={{ height: "34px", width: "34px", marginRight: "40px" }}>
                            <img className="arow_img" src={arow} alt="icon" />
                        </div>

                    </div>
                </div>
            </>



        );
    }
}


function mapStateToProps(state) {
    return {
        displayComponents: state.displayComponents.displayComponents
    };
}

export default connect(mapStateToProps)(Buttons_new)