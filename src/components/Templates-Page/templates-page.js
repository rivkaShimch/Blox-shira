import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import Edit_choice from '../Edit_choice/edit_choice';
import templates_page from './templates-page.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';
import searchIcon from '../img/searchSolid.svg';

import {
    setName,
    setTitlesCanvas,
    setCanvasWidth,
    setCanvasHeight,
    setTitlePositionX,
    setTitlePositionY,
    setTitleColor,
    setTitleSize,
    setTitleWidth,
    setTitleHeight,
    setBackgroundImgName,
    setBackgroundImgPath,
    setElementPositionX,
    setElementPositionY,
    setElementWidth,
    setElementHeight,
    setTitleType,
    setElementImg,
    setTitleAlign,
    setTitlesICanvas,
    setTitlesCanvasServer
} from '../../redux/actions/canvasActions'
import {
    setDisplayMainOption
} from '../../redux/actions/componentsActions'

class TemplateCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name_of_temp: ''
        };
        this.onClickNewProject = this.onClickNewProject.bind(this)
        this.onClickTemplateCard = this.onClickTemplateCard.bind(this)
    }

    onClickNewProject() {
        this.props.dispatch(setTitlesCanvasServer([]))
        console.log("onClickNewProject setTitlesCanvas " + this.props.canvasDetails.titles)
        this.props.dispatch(setDisplayMainOption('canva'))
    }

    onClickTemplateCard = (name) => {
        console.log("in onClickTemplateCard " + name)
        axios.get('http://localhost:9000/templates/find', { params: { template_name: name } })
            .then(res => {
                console.log(res.data)
                let template_data = res.data[0]

                //update all the variable of the canvas
                let title_array = template_data.titles
                this.props.dispatch(setTitlesCanvasServer(title_array))
                this.props.dispatch(setTitlesICanvas(template_data.titles_i))
                this.props.dispatch(setCanvasWidth(template_data.canvas_width))
                this.props.dispatch(setCanvasHeight(template_data.canvas_height))
                this.props.dispatch(setBackgroundImgName(template_data.background_img_name))
                this.props.dispatch(setBackgroundImgPath(template_data.background_img_path))
                this.props.dispatch(setElementImg(template_data.element_img))
                this.props.dispatch(setElementPositionX(template_data.element_position_x))
                this.props.dispatch(setElementPositionY(template_data.element_position_y))
                this.props.dispatch(setElementWidth(template_data.element_width))
                this.props.dispatch(setElementHeight(template_data.element_height))

                this.props.dispatch(setDisplayMainOption('canva'))
            });


    }



    render() {
        // let temp_name = ''
        return (

            <div className="d-flex flex-column justify-content-start white_circleborder_background mb-4  " style={{ marginTop: "6rem", width: "75vw", height: "87vh" }}>
                <div className="d-flex flex-row justify-content-center" style={{ backgroundColor: "#F5F5FA66", marginTop: "4vh", width: "100%", padding: "1%" }}>


                    <div className="d-flex flex-row justify-content-center">
                        <div style={{ color: "#8181A5" }}>Project Name | </div>
                        <div style={{ color: "#8181A5" }}> Last Opened 02/03/2020</div>
                    </div>


                </div>
                <div className="d-flex flex-row justify-content-between  container-fluid" style={{ marginTop: "4vh", width: "100%", padding: "1%" }}>
                    <div className="d-flex flex-row justify-content-start">
                        <label type="label" className="bb" >Face Book cover</label>
                        <label type="label" className="bb" >Instegram 20</label>
                        <label type="label" className="bb" >Blog Cover 32</label>
                    </div>
                    <div class="md-form active-cyan active-cyan-2 mb-3">


                        <div className="d-flex justify-content-start searchIcon">
                            <div className="mr-2 ml-2">
                                <img src={searchIcon} />
                            </div>
                            <div className="d-flex justify-content-around">
                                <input type="text" placeholder="Search" className="searchInput" />
                            </div>

                        </div>

                        {/* <input className="form-control" type="text" placeholder="Search" aria-label="Search" style={{ width: "20vw" }} /> */}
                    </div>
                </div>


                <div className="d-flex flex-row wrapOverflow ml-4">

                    <Card.Group itemsPerRow={4} >
                        <Card className="card_style" raised
                            onClick={this.onClickNewProject}
                        >
                            <Card.Content className="d-flex justify-content-center align-item-center" style={{ backgroundColor: "#A66DFF" }}>
                                <AddIcon className="d-flex justify-content-center align-item-center" style={{ color: "white", fontSize: 100 }} />
                            </Card.Content>
                            <Card.Content extra>
                                <Card.Header className="d-flex justify-content-center">New Project</Card.Header>
                                <a className="d-flex justify-content-center">
                                    Create Your Blox                                </a>
                            </Card.Content>
                        </Card>

                        {//comment

                            this.props.canvasDetails.imageTemplates.map((data) => (
                                <Card className="card_style" raised
                                    onClick={() => this.onClickTemplateCard(data["name"])}>
                                    {/* {this.setState({ name_of_temp: data[1] })} */}
                                    {/* <Image src={data["image"]} wrapped ui={false} /> */}
                                    <Image src={require('C:/Users/User/Documents/GitHub/Blox-shira/backend/api/uploads/' + data["name"] + '.png')} wrapped ui={false} />

                                    <Card.Content extra>
                                        <Card.Header className="d-flex justify-content-center">
                                            {data["name"]}
                                            {/* {{temp_name = data[1]} } */}
                                        </Card.Header>
                                        <a className="d-flex justify-content-center">
                                            <Icon name='heart' />
                         180 pepole like
                                  </a>
                                    </Card.Content>
                                </Card>))
                        }

                    </Card.Group >
                </div >
            </div >
        );
    }





}






// onClickTemplate = () => {

// }

// let name_c = "Template 0"


function mapStateToProps(state) {
    return {
        canvasDetails: state.canvasDetails.canvasDetails,
        displayComponents: state.displayComponents.displayComponents,
    };
}
export default connect(mapStateToProps)(TemplateCards)
