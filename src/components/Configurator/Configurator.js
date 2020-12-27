
import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Configurator.css'
// import EditPage from '../editPage/editPage'
// import EditSection from '../editSection/editSection'
// import EditElement from '../editElement/editElement'
// import NewTicketButton from '../../NewTicketButton/NewTicketButton';
import { Link, withRouter, Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import SettingsIcon from '@material-ui/icons/Settings';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import axios from 'axios';

import Title_Editor from '../Title_Editor/title_editor';
import Button_Editor from '../Button_Editor/button_editor';
import Image_Editor from '../Image_Editor/image_editor';
import Shape_Editor from '../Shape_Editor/shape_editor';

import Background_Editor from '../Background_Editor/background_editor';
// import '../Button_Editor/node_modules/semantic-ui-css/semantic.min.css'

import { logOut } from '../../services/firebase'

import {
    setDisplayEditor,
    setDisplayMainOption,
    setDisplayEditChoice,

} from '../../redux/actions/componentsActions'
import {
    addTemplateImage,
    setName,
    setCanvasWidth_,
    setCanvasHeight_,
    setSliderInputInScale
} from '../../redux/actions/canvasActions'



class Configurator extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {

            Iconcolor: '#B1B1B1',
            background_Color: "#3A405E",
            bringDataFromDB: false,
            fontColor: '#fffff',
            title_fontColor: '#fffff',
            title_color: 'white'
        };
    }


    changeColor = () => {
        if (this.state.Iconcolor === '#B1B1B1')
            this.setState({ Iconcolor: "black", background_Color: 'white', fontColor: 'black', title_fontColor: 'black', title_color: 'black' });
        else if (this.state.Iconcolor === 'black')
            this.setState({ Iconcolor: "#B1B1B1", background_Color: '#3A405E', fontColor: '#B1B1B1', title_fontColor: '#fffff', title_color: 'white' })

    };
    onClickSetting = () => {

        if (!this.state.bringDataFromDB) {
            this.setState({
                bringDataFromDB: true
            })
            //https://blox.leader.codes/api/getTemplates/'
            axios.post('http://localhost:9000/templateImages')
                .then(res => {
                    // console.log("data  " + res.data[0].template_name)
                    let data = res.data


                    data.map((template) => (
                        this.props.dispatch(addTemplateImage(template.template_name))
                    ))
                    // console.log("my array " + this.props.canvasDetails.imageTemplates)
                })
                .catch(err => {
                    console.log("in catch");
                })
        }
        this.props.dispatch(setDisplayMainOption('cards'))
        this.props.dispatch(setDisplayEditor(''))
        console.log("in onClickSetting " + this.props.displayComponents.display_main_option)
        this.props.history.push('/' + this.props.user.username + "/templates")
    };



    render() {
        return (
            <div id="wrap-configurator" className="pt-4 px-2" style={{ display: this.props.displayComponents.display_configurator, backgroundColor: this.state.background_Color, color: this.state.fontColor }}>
                <div edge="end" color="inherit" aria-label="setting" style={{ color: this.state.Iconcolor, marginLeft: "0.8vw", marginTop: "2vh" }} >
                    <SettingsIcon onClick={this.onClickSetting} />
                    <InvertColorsIcon data-tip="Light Mode" data-tip="tooltip" delayHide='1000' onClick={this.changeColor} style={{ color: this.state.color1, float: "right", marginRight: "0.5vw" }} />
                </div>

                <div id="main_configurator_button" style={{ color: this.state.Iconcolor }}>Art Page</div>
                <div style={{ marginTop: "2vh", color: this.state.title_fontColor, backgroundColor: this.state.background_Color }}>
                    {this.props.displayComponents.display_editor === "title" ? <Title_Editor color={this.state.title_color} color2={this.state.Iconcolor} /> : <span></span>}
                    {this.props.displayComponents.display_editor === "button" ? <Button_Editor color={this.state.title_color} color2={this.state.Iconcolor} /> : <span></span>}
                    {this.props.displayComponents.display_editor === "image" ? <Image_Editor color={this.state.title_color} color2={this.state.Iconcolor} /> : <span></span>}
                    {this.props.displayComponents.display_editor === "shape" ? <Shape_Editor color={this.state.title_color} color2={this.state.Iconcolor} /> : <span></span>}
                    {this.props.displayComponents.display_editor === "background" ? <Background_Editor color={this.state.title_color} color2={this.state.Iconcolor} /> : <span></span>}
                </div>
                <div id="bottom_configurtor">
                    <div id="button_save">save</div>
                </div>
                {/* <NewTicketButton></NewTicketButton> */}
                {/* <div>
                        <EditPage></EditPage>
                        {(() => {
                            switch (collapseIsOpen) {
                                case 'section':
                                return <EditSection></EditSection>

                                    break;
                                case 'element':
                                    return (elementInEditing &&<EditElement></EditElement>)

                                    break;

                                default:
                                    break;
                            }
                        })()}

                         <div id="bottom_configurtor"></div>
                        </div>
                        </div> */}



            </div>
        );
    }

}
function mapStateToProps(state) {
    // console.log("state   " + state.displayComponents.displayComponents)
    return {
        displayComponents: state.displayComponents.displayComponents,
        canvasDetails: state.canvasDetails.canvasDetails,
        user: state.user.user
    };
}
export default connect(mapStateToProps)((withRouter(Configurator)))






