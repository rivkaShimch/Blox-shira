import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';

import {
    setName,
    setTitlesCanvas

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

    onClickTemplateCard() {
        this.props.dispatch(setTitlesCanvas(""))
        console.log("onClickNewProject setTitlesCanvas " + this.props.canvasDetails.titles)
        this.props.dispatch(setDisplayTitleEditor(false))
        this.props.dispatch(setDisplaySettingPage(false))
        this.props.dispatch(setNewCanva(true))
    }


    render() {
        return (

            <div style={{ paddingTop: "10px", paddingRight: "10px", paddingLeft: "10px" }}>
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

                    {this.props.canvasDetails.imageTemplates.map((image) => (
                        <Card raised
                            onClick={this.onClickTemplateCard}
                        >
                            {/* {props.dispatch(setName(props.name_c + (i + 1)))} */}
                            <Image size={"small"} src={image} wrapped ui={false} />
                            <Card.Content extra>
                                <Card.Header className="d-flex justify-content-center">
                                    {/* {console.log(name_of_temp)} */}
                                    {/* {props.canvasDetails.name} */}
                                    {/* {name_of_temp} */}
                                </Card.Header>
                                <a className="d-flex justify-content-center">
                                    <Icon name='heart' />
                         180 pepole like
 </a>
                            </Card.Content>
                        </Card>))}

                </Card.Group>

            </div>
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
