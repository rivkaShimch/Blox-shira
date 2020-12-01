
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Title_Editor/title_editor';
import {
    setTitlesCanvas,
    setTitleColor,
    setShapeColor,
    setShapeStrokeWidth,
    setShapeStroke,
    setCounterShapes,
    setShapesCanvas,
    setShapeShadowBlur,
    setName,
} from '../../redux/actions/canvasActions'
import circle from '../img/circle.PNG';
import square from '../img/sqr.PNG';
import tringle from '../img/trngl.PNG';

class Shape_Editor extends Component {
    constructor(prop) {
        super(prop);


        this.state = {
            myShapePoints: [0, 0, -50, 60, 50, 60],
            checked: false,
            background: '#fff',
            value: '',
            valueRange: "14",
            // valueColor: "red",
            finalValueRange: '',
            // finalValueColor: '',
            SizeTitleValue: '',
            WidthTitleValue: '',
            HeightTitleValue: '',
            WidthShapeValue: '',
            HeightShapeValue: '',
            finalSizeTitleValue: '',
            finalWidthTitleValue: '',
            finalHeightTitleValue: '',
            finalWidthShapeValue: '',
            finalHeightShapeValue: '',

            finalStrokeWidth: '4',

            bold_img_align: 1
        };
        this.handleChange = this.handleChange.bind(this);
        this.onChangeTitleColor = this.onChangeTitleColor.bind(this)
        // this.onChangeShapeColor = this.onChangeShapeColor.bind(this)
        // this.onChangeTitleInput = this.onChangeTitleInput.bind(this)
        this.onKeyTemplateName = this.onKeyTemplateName.bind(this)
        this.onChangeShapeColor = this.onChangeShapeColor.bind(this)
        this.onChangeStrokeSlider = this.onChangeStrokeSlider.bind(this)
        this.onChangeShapeStrokeColor = this.onChangeShapeStrokeColor.bind(this)
        this.onChangeStrokeWidthInput = this.onChangeStrokeWidthInput.bind(this)
        this.onCircleClick = this.onCircleClick.bind(this)
        this.onSquareClick = this.onSquareClick.bind(this)
        this.onTriangularClick = this.onTriangularClick.bind(this)
        this.onChangeShadowSizeSlider = this.onChangeShadowSizeSlider.bind(this)
        this.onChangeShadowSizeInput = this.onChangeShadowSizeInput.bind(this)
    }
    onChangeShapeColor(e) {
        this.props.dispatch(setShapeColor((e.target.value), this.props.canvasDetails.shapes_i))
    }
    onChangeStrokeWidthInput(e) {
        this.props.dispatch(setShapeStrokeWidth((e.target.value), this.props.canvasDetails.shapes_i))
        this.setState({ finalStrokeWidth: e.target.value })
    }
    onChangeStrokeSlider(e) {
        this.props.dispatch(setShapeStrokeWidth((e.target.value), this.props.canvasDetails.shapes_i))
        document.getElementById("stroke_width_input").value = ''
        this.setState({ finalStrokeWidth: e.target.value })
    }
    onChangeShapeStrokeColor(e) {
        this.props.dispatch(setShapeStroke((e.target.value), this.props.canvasDetails.shapes_i))
    }
    onChangeShadowSizeSlider(e) {

        this.props.dispatch(setShapeShadowBlur((e.target.value), this.props.canvasDetails.shapes_i))
        document.getElementById("shadowSize_input").value = ''
        this.setState({ shapeProps: e.target.value })
    }
    onChangeShadowSizeInput(e) {
        this.props.dispatch(setShapeShadowBlur((e.target.value), this.props.canvasDetails.shapes_i))
        this.setState({ shapeProps: e.target.value })
    }
    onCircleClick(e) {

        let arr_length_shp = (this.props.canvasDetails.shapes).length
        const newShape = {
            id: arr_length_shp,
            x: 200,
            y: 200,
            points: [0, 0, 50, 0, 50, 50, 0, 50],
            tension: 0.5555555,
            shadowBlur: 0,
            display: true,

            stroke: "black",
            //   fillLinearGradientStartPoint={{ x: -50, y: -50 }},
            //   fillLinearGradientEndPoint={{ x: 50, y: 50 }},
            //   fillLinearGradientColorStops={[0, 'red', 1, 'yellow']},
        }
        let tempCount = this.props.canvasDetails.counter_shapes + 1
        this.props.dispatch(setCounterShapes(tempCount))
        this.props.dispatch(setShapesCanvas(newShape))
    }
    onSquareClick(e) {

        let arr_length_shp = (this.props.canvasDetails.shapes).length
        const newShape = {
            id: arr_length_shp,
            x: 200,
            y: 200,
            points: [0, 0, 20, 0, 20, 20, 0, 20],
            tension: 0,
            display: true,

            stroke: "black",
            //   fillLinearGradientStartPoint={{ x: -50, y: -50 }},
            //   fillLinearGradientEndPoint={{ x: 50, y: 50 }},
            //   fillLinearGradientColorStops={[0, 'red', 1, 'yellow']},
        }
        let tempCount = this.props.canvasDetails.counter_shapes + 1
        this.props.dispatch(setCounterShapes(tempCount))
        this.props.dispatch(setShapesCanvas(newShape))
    }
    onTriangularClick(e) {

        let arr_length_shp = (this.props.canvasDetails.shapes).length
        const newShape = {
            id: arr_length_shp,
            x: 200,
            y: 0,
            points: this.state.myShapePoints,
            tension: 0,
            shadowBlur: 0,
            display: true,
            shadowColor: "blue",
            opacity: 1,
            stroke: "black",
            //   fillLinearGradientStartPoint={{ x: -50, y: -50 }},
            //   fillLinearGradientEndPoint={{ x: 50, y: 50 }},
            //   fillLinearGradientColorStops={[0, 'red', 1, 'yellow']},
        }
        let tempCount = this.props.canvasDetails.counter_shapes + 1
        this.props.dispatch(setCounterShapes(tempCount))
        this.props.dispatch(setShapesCanvas(newShape))

    }
    // onChangeStrokeWidthInput(e)
    changeImage1 = () => {
        this.setState({ bold_img_align: 1 });
    };
    changeImage2 = () => {
        this.setState({ bold_img_align: 2 });
    };
    changeImage3 = () => {
        this.setState({ bold_img_align: 3 });
    };
    handleChange(checked) {
        this.setState({ checked });
    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };
    onChangeTitleColor(e) {
        this.props.dispatch(setTitleColor(e.target.value))
    }

    onChangeTitleInput(e) {
        this.props.dispatch(setTitlesCanvas(e.target.value))
    }
    onKeyTemplateName(e) {
        this.props.dispatch(setName(e.target.value))
    }

    render() {

        return (
            <div className="col-12 d-flex flex-column justify-content-start">


                <div className="d-flex flex-column justify-content-between" style={{ height: "25vw", marginLeft: "20px", marginRight: "20px" }}>
                    <div className="d-flex flex-column justify-content-start">
                        <div className="d-flex flex-column justify-content-start">
                            <div className="d-flex flex-row justify-content-between mb-2">
                                <div className="sideLittleTitles  ">Shape Setting</div>
                            </div>
                        </div>
                    </div>


                    <div className="d-flex flex-wrap scrollbar white_circleborder_background" style={{ height: "100px", width: "200px" }}>
                        <div> <img src={circle} alt="shape" onClick={this.onCircleClick} /></div>
                        <div> <img src={square} alt="shape" onClick={this.onSquareClick} /></div>
                        <div> <img src={tringle} alt="shape" onClick={this.onTriangularClick} /></div>
                        <div> <img src={circle} alt="shape" /></div>
                        <div> <img src={square} alt="shape" /></div>
                        <div> <img src={tringle} alt="shape" /></div>
                        <div> <img src={circle} alt="shape" /></div>
                        <div> <img src={square} alt="shape" /></div>
                        <div> <img src={tringle} alt="shape" /></div>
                    </div>

                    <div className="d-flex flex-column justify-content-between">
                        <div className="d-flex flex-row sideTitles">Shape Fill</div>
                        <input style={{ backgroundColor: "#3A405E", border: "none" }} type="color" className="d-flex flex-row form-control" id="input_color2" name="favcolor2"
                            onChange={this.onChangeShapeColor} value={this.props.canvasDetails.shape_color} />
                    </div>
                    <div className="d-flex flex-column justify-content-between sideTitles">
                        <div className="d-flex flex-row sideTitles" style={{ color: this.props.color }}>Stroke Width</div>
                        <div className="d-flex flex-row justify-content-between">
                            <input type="range" min="0" max="50" className="col-8 slider mt-3"
                                value={this.state.finalStrokeWidth}
                                onChange={this.onChangeStrokeSlider} />
                            <input style={{ color: "white" }} id="stroke_width_input" className="input_line col-3"
                                onKeyUp={this.onChangeStrokeWidthInput} placeholder={this.finalStrokeWidth} />
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                        <div className="d-flex flex-row sideTitles">Stroke Fill</div>
                        <input style={{ backgroundColor: "#3A405E", border: "none" }} type="color" className="d-flex flex-row form-control" id="input_color2" name="favcolor2"
                            onChange={this.onChangeShapeStrokeColor} value={this.props.canvasDetails.shape_color} />
                    </div>
                    <div className="d-flex flex-row justify-content-between" >
                        <div className="d-flex flex-column justify-content-between sideTitles">
                            <div className="d-flex flex-row sideTitles" style={{ color: this.props.color }}>Shadow Size</div>
                            <div className="d-flex flex-row justify-content-between">
                                <input type="range" min="0" max="20" className="col-8 slider mt-3"
                                    value={this.state.shapeProps}
                                    onChange={this.onChangeShadowSizeSlider}
                                />
                                <input style={{ color: this.props.color }} id="shadowSize_input" className="input_line col-3"
                                    onKeyUp={this.onChangeShadowSizeInput} placeholder={this.state.shapeProps} />
                            </div>
                        </div>
                    </div>




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
export default connect(mapStateToProps)(Shape_Editor)
