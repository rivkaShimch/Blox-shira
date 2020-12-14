import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Canvas_Preview from './canvas-preview'
var path = require('path');


export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        // this.onChangeUsername = this.onChangeUsername.bind(this);
        // this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeTitleSize = this.onChangeTitleSize.bind(this);
        this.onChangeTitleType = this.onChangeTitleType.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeElementWidth = this.onChangeElementWidth.bind(this);
        this.onChangeElementHeight = this.onChangeElementHeight.bind(this);
        this.onChangeTitleColor = this.onChangeTitleColor.bind(this);
        this.onChangeBackgroundImg = this.onChangeBackgroundImg.bind(this);
        this.onChangeElementImg = this.onChangeElementImg.bind(this);
        this.onChangeTitlePositionX = this.onChangeTitlePositionX.bind(this);
        this.onChangeTitlePositionY = this.onChangeTitlePositionY.bind(this);
        this.onChangeElementPositionX = this.onChangeElementPositionX.bind(this);
        this.onChangeElementPositionY = this.onChangeElementPositionY.bind(this);

        this.onClickPreviewTemplate = this.onClickPreviewTemplate.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            type: '',
            category: '',
            title: '',
            title_size: '',
            title_type: '',
            title_color: '',
            element_width: '',
            element_height: '',
            background_img_name: '',
            background_img_path: '',
            element_img: '',
            title_position: '',
            element_position_x: '',
            element_position_y: '',
            display_prv_template: 'none',
            display_canvas: false,
            new_preview_template: '',
        };
    }
    // onChangeUsername(e) {
    //     this.setState({
    //         username: e.target.value
    //     });
    // }
    // onChangeEmail(e) {
    //     this.setState({
    //         email: e.target.value
    //     });
    // }
    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeTitleSize(e) {
        this.setState({
            title_size: e.target.value
        });
    }
    onChangeTitlePositionX(e) {
        this.setState({
            title_position_x: e.target.value
        });
    }
    onChangeTitlePositionY(e) {
        this.setState({
            title_position_y: e.target.value
        });
    }
    onChangeTitleType(e) {
        this.setState({
            title_type: e.target.value
        });
    }
    onChangeElementWidth(e) {
        this.setState({
            element_width: e.target.value
        });
    }
    onChangeElementHeight(e) {
        this.setState({
            element_height: e.target.value
        });
    }
    onChangeElementPositionX(e) {
        this.setState({
            element_position_x: e.target.value
        });
    }
    onChangeElementPositionY(e) {
        this.setState({
            element_position_y: e.target.value
        });
    }
    onChangeTitleColor(e) {
        this.setState({
            title_color: e.target.value
        });

    }
    onChangeBackgroundImg(e) {
        let back_img_name = e.target.value;
        let back_img_name_arr = back_img_name.split("\\");
        console.log("img " + back_img_name_arr[2])
        let file_input = document.getElementById("background_img_input").files[0]
        alert(file_input)
        // file_input = file_input[0].files[0]
        // [0].files[0]
        let full_path = file_input
        // let full_path = "../background_images/" + back_img_name_arr[2]
        // console.log(full_path)
        this.setState({
            background_img_name: back_img_name_arr[2],
            background_img_path: full_path,

        });

    }
    onChangeElementImg(e) {
        let elem_img_name = e.target.value;
        let elem_img_name_arr = elem_img_name.split("\\");
        console.log("elem_img_name_arr " + elem_img_name_arr[2])

        this.setState({
            element_img: elem_img_name_arr[2]
        });

    }
    onClickPreviewTemplate() {
        const newTemplate = {
            category: this.state.category,
            background_img_name: this.state.background_img_name,
            background_img_path: this.state.background_img_path,
            title: this.state.title,
            title_size: this.state.title_size,
            title_color: this.state.title_color,
            title_type: this.state.title_type,
            title_position_x: this.state.title_position_x,
            title_position_y: this.state.title_position_y,
            element_img: this.state.element_img,
            element_position_x: this.state.element_position_x,
            element_position_y: this.state.element_position_y,
            element_width: this.state.element_width,
            element_height: this.state.element_height
        };
        this.setState({
            display_prv_template: "block",
            new_preview_template: newTemplate
        });
    }



    onSubmit(e) {
        e.preventDefault();


        //save the background image in the api files


        var fileToUpload = this.state.background_img_path;
        console.log("file " + fileToUpload)

        var myFile = new FormData();
        myFile.append("file", fileToUpload);
        let back_url = '';
        let uId = 'uLKS7DPkWsdywmn1LaRv1gI3RYL2'

        fetch("https://files.leader.codes/api/" + uId + "/upload", {
            mode: 'no-cors',
            method: 'post',
            body: myFile,
        })
            .then(function (response) {
                // console.log("data " + JSON.parse(data.data))
                response = response.JSON;
                console.log(response);
                back_url = response.data.url;
                alert("upload success");
            })
            .catch(function (err) {
                alert("Error")
            })

        const newTemplate = {
            type: this.state.category,
            background_img_name: this.state.background_img_name,
            background_img_path: back_url,
            title: this.state.title,
            title_size: this.state.title_size,
            title_color: this.state.title_color,
            title_type: this.state.title_type,
            title_position_x: this.state.title_position_x,
            title_position_y: this.state.title_position_y,
            element_img: this.state.element_img,
            element_position_x: this.state.element_position_x,
            element_position_y: this.state.element_position_y,
            element_width: this.state.element_width,
            element_height: this.state.element_height,



            shape_position_x: this.state.shape_position_x,
            shape_position_y: this.state.shape_position_y,
            shape_fill: this.state.shape_fill,
            shape_stroke: this.state.shape_stroke,
            shape_strokeWidth: this.state.shape_strokeWidth,
            shape_cornerRadius: this.state.shape_cornerRadius,
            shape_shadowBlur: this.state.shape_shadowBlur,
            shape_points: this.state.shape_points,
            shape_tension: this.state.shape_tension,

            brandColors: this.state.brandColors,
            brand_backgrond_Colors: this.state.brand_backgrond_Colors,



        };
        console.log(newTemplate);
        // save on mongodb
        axios.post('http://localhost:9000/templates/add', newTemplate)
            .then(res => console.log(res.data));

        // this.setState({
        //     category: '',
        //     title: '',
        //     title_size: '',
        //     title_type: '',
        //     title_color: 'black',
        //     element_width: '',
        //     element_height: '',
        //     background_img_name: '',
        //     background_img_path: '',
        //     element_img: '',
        //     title_position_x: '',
        //     title_position_y: '',
        //     element_position_x: '',
        //     element_position_y: '',
        // })

        // this.setState({
        //     display_prv_template: "none"
        // });
    }
    render() {
        return (

            <div className="d-flex flex row justify-content-around">
                <div className="d-flex justify-content-around flex-column">
                    <h3>Add New Template</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Category: </label>
                            <select id="type_option" onChange={this.onChangeCategory}>
                                <option value="poster">Poster (42/59.4 sm)</option>
                                <option value="instagrm post">Instagrm Post (1080/1080)</option>
                                <option value="facebook post">Facebook Post (940/788 px)</option>
                                <option value="logo">Logo (500/500 px)</option>
                                <option value="invitation">Invitation (14/14 sm)</option>
                                <option value="credit">Card (14.8/10.5 sm)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Background Img: </label>
                            <input type="file" className="btn" id="background_img_input" onChange={this.onChangeBackgroundImg} name="files[]" />
                        </div>

                        <div className="form-group">
                            <label>Content of Title: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                            />
                        </div>
                        <div className="form-group">
                            <label>Title Size: </label>
                            <select id="title_size_option" onChange={this.onChangeTitleSize}>
                                <option value="12">12</option>
                                <option value="14">14</option>
                                <option value="16">24</option>
                                <option value="18">36</option>
                                <option value="20">48</option>
                                <option value="24">24</option>
                                <option value="36">36</option>
                                <option value="48">48</option>
                                <option value="72">72</option>
                                <option value="96">96</option>
                                <option value="120">120</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Title Color: </label>
                            <input type="color" id="text_color_input" onChange={this.onChangeTitleColor} name="favcolor" />
                        </div>
                        <div className="form-group">
                            <label>Title Font: </label>
                            <select id="title_type_option" onChange={this.onChangeTitleType}>
                                <option value="Sofia">Sofia</option>
                                <option value="Ariel">Ariel</option>
                                <option value="Times New Roman">Times New Roman</option>
                                <option value="Lucida Console">Lucida Console</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Title Position: </label>
                            <div className="d-flex flex-row">
                                <label className="col-2">X-axis</label>
                                <input className="col-2" type="text"
                                    className="form-control"
                                    value={this.state.title_position_x}
                                    onChange={this.onChangeTitlePositionX}
                                />
                                <label className="col-2">Y-axis</label>
                                <input className="col-2" type="text"
                                    className="form-control"
                                    value={this.state.title_position_y}
                                    onChange={this.onChangeTitlePositionY}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Element Image: </label>
                            <input type="file" className="btn" id="element_img" onChange={this.onChangeElementImg} name="files[]" />

                        </div>

                        <div className="form-group">
                            <label>Element Position: </label>
                            <div className="d-flex flex-row">
                                <label className="col-2">X-axis</label>
                                <input className="col-2" type="text"
                                    className="form-control"
                                    value={this.state.element_position_x}
                                    onChange={this.onChangeElementPositionX}
                                />
                                <label className="col-2">Y-axis</label>
                                <input className="col-2" type="text"
                                    className="form-control"
                                    value={this.state.element_position_y}
                                    onChange={this.onChangeElementPositionY}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Element Size: </label>
                            <div className="d-flex flex-row">
                                <label className="col-2">Width</label>
                                <input className="col-2" type="text"
                                    className="form-control"
                                    value={this.state.element_width}
                                    onChange={this.onChangeElementWidth}
                                />
                                <label className="col-2">Height</label>
                                <input className="col-2" type="text"
                                    className="form-control"
                                    value={this.state.element_height}
                                    onChange={this.onChangeElementHeight}
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <button onClick={this.onClickPreviewTemplate} className="btn btn-primary">Preview Template</button>
                            <div style={{ width: "5px" }}></div>
                            <div className="form-group">
                                <input type="submit" value="Add Template To Datebase" className="btn btn-primary" />
                            </div>
                        </div>

                    </form>
                </div>
                <div style={{ display: this.state.display_prv_template }}>
                    <h3>Preview Template</h3>
                    {this.state.display_prv_template == "block" ? <Canvas_Preview new_preview_template={this.state.new_preview_template} /> : <span></span>}
                </div>
            </div>
        )
    }
}