import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import Draggable from 'react-draggable';
import { Stage, Layer, Text, Image } from 'react-konva';
import Canvas from '../canvas'

export default class Empty_page extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            bold_obj: '',
            text_title: "Overlay text"
        };

    }


    downloadURI(uri, name) {
        const canvas = this.myRef.current
        var link = document.createElement('a');
        link.download = name;
        link.href = uri;
        canvas.append(link);
        link.click();
        canvas.removeChild(link);
        delete link.click;
    }
    componentDidMount() {
        // this.canvas = this.myRef.current
        // this.ctx = this.canvas.getContext("2d")
    }
    addText = () => {
        // let canvas_add_text = this.myRef.current
        // let ctx = canvas_add_text.getContext("2d")
        // document.getElementById('title').style.display = "block"
        // document.getElementById('bold_button').style.display = "block"
        // document.getElementById('text_color_input').style.display = "block"
        // document.getElementById('title').addEventListener('keyup', function () {
        //     var stringTitle = document.getElementById('title').value;
        //     document.getElementById('myLabel').value = stringTitle;
        //     console.log(stringTitle);
        //     ctx.fillStyle = '#ffffff';
        //     ctx.fillRect(0, 0, (canvas_add_text.width) / 2, (canvas_add_text.height) / 2);
        //     ctx.fillStyle = '#000000';
        //     if (document.getElementById('bold_input').value == 'bold')
        //         ctx.font = 'bold 30px Georgia, serif'
        //     else
        //         ctx.font = '30px Georgia, serif'
        //     ctx.fillStyle = document.getElementById('text_color_input').value;
        //     ctx.textBaseline = 'middle';
        //     ctx.fillText(stringTitle, 15, canvas_add_text.height / 4 + 35);
        // });
        // document.getElementById('bold_button').addEventListener('click', function () {
        //     ctx.fillStyle = '#ffffff';
        //     ctx.fillRect(0, 0, (canvas_add_text.width) / 2, (canvas_add_text.height) / 2);
        //     ctx.fillStyle = '#000000';
        //     ctx.fillStyle = document.getElementById('text_color_input').value;

        //     console.log("on bold function")
        //     ctx.font = 'bold 30px Georgia, serif'
        //     var stringTitle = document.getElementById('title').value;
        //     ctx.fillText(stringTitle, 15, canvas_add_text.height / 4 + 35);
        //     document.getElementById('bold_input').value = 'bold'
        //     document.getElementById('bold_button').value = 'bold'
        // });
        // document.getElementById('text_color_input').addEventListener('change', function () {
        //     console.log("on change color")
        //     ctx.fillStyle = '#ffffff';
        //     ctx.fillRect(0, 0, (canvas_add_text.width) / 2, (canvas_add_text.height) / 2);
        //     ctx.fillStyle = '#000000';
        //     if (document.getElementById('bold_input').value == 'bold')
        //         ctx.font = 'bold 30px Georgia, serif'
        //     else
        //         ctx.font = '30px Georgia, serif'
        //     ctx.fillStyle = document.getElementById('text_color_input').value;
        //     var stringTitle = document.getElementById('title').value;
        //     ctx.fillText(stringTitle, 15, canvas_add_text.height / 4 + 35);
        // });
        // document.getElementById('change_background_color').addEventListener('change', function () {
        //     console.log("on change color")
        //     ctx.fillStyle = '#ffffff';
        //     ctx.fillRect(0, 0, (canvas_add_text.width) / 2, (canvas_add_text.height) / 2);
        //     ctx.fillStyle = '#000000';
        //     if (document.getElementById('bold_input').value == 'bold')
        //         ctx.font = 'bold 30px Georgia, serif'
        //     else
        //         ctx.font = '30px Georgia, serif'
        //     ctx.fillStyle = document.getElementById('text_color_input').value;
        //     var stringTitle = document.getElementById('title').value;
        //     ctx.fillText(stringTitle, 15, canvas_add_text.height / 4 + 35);
        // });
        // ctx.textBaseline = 'middle';
    }
    addImage_button = () => {
        console.log("addImage_ button")
        // document.getElementById('add_image_title').style.display = "block"
        // document.getElementById('files').style.display = "block"
        // let canvas_add_image = this.myRef.current
        // let ctx = canvas_add_image.getContext("2d")
        // // if (window.File && window.FileList && window.FileReader) {
        // document.getElementById('files').addEventListener('change', function (ev) {
        //     console.log("add image function")
        //     if (ev.target.files) {
        //         let file = ev.target.files[0];
        //         let reader = new FileReader();
        //         reader.readAsDataURL(file);
        //         reader.onloadend = function (e) {
        //             let image = new Image();
        //             image.src = e.target.result;
        //             image.onload = function (ev) {
        //                 // var canvas = document.getElementById('canvas');
        //                 // canvas_add_image.width = image.width;
        //                 // canvas_add_image.height = image.height;
        //                 ctx.drawImage(image, 0, 0);
        //                 ctx.fillStyle = 'rgba(30, 144, 255, 0.4)';
        //             }
        //         }
        //     }
        // });
    }
    addBackground_button = () => {
        // document.getElementById('add_image_title').style.display = "block"
        // document.getElementById('files').style.display = "block"
        // let canvas_add_image = this.myRef.current
        // let ctx = canvas_add_image.getContext("2d")
        // document.getElementById('files').addEventListener('change', function (ev) {
        //     console.log("add image function")
        //     if (ev.target.files) {
        //         let file = ev.target.files[0];
        //         let reader = new FileReader();
        //         reader.readAsDataURL(file);
        //         reader.onloadend = function (e) {
        //             let image = new Image();
        //             image.src = e.target.result;
        //             image.onload = function (ev) {
        //                 canvas_add_image.width = image.width;
        //                 canvas_add_image.height = image.height;
        //                 ctx.drawImage(image, 0, 0);
        //             }
        //         }
        //     }
        // });
    }


    onClickDownload = (e) => {
        //     let canvas_to_data = this.myRef.current
        //     this.downloadURI(canvas_to_data.toDataURL(), 'my_banner.png');
    }

    render() {
        return (
            <div className="d-flex flex-column align-item-center align-content-center justify-content-between">
                <div className="d-flex flex-row justify-content-between">
                    <nav className="navbar bg-dark navbar-dark d-flex justify-content-around">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a onClick={this.addText}
                                    className="nav-link">Add Title</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={this.addImage_button}>Add Image</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={this.addBackground_button}>Add background</a>
                            </li>
                        </ul>
                    </nav>
                    {/* <div>
                        <div class="card" style="width:400px">
                            <img class="card-img-top" src={require('../img/כרטיס ביקור.png')} alt="Card image" style="width:100%" />
                            <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" class="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div> */}
                    <div className="d-flex justify-content-between flex-column">
                        <nav className="navbar navbar-expand-lg">
                            {/* <div className="collpase navbar-collpase">
                                <ul className="navbar-nav mr-auto">
                                    <li className="navbar-item">
                                        <button variant="primary" onClick={this.onClickDownload} className="nav-link btn btn-primary">Download</button>
                                    </li>
                                </ul>
                            </div> */}
                            <div className="collpase navbar-collpase">
                                <ul className="navbar-nav mr-auto">
                                    <li className="navbar-item">
                                        <input id="bold_input" value={this.state.bold_obj} style={{ display: "none" }}></input>
                                        <button id="bold_button" className="btn btn-primary" style={{ display: "none" }}>{this.state.bold_obj ? this.state.bold_obj : 'Bold'}</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="collpase navbar-collpase">
                                <ul className="navbar-nav mr-auto">
                                    <li className="navbar-item">
                                        <input type="color" id="text_color_input" name="favcolor" style={{ display: "none" }} />
                                    </li>
                                </ul>
                            </div>

                            <div className="d-flex" style={{ display: "none" }} id="images_div">
                                <span>
                                    <h5 id="add_image_title" style={{ display: "none" }}>Upload your images</h5>
                                    <input style={{ display: "none" }} type="file" className="btn" id="files" name="files[]" multiple />
                                </span>
                            </div>

                        </nav >
                        <input id="title" placeholder="write your title here" style={{ border: "1.5px solid black" }} style={{ display: "none" }}></input>
                        <Canvas title_input={this.state.text_title} />
                        {/* <canvas ref={this.myRef} width={500} height={425} style={{ border: "1px solid #000000" }} /> */}
                        {/* <img ref="image" src={require('./img/banner_ad.jpg')} className="hidden" style={{ display: "none" }} /> */}
                        {/* <label>{this.props.title}</label> */}
                        <input id="myLabel" value={this.state.text_title} style={{ display: "none" }}></input>
                    </div>
                    {/* <Canvas title={this.state.title}/> */}
                </div>
            </div>

        );
    }
}



