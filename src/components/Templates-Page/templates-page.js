import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import Edit_choice from '../Edit_choice/edit_choice';
import templates_page from './templates-page.css';
// import "../Button_Editor/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';
import searchIcon from '../img/searchSolid.svg';
import { withRouter } from 'react-router-dom';


import {
    setName,
    setCanvasWidth,
    setCanvasHeight,
    setElementPositionX,
    setElementPositionY,
    setElementWidth,
    setElementHeight,
    setTitlesICanvas,
    setTitlesCanvasServer,
    setBackgroundColor,
    setElementsCanvasServer,
    setElementsICanvas,
    setBackgroundImgName,
    setShapesCanvasServer
} from '../../redux/actions/canvasActions'
import {
    setDisplayMainOption
} from '../../redux/actions/componentsActions'
import { CalendarDay } from 'react-bootstrap-icons';

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
        this.props.dispatch(setElementsCanvasServer([]))
        this.props.dispatch(setShapesCanvasServer([]))
        this.props.dispatch(setBackgroundColor('white'))
        this.props.dispatch(setDisplayMainOption('canva'))
    }

    onClickTemplateCard = (name) => {
        console.log("in onClickTemplateCard " + name)
        debugger
        axios.post('https://blox.leader.codes/api/find/' + name)
            .then(res => {
                debugger
                console.log(res.data)
                let template_data = res.data[0]
                //update all the variable of the canvas
                let title_array = template_data.titles
                this.props.dispatch(setTitlesCanvasServer(title_array))
                this.props.dispatch(setTitlesICanvas(template_data.titles_i))
                this.props.dispatch(setCanvasWidth(template_data.canvas_width))
                this.props.dispatch(setCanvasHeight(template_data.canvas_height))
                this.props.dispatch(setBackgroundColor(template_data.background_color))
                this.props.dispatch(setElementsCanvasServer(template_data.element_img))
                this.props.dispatch(setElementsICanvas(template_data.element_img_i))
                this.props.dispatch(setElementPositionX(template_data.element_position_x))
                this.props.dispatch(setElementPositionY(template_data.element_position_y))
                this.props.dispatch(setElementWidth(template_data.element_width))
                this.props.dispatch(setElementHeight(template_data.element_height))
                this.props.dispatch(setShapesCanvasServer(template_data.shapes))
                this.props.dispatch(setDisplayMainOption('canva'))
            });
        this.props.history.push('/' + this.props.user.username + "/edit-canvas")

    }
    render() {
        return (
            <div className="d-flex flex-column justify-content-start white_circleborder_background mb-4  " style={{ marginTop: "4rem", width: "74vw", height: "90vh" }}>
                <div className="d-flex flex-row justify-content-center" style={{ backgroundColor: "#F5F5FA66", marginTop: "4vh", width: "100%", padding: "1%" }}>


                    <div className="d-flex flex-row justify-content-center">
                        <div style={{ color: "#8181A5" }}>Project Name | </div>
                        <div style={{ color: "#8181A5" }}> Last Opened {new Date().toString()}</div>
                    </div>


                </div>
                <div className="d-flex flex-row justify-content-between  containe5-fluid" style={{ marginTop: "4vh", width: "100%", padding: "1%" }}>
                    <div className="d-flex flex-row justify-content-start">
                        <label type="label" className="bb" >Facebook cover</label>
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
                <div className="d-flex flex-row wrapOverflow ml-4" style={{ minHeight: "100px", marginRight: "5px" }}>
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
                        {
                            this.props.canvasDetails.imageTemplates.map((name_of_template) => (
                                <Card className="card_style" raised
                                    onClick={() => this.onClickTemplateCard(name_of_template)}>
                                    <Image src={require('C:/Users/User/Documents/GitHub/Blox-shira/backend/api/uploads/' + name_of_template + '.png')} wrapped ui={false} />
                                    <Card.Content extra>
                                        <Card.Header className="d-flex justify-content-center">
                                            {name_of_template}
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

function mapStateToProps(state) {
    return {
        canvasDetails: state.canvasDetails.canvasDetails,
        displayComponents: state.displayComponents.displayComponents,
        user: state.user.user

    };
}
export default connect(mapStateToProps)(withRouter(TemplateCards))
