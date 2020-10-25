import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
// import { FaRocket } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Scrollspy from 'react-scrollspy';


export default class MediaAndSection extends Component {
    render() {


        return (
            <>

                {this.state.displayColorPickerBackground ? <div style={{ zIndex: 1, position: "absolute" }}>
                    <div onClick={this.handleCloseBackground} />
                    <SketchPicker
                        className={classes.sketch}

                        color={this.props.videoDetails.backgroundPlayer.backgroundColor} onChange={this.handleChangeCompleteBackgroundColor} />
                </div> : null}
                <Box flexDirection="row"
                    display="flex"
                    justifyContent="space-between">
                    <Box width={'80%'}>
                        <FormLabel className={classes.textcontect}
                            style={{
                                color: this.props.videoDetails.backgroundAppBarSideColor === 'grey' ? 'white' : 'grey',
                            }}> Background Color</FormLabel>
                    </Box>
                    <Box justifyContent="flex-start">
                        <div >
                            <div
                                style={{
                                    cursor: 'pointer',
                                }}
                                onClick={this.handleClickBackground}>
                                <img src={Dropper} onClick={this.handleCloseBackground} />
                            </div>
                        </div>
                    </Box>
                </Box>





                <Box flexDirection="row"
                    display="flex"
                    justifyContent="space-between"
                >

                    <Box
                        width={'100%'}
                        alignSelf="center"
                    >


                        <HuePicker
                            styles={{
                                cursor: 'pointer',
                                thumb:
                                {

                                    /* ///yael */
                                    // width: 5,
                                    // height: 5,
                                    backgroundColor: this.props.videoDetails.backgroundPlayer.backgroundColor
                                }
                            }}
                            color={this.props.videoDetails.backgroundPlayer.backgroundColor}
                            onChangeComplete={this.handleChangeCompleteBackgroundColor}
                            width={'9vw'}
                            height={'0.6vh'}
                        />

                    </Box>
                    <Box justifyContent="flex-end">
                        <input
                            textAlign="center"
                            id="standard-number"
                            type="text"
                            value={this.props.videoDetails.backgroundPlayer.hexBackgroundColor}
                            onChange={(e) => this.props.dispatch(setHexBackgroundPlayerColor(e.target.value))}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            className={classes.inputNumberSlider}
                        />

                    </Box>

                </Box>
            </>
        );


    }
}
