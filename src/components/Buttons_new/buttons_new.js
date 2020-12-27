import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'

// import "../bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import arow from '../img/arow.png';

// import purpleArrow from '../img/purpleArrow.png';

import { connect } from 'react-redux';

import {
    setTitlesCanvasServer,
    setButtonsCanvasServer,
    setShapesCanvasServer,

    setElementsCanvasServer,
    setBackgroundColor,
    setUpdateTitlesCanvas,
    getFirstItem,
    setCounterTitles
} from '../../redux/actions/canvasActions'


import {
    setDisplayMainOption
} from '../../redux/actions/componentsActions'


class Buttons_new extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.onClickNewFunc = this.onClickNewFunc.bind(this)

    }

    componentDidUpdate(prevProps) {
        if (prevProps.canvasDetails.firstItem !== this.props.canvasDetails.firstItem) {

            let tempItem = this.props.canvasDetails.firstItem

            if (tempItem === null) {
                return
            }
            // if ("text" in tempItem) {
            // console.log("hhhh " + tempItem)
            this.props.dispatch(setUpdateTitlesCanvas(tempItem, tempItem.id))
        }
    }

    onClickNewFunc() {
        this.props.dispatch(setCounterTitles(0))
        this.props.dispatch(setTitlesCanvasServer([]))
        this.props.dispatch(setButtonsCanvasServer([]))
        this.props.dispatch(setShapesCanvasServer([]))
        this.props.dispatch(setElementsCanvasServer([]))
        this.props.dispatch(setBackgroundColor('white'))
        this.props.dispatch(setDisplayMainOption('canva'))

    }
    onClickPreButton = () => {

        // console.log("in onClickPreButton");

        this.props.dispatch(getFirstItem())

        // let newattars = this.props.canvasDetails.titles[tempItem.text].preText[0]
        // }
    }

    render() {
        return (
            <>
                <div className="col-12 d-flex flex-row justify-content-start" style={{ height: "31px", padding: "0px" }}>
                    <div className="col-10 d-flex flex-column align-items-center white_circleborder_background up_button pt-1 "
                        onClick={this.onClickNewFunc} style={{ height: "35px" }} >
                        +New
                         </div>
                    <div className="col-2 d-flex flex-column justify-content-start " style={{ height: "37px" }}>

                        <div className="d-flex flex-column justify-content-center  white_circleborder_background up_button" style={{ height: "34px", width: "34px", marginRight: "40px" }}>
                            <img className="arow_img" src={arow} alt="icon" />

                        </div>
                        <Icon name="arrow left" onClick={this.onClickPreButton} />

                    </div>
                </div>
            </>



        );
    }
}


function mapStateToProps(state) {
    return {
        displayComponents: state.displayComponents.displayComponents,
        canvasDetails: state.canvasDetails.canvasDetails
    };
}

export default connect(mapStateToProps)(Buttons_new)