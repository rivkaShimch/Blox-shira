import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import axios from 'axios';

import {
    setName,
    setTitlesCanvas,
    setCanvasWidth,
    setCanvasHeight,
    setTitlePositionX,
    setTitlePositionY,
    setTitleColor,
    setTitleSize,
    setBackgroundImgName,
    setBackgroundImgPath,
    setElementPositionX,
    setElementPositionY,
    setElementWidth,
    setElementHeight,
    setTitleType,
    setElementImg
} from '../../redux/actions/canvasActions'
import {
    setDisplayTitleEditor,
    setDisplaySettingPage,
    setNewCanva
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
        this.props.dispatch(setTitlesCanvas(""))
        console.log("onClickNewProject setTitlesCanvas " + this.props.canvasDetails.titles)
        this.props.dispatch(setDisplayTitleEditor(false))
        this.props.dispatch(setDisplaySettingPage(false))
        this.props.dispatch(setNewCanva(true))
    }

    onClickTemplateCard = (name) => {
        // { params: { userId: 'foo@baz.com' } }
        console.log("in onClickTemplateCard " + name)
        axios.get('http://localhost:9000/templates/find', { params: { template_name: name } })
            .then(res => {
                console.log(res.data)
                let template_data = res.data[0]
                //update all the variable of the canvas
                this.props.dispatch(setTitlesCanvas(template_data.titles))
                this.props.dispatch(setTitlePositionX(template_data.title_position_x))
                this.props.dispatch(setTitlePositionY(template_data.title_position_y))
                this.props.dispatch(setCanvasWidth(template_data.canvas_width))
                this.props.dispatch(setCanvasHeight(template_data.canvas_height))
                this.props.dispatch(setBackgroundImgName(template_data.background_img_name))
                this.props.dispatch(setBackgroundImgPath(template_data.background_img_path))
                this.props.dispatch(setTitleSize(template_data.title_size))
                this.props.dispatch(setTitleColor(template_data.title_color))
                this.props.dispatch(setTitleType(template_data.title_type))
                this.props.dispatch(setElementImg(template_data.element_img))
                this.props.dispatch(setElementPositionX(template_data.element_position_x))
                this.props.dispatch(setElementPositionY(template_data.element_position_y))
                this.props.dispatch(setElementWidth(template_data.element_width))
                this.props.dispatch(setElementHeight(template_data.element_height))



                this.props.dispatch(setDisplayTitleEditor(true))
                this.props.dispatch(setDisplaySettingPage(false))
                this.props.dispatch(setNewCanva(true))
                // template_name = req.body.template_name;
                // canvas_width = req.body.canvas_width;
                // const canvas_height = req.body.canvas_height;
                // const background_img_name = req.body.background_img_name;
                // const background_img_path = req.body.background_img_path;
                // const titles = req.body.titles;
                // const title_size = req.body.title_size;
                // const title_color = req.body.title_color;
                // const title_type = req.body.title_type;
                // const title_position_x = req.body.title_position_x;
                // const title_position_y = req.body.title_position_y;
                // const element_img = req.body.element_img;
                // const element_position_x = req.body.element_position_x;
                // const element_position_y = req.body.element_position_y;
                // const element_width = req.body.element_width;
                // const element_height = req.body.element_height;


            });


    }


    render() {
        // let temp_name = ''
        return (

            <div
                style={{ paddingTop: "10px", paddingRight: "10px", paddingLeft: "10px" }}
            >
                <div className="d-flex flex column justify-content-center">
                    <div style={{ color: "#8181A5" }}>Project Name | </div>
                    <div style={{ color: "#8181A5" }}> Last Opened 02/03/2020</div>
                </div>
                <Card.Group itemsPerRow={4}>
                    <Card raised
                        onClick={this.onClickNewProject}
                    >
                        <Card.Content className="d-flex justify-content-center align-item-center" style={{ backgroundColor: "#A66DFF" }}>
                            <AddIcon className="d-flex justify-content-center align-item-center" style={{ color: "white", fontSize: 100 }} />
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Header className="d-flex justify-content-center">New Project</Card.Header>
                        </Card.Content>
                    </Card>

                    {this.props.canvasDetails.imageTemplates.map((data) => (
                        <Card raised
                            onClick={() => this.onClickTemplateCard(data["name"])}>
                            {/* {this.setState({ name_of_temp: data[1] })} */}
                            <Image src={data["image"]} wrapped ui={false} />
                            <Card.Content extra>
                                <Card.Header className="d-flex justify-content-center">
                                    {data["name"]}
                                    {/* {temp_name = data[1]} */}
                                </Card.Header>
                                <a className="d-flex justify-content-center">
                                    <Icon name='heart' />
                         180 pepole like
 </a>
                            </Card.Content>
                        </Card>))}

                </Card.Group>

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
