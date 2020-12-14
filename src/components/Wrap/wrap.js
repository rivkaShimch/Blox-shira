
import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import InvertDesktopWindows from '@material-ui/icons/DesktopWindows';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Drawer from '@material-ui/core/Drawer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './wrap.css';
import profil from './assets/profil.png';

import ReactTooltip from 'react-tooltip';
import logo1 from '../img/logo1.png'
import thumbtack from '../img/thumbtack-solid.png'
import thumbtack2 from '../img/thumbtack-solid-stand.png'

import Canvas from '../canvas';
import Edit_choice from '../Edit_choice/edit_choice';
import Title_Editor from '../Title_Editor/title_editor';
import Button_Editor from '../Button_Editor/button_editor';
import Image_Editor from '../Image_Editor/image_editor';
import Shape_Editor from '../Shape_Editor/shape_editor';
import TemplateCards from '../Templates-Page/templates-page';
import Background_Editor from '../Background_Editor/background_editor';
// import '../Button_Editor/node_modules/semantic-ui-css/semantic.min.css'
import { connect } from 'react-redux';

import {
    setDisplayMainOption,

} from '../../redux/actions/componentsActions'
import {
    addTemplateImage,
    setName,
    setCanvasWidth_,
    setCanvasHeight_,
    setSliderInputInScale
} from '../../redux/actions/canvasActions'
const drawerWidth = '15%';
const useStyles = theme => ({
    root: {
        display: 'flex',
        position: 'relative',

    },
    configurator: {
        zIndex: theme.zIndex.drawer + 10,
        position: 'relative',
        marginTop: '60px',
        height: 'calc(100% - 64px)',
        top: 64,
        flexShrink: 0,
    },
    configuratorOpen: {
        height: 'calc(100% - 64px)',
        top: 64,
        width: '18%',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    configuratorClose: {
        width: '18%',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        marginTop: 50,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: 'white',
        margin: '30px',
        marginTop: '100px',
        borderStyle: 'dashed',
        borderColor: '#d3d3d361',
        height: '650px',
        position: 'relative',
    },
    appBarBottom: {
        top: 'auto',
        bottom: 0,
        background: '#0A0E1B 0% 0% no-repeat padding-box',
        minHeight: '50px',

    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    margin: {
        margin: theme.spacing(1),
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        height: 140,
        width: 100,
    },
    popover: {
        pointerEvents: 'none',
    },
    popoverPaper: {
        padding: theme.spacing(5),
    },
    configuratorContent: {
        padding: "1.5vh",
        border: " 1px solid #979797",
        borderRadius: "7px",
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(5),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',


    },
    drawerPaper: {
        top: '6.8vh',
        height: 'calc(100% - 40px)',
        background: '#3a405e 0% 0% no-repeat padding-box !important',
        border: '1px solid #707070 !important',
    },
    drawerPaperLight: {
        background: '#FFFFFF 0% 0% no-repeat padding-box !important',
        border: '1px solid #FFFFFF !important',
        boxShadow: '0px 3px 6px #00000029',
    },
    speedDial: {
        position: 'absolute',
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
            bottom: theme.spacing(2),
            right: theme.spacing(2),

        },
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
            top: theme.spacing(2),
            left: theme.spacing(2),
        },
    },

});

class Wrap extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            canva_width: '',
            openDrawer: false,
            valueTab: 0,
            openCollapse: false,
            right: true,
            thumbtackSign: true,
            thumbtackImg: thumbtack2,
            e: true,
            x: 1,
            y: 1,
            dd: false,
            display_icon_list: 'none',
            visibility: 'hidden',
            anchorEl: null,
            color: '#fffff',
            color1: '#B1B1B1',

            background: '#3a405e 0% 0% no-repeat padding-box',
            fontColor: 'white',
            arrowColor: '#B1B1B1',
            openSpeedDial: false,
            bringDataFromDB: false,
        };
        this.onKeyTemplateName = this.onKeyTemplateName.bind(this)
        this.onChangeCanvaSizeSlider = this.onChangeCanvaSizeSlider.bind(this)
        // this.zoomFunc = this.zoomFunc.bind(this)
    }
    // zoomFunc = (e) => {
    //     const temp = e.target.value / 100;
    //     console.log("enter to zoomFunc " + e.target.value + " " + temp)


    // }
    onChangeCanvaSizeSlider = (e) => {
        const temp = e.target.value / 100;
        console.log("enter to onChangeCanvaSizeSlider " + e.target.value + " " + temp)
        this.props.dispatch(setSliderInputInScale(temp))

        // this.props.dispatch(setCanvasWidth_(temp))
        // this.props.dispatch(setCanvasHeight_(temp))


    }


    onKeyTemplateName = (e) => {
        this.props.dispatch(setName(e.target.value))
        // console.log("onKeyTemplateName " + this.props.canvasDetails.name)
    }
    render() {
        const { classes } = this.props;
        const open = Boolean(this.state.anchorEl)
        const header_fashion_media = false

        return (
            <div className="d-flex " style={{ backgroundColor: "#f1f1f1" }}>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: this.state.openDrawer,
                    })}
                    style={{ backgroundColor: '#fff', color: 'black' }}
                >
                    <div className={classes.row}>
                        {/* לקשר לינק כשיהיה חיבור לשרת!!!!!!!!!!!!!!! */}
                        <Link href="https://lobby.leader.codes/">
                            <img src={logo1} alt={"logo"} width="35px" style={{ marginLeft: "20px" }} />
                        </Link>
                        <Tabs indicatorColor="white" value={this.state.valueTab} onChange={this.handleChange} style={{ width: '86%' }} centered={true}>
                            <div label={<div> WorkSpace {this.state.openCollapse ? <ExpandLess edge="end" /> : <ExpandMore edge="end" />}</div>} style={{ justifyContent: 'space-between', backgroundColor: "#EDEEF0", border: "none" }} />
                        </Tabs>
                        <img src={profil} alt={"profil"} width="45px" />

                        <img src={this.state.thumbtackImg} alt={"thumbtack"} onClick={this.toggleThumbtack} />
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.toggleDrawer}
                            style={{ right: 0 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </AppBar>

                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: this.state.openDrawer,
                        [classes.drawerClose]: !this.state.openDrawer,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: this.state.openDrawer,
                            [classes.drawerClose]: !this.state.openDrawer,
                        }),
                    }}
                >
                    <List style={{ display: this.state.display_icon_list }}>
                        <ListItem button>
                            <ListItemIcon style={{ alignSelf: 'center', textAlign: 'center', alignItems: 'center', justifyItems: 'center' }}>{<svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "#45AFFF" }} width="27.497" height="21.998" viewBox="0 0 27.497 21.998"><defs></defs><path class="a" d="M27.5,11.343v-.687a.687.687,0,0,0-.687-.687H14.78V8.249h3.093a1.375,1.375,0,0,0,1.375-1.375v-5.5A1.375,1.375,0,0,0,17.873,0H9.624A1.375,1.375,0,0,0,8.249,1.375v5.5A1.375,1.375,0,0,0,9.624,8.249h3.093V9.968H.687A.687.687,0,0,0,0,10.655v.687a.687.687,0,0,0,.687.687H5.156v1.719H2.75a1.375,1.375,0,0,0-1.375,1.375v5.5A1.375,1.375,0,0,0,2.75,22H9.624A1.375,1.375,0,0,0,11,20.623v-5.5a1.375,1.375,0,0,0-1.375-1.375H7.218V12.03H20.279v1.719H17.873A1.375,1.375,0,0,0,16.5,15.124v5.5A1.375,1.375,0,0,0,17.873,22h6.874a1.375,1.375,0,0,0,1.375-1.375v-5.5a1.375,1.375,0,0,0-1.375-1.375H22.342V12.03H26.81A.687.687,0,0,0,27.5,11.343ZM11,5.5V2.75h5.5V5.5ZM8.249,19.248H4.125V16.5H8.249Zm15.124,0H19.248V16.5h4.125Z" /></svg>}</ListItemIcon>
                            <ListItemText
                                style={{ color: "#45AFFF" }}
                                primary="Leader Box"
                            />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>{<svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "#44D7B6" }} width="20" height="20" viewBox="0 0 20 20"><defs></defs><path class="a" d="M19.062,0H.939A.938.938,0,0,0,.276,1.6L7.5,8.826v8.049a.938.938,0,0,0,.4.768l3.125,2.187a.938.938,0,0,0,1.475-.768V8.826L19.725,1.6A.938.938,0,0,0,19.062,0Z" transform="translate(0)" /></svg>}</ListItemIcon>
                            <ListItemText
                                style={{ color: "#44D7B6" }}
                                primary="Leader Funnel"
                            />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>{<svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "#6DD400" }} width="13.75" height="20" viewBox="0 0 13.75 20"><defs></defs><path class="a" d="M6.875,3.125a3.754,3.754,0,0,0-3.75,3.75.625.625,0,0,0,1.25,0,2.5,2.5,0,0,1,2.5-2.5.625.625,0,0,0,0-1.25ZM3.752,17.937a.621.621,0,0,0,.1.345l.957,1.439a.625.625,0,0,0,.52.279h3.08a.624.624,0,0,0,.52-.279l.957-1.439a.628.628,0,0,0,.1-.345l0-1.687H3.751ZM6.875,0A6.871,6.871,0,0,0,1.7,11.4,11.179,11.179,0,0,1,3.749,15v0H5.624v0a1.848,1.848,0,0,0-.084-.55,12.317,12.317,0,0,0-2.429-4.284,5,5,0,1,1,7.527,0,12.345,12.345,0,0,0-2.426,4.276A1.856,1.856,0,0,0,8.126,15v0H10v0a11.171,11.171,0,0,1,2.048-3.6A6.872,6.872,0,0,0,6.875,0Z" /></svg>}</ListItemIcon>
                            <ListItemText
                                style={{ color: "#6DD400" }}
                                primary="Leader Hub"
                            />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>{<svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "#B620E0" }} width="17.5" height="20" viewBox="0 0 17.5 20"><defs></defs><path class="a" d="M0,18.125A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125V7.5H0Zm12.5-7.656A.47.47,0,0,1,12.969,10h1.563a.47.47,0,0,1,.469.469v1.563a.47.47,0,0,1-.469.469H12.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,12.969,15h1.563a.47.47,0,0,1,.469.469v1.562a.47.47,0,0,1-.469.469H12.969a.47.47,0,0,1-.469-.469Zm-5-5A.47.47,0,0,1,7.969,10H9.531a.47.47,0,0,1,.469.469v1.563a.47.47,0,0,1-.469.469H7.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,7.969,15H9.531a.47.47,0,0,1,.469.469v1.562a.47.47,0,0,1-.469.469H7.969a.47.47,0,0,1-.469-.469Zm-5-5A.47.47,0,0,1,2.969,10H4.531A.47.47,0,0,1,5,10.469v1.563a.47.47,0,0,1-.469.469H2.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,2.969,15H4.531A.47.47,0,0,1,5,15.469v1.562a.47.47,0,0,1-.469.469H2.969a.47.47,0,0,1-.469-.469ZM15.625,2.5H13.75V.625A.627.627,0,0,0,13.125,0h-1.25a.627.627,0,0,0-.625.625V2.5h-5V.625A.627.627,0,0,0,5.625,0H4.375A.627.627,0,0,0,3.75.625V2.5H1.875A1.875,1.875,0,0,0,0,4.375V6.25H17.5V4.375A1.875,1.875,0,0,0,15.625,2.5Z" /></svg>}</ListItemIcon>
                            <ListItemText
                                style={{ color: "#B620E0" }}
                                primary="Leader Time"
                            />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>{<svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "#FF808B" }} width="17.5" height="20" viewBox="0 0 17.5 20"><defs></defs><path class="a" d="M17.5,2.857V4.643C17.5,6.217,13.581,7.5,8.75,7.5S0,6.217,0,4.643V2.857C0,1.283,3.919,0,8.75,0S17.5,1.283,17.5,2.857Zm0,4.018v4.018c0,1.574-3.919,2.857-8.75,2.857S0,12.467,0,10.893V6.875c1.88,1.295,5.321,1.9,8.75,1.9S15.62,8.17,17.5,6.875Zm0,6.25v4.018C17.5,18.717,13.581,20,8.75,20S0,18.717,0,17.143V13.125c1.88,1.295,5.321,1.9,8.75,1.9S15.62,14.42,17.5,13.125Z" /></svg>}</ListItemIcon>
                            <ListItemText
                                style={{ color: "#FF808B" }}
                                primary="Leader Stories"
                            />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>{<svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "#F7B500" }} width="16.5" height="22" viewBox="0 0 16.5 22"><defs></defs><path class="a" d="M9.625,5.844V0H1.031A1.029,1.029,0,0,0,0,1.031V20.969A1.029,1.029,0,0,0,1.031,22H15.469A1.029,1.029,0,0,0,16.5,20.969V6.875H10.656A1.034,1.034,0,0,1,9.625,5.844Zm2.75,10.141a.517.517,0,0,1-.516.516H4.641a.517.517,0,0,1-.516-.516v-.344a.517.517,0,0,1,.516-.516h7.219a.517.517,0,0,1,.516.516Zm0-2.75a.517.517,0,0,1-.516.516H4.641a.517.517,0,0,1-.516-.516v-.344a.517.517,0,0,1,.516-.516h7.219a.517.517,0,0,1,.516.516Zm0-3.094v.344a.517.517,0,0,1-.516.516H4.641a.517.517,0,0,1-.516-.516v-.344a.517.517,0,0,1,.516-.516h7.219A.517.517,0,0,1,12.375,10.141Zm4.125-4.9V5.5H11V0h.262a1.03,1.03,0,0,1,.73.3L16.2,4.512A1.028,1.028,0,0,1,16.5,5.238Z" /></svg>}</ListItemIcon>
                            <ListItemText
                                style={{ color: "#F7B500" }}
                                primary="Leader Forms"
                            />
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>{<svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "#6236FF" }} width="26.657" height="16" viewBox="0 0 26.657 16"><defs></defs><path class="a" d="M18.106,64H14.528a1.332,1.332,0,0,0-.9.35L9.534,68.1s-.008.012-.012.017a1.657,1.657,0,0,0-.087,2.332,1.737,1.737,0,0,0,2.337.112s.012,0,.017-.008L15.115,67.5a.666.666,0,1,1,.9.983l-1.087,1L20.992,74.4a3,3,0,0,1,.329.321v-8.06l-2.274-2.274A1.323,1.323,0,0,0,18.106,64Zm4.553,2.674V76a1.331,1.331,0,0,0,1.333,1.333h2.666V66.674Zm2,9.326a.666.666,0,1,1,.666-.666A.668.668,0,0,1,24.658,76ZM0,77.329H2.666A1.331,1.331,0,0,0,4,76V66.674H0Zm2-2.662a.666.666,0,1,1-.666.666A.668.668,0,0,1,2,74.667Zm18.156.775-6.219-5.048-1.25,1.145A3,3,0,1,1,8.634,67.12L12.041,64H8.551a1.33,1.33,0,0,0-.941.392L5.331,66.666v9.326h.762L9.863,79.4a2.665,2.665,0,0,0,3.749-.387l.008-.008.746.646a1.548,1.548,0,0,0,2.178-.225l1.308-1.608.225.183a1.331,1.331,0,0,0,1.874-.2l.4-.487a1.335,1.335,0,0,0-.192-1.878Z" transform="translate(0 -64)" /></svg>}</ListItemIcon>
                            <ListItemText
                                style={{ color: "#6236FF" }}
                                primary="Leader Quote"
                            />
                        </ListItem>


                    </List>
                </Drawer>
                {
                    this.props.displayComponents.display_main_option === '' ?
                        <div className="d-flex flex-row justify-content-start col-7" style={{ marginLeft: "-40px" }}>

                            <div class="d-flex flex-column col-5" id="edit_choice" >
                                <Edit_choice />
                            </div>
                            <div id="demo_canva" className="d-flex flex-column">
                                {/* <div class="col-5"> */}
                                <img class="style_dmoCanva mr-5 d-flex flex-column" src={require('./assets/tellYourStory.jpg')} style={{ marginTop: "28vh", marginLeft: "7vw", width: "650px", height: "400px", border: "3px dashed #D6CBE3" }}

                                />
                                {/* </div> */}

                            </div>

                        </div>
                        : <span></span>
                }

                {
                    this.props.displayComponents.display_main_option === 'canva' ?
                        <div className="d-flex flex-row  justify-content-start col-11" style={{ marginLeft: "-40px" }}>
                            <div className="d-flex flex-column col-3" id="edit_choice" >
                                <Edit_choice />
                            </div>
                            <div className="d-flex flex-column col-6  justify-content-center  align-items-center">
                                <div className="d-flex flex-row align-content-space-between align-items-center" style={{ width: this.props.canvasDetails.width_canva, height: this.props.canvasDetails.height_canva }}>
                                    <Canvas />
                                </div>
                            </div>

                            <div className="d-flex flex-row flex-end sl" style={{ width: "70%" }}>
                                <input type="range" min="100" max="300" className="col-8 slider ml-6"
                                    // {this.prop.canvasDetails.initial_canvas_width} 
                                    onChange={this.onChangeCanvaSizeSlider}
                                />
                            </div>

                            {/* <div className="d-flex flex-row " style={{ width: "70%" }}>
                                    <input type="range" min="100" max="150" className="col-12 slider mt-3"

                                        onChange={this.zoomFunc}
                                    />
                                </div> */}

                        </div>

                        : <span></span>
                }
                {
                    this.props.displayComponents.display_main_option === 'cards' ?
                        <div className="d-flex flex-row justify-content-between " style={{ padding: "20px" }} >
                            <TemplateCards />
                        </div>
                        : <span></span>
                }


                <Drawer anchor={'right'} id={"configurator"} classes={{ paper: clsx(classes.drawerPaper, { [classes.drawerPaperLight]: this.state.color === 'black', }) }} className={clsx(classes.configurator, {
                    [classes.configuratorOpen]: this.state.right,
                    [classes.configuratorClose]: !this.state.right,
                })} className="col-1" open={this.state['right']} fullwidth="true" variant="persistent" onClose={this.toggleDrawer}>
                    <div className={classes.row} style={{ position: 'static', marginTop: '5vh', marginBottom: '2vh' }}>
                        <div edge="end" color="inherit" aria-label="setting" onClick={this.onClickSetting} >
                            <SettingsIcon style={{ color: this.state.color1, marginLeft: "1vw" }} />
                        </div>
                        <Typography variant="h6" style={{ flexGrow: 5, color: this.state.fontColor, textAlign: 'center' }}>
                            {/*create new page*/}
                        </Typography>
                        <div edge="start" color="inherit" aria-label="menu" onClick={this.changeColor}>
                            <InvertColorsIcon data-tip="Light Mode" data-tip="tooltip" delayHide='1000' style={{ color: this.state.color1, marginRight: "2.4vw" }} />
                        </div>
                        {/* <ReactTooltip /> */}
                    </div>

                    {!this.props.displayComponents.display_setting_page ? <Button variant="outlined"

                        size="medium" className={classes.configuratorContent}
                        endIcon={<svg style={{ fill: this.state.color1 }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="8.211"
                            height="11.124"
                            viewBox="0 0 8.211 11.124">
                            <path d="M13.6,5.344,5.915.047A.265.265,0,0,0,5.5.265V10.859a.265.265,0,0,0,.415.218L13.6,5.78a.265.265,0,0,0,0-.436Z"
                                transform="translate(-5.5 0)" /></svg>}
                        style={{ color: this.state.color1, textTransform: "inherit", height: "40px", paddingLeft: "20px", fontSize: "15px" }}
                        onClick={this.f}>Page Art</Button>
                        : <span></span>}
                    {this.props.displayComponents.display_editor === "title" ? <Title_Editor color={this.state.color} /> : <span></span>}
                    {this.props.displayComponents.display_editor === "button" ? <Button_Editor color={this.state.color} /> : <span></span>}
                    {this.props.displayComponents.display_editor === "image" ? <Image_Editor /> : <span></span>}
                    {this.props.displayComponents.display_editor === "shape" ? <Shape_Editor /> : <span></span>}
                    {this.props.displayComponents.display_editor === "background" ? <Background_Editor /> : <span></span>}

                    {header_fashion_media ? <div>
                        <Button variant="outlined" size="large" className={classes.configuratorContent} endIcon={<svg style={{ fill: this.state.color }} xmlns="http://www.w3.org/2000/svg" width="8.211" height="11.124" viewBox="0 0 8.211 11.124"><path d="M13.6,5.344,5.915.047A.265.265,0,0,0,5.5.265V10.859a.265.265,0,0,0,.415.218L13.6,5.78a.265.265,0,0,0,0-.436Z" transform="translate(-5.5 0)" /></svg>} style={{ color: this.state.color }} onClick={this.f}>Start With Blank Page</Button>
                        <Button variant="outlined" size="large" className={classes.configuratorContent} endIcon={<svg style={{ fill: this.state.color }} xmlns="http://www.w3.org/2000/svg" width="8.211" height="11.124" viewBox="0 0 8.211 11.124"><path d="M13.6,5.344,5.915.047A.265.265,0,0,0,5.5.265V10.859a.265.265,0,0,0,.415.218L13.6,5.78a.265.265,0,0,0,0-.436Z" transform="translate(-5.5 0)" /></svg>} style={{ color: this.state.color }} onClick={this.f}>Start With Template</Button>
                        <Button variant="outlined" size="large" className={classes.configuratorContent} endIcon={<svg style={{ fill: this.state.color }} xmlns="http://www.w3.org/2000/svg" width="8.211" height="11.124" viewBox="0 0 8.211 11.124"><path d="M13.6,5.344,5.915.047A.265.265,0,0,0,5.5.265V10.859a.265.265,0,0,0,.415.218L13.6,5.78a.265.265,0,0,0,0-.436Z" transform="translate(-5.5 0)" /></svg>} style={{ color: this.state.color }} onClick={this.f}>Thank You Email</Button>
                    </div> : <span></span>}

                    <AppBar position="absolute" color="primary" className={classes.appBarBottom} style={{ width: "17vw", position: "fixed" }}>
                        <Toolbar style={{ minHeight: '40px' }}>

                            <div className={classes.grow} />
                            <div className="d-flex flex-column ">
                                <div className="d-flex flex-row">
                                    <input className="w3-input" style={{ color: "white", backgroundColor: " #0A0E1B" }}
                                        placeholder={this.props.canvasDetails.name}
                                        onKeyUp={this.onKeyTemplateName}
                                    >
                                    </input>
                                </div>
                                <div className="d-flex flex-row">
                                    <IconButton color="inherit" style={{ paddingLeft: '0px', paddingRight: '12px' }}>
                                        <InvertDesktopWindows />
                                    </IconButton>
                                    <Fab
                                        style={{ width: "150px" }}
                                        variant="extended"
                                        size="small"
                                        color="primary"
                                        aria-label="add"
                                        className={classes.margin}
                                        onClick={this.OnClickSave}
                                    >
                                        <svg style={{ fill: "white", flexShrink: 0, margin: '5px' }}
                                            xmlns="http://www.w3.org/2000/svg" width="8.211" height="11.124"
                                            viewBox="0 0 8.211 11.124">
                                            <path d="M13.6,5.344,5.915.047A.265.265,0,0,0,5.5.265V10.859a.265.265,0,0,0,.415.218L13.6,5.78a.265.265,0,0,0,0-.436Z"
                                                transform="translate(-5.5 0)" /></svg>
                                                        Save
                                    </Fab>
                                </div>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <ReactTooltip delayHide='1000' data-border="false" className="tooltipStyle" />
                </Drawer>

            </div >
        )

    };

    fastAccses() {
        const { classes } = this.props;
        const actions = [
            { icon: <svg className='fast-accses' xmlns="http://www.w3.org/2000/svg" width="26.657" height="16" viewBox="0 0 26.657 16"><defs></defs><path class="a" d="M18.106,64H14.528a1.332,1.332,0,0,0-.9.35L9.534,68.1s-.008.012-.012.017a1.657,1.657,0,0,0-.087,2.332,1.737,1.737,0,0,0,2.337.112s.012,0,.017-.008L15.115,67.5a.666.666,0,1,1,.9.983l-1.087,1L20.992,74.4a3,3,0,0,1,.329.321v-8.06l-2.274-2.274A1.323,1.323,0,0,0,18.106,64Zm4.553,2.674V76a1.331,1.331,0,0,0,1.333,1.333h2.666V66.674Zm2,9.326a.666.666,0,1,1,.666-.666A.668.668,0,0,1,24.658,76ZM0,77.329H2.666A1.331,1.331,0,0,0,4,76V66.674H0Zm2-2.662a.666.666,0,1,1-.666.666A.668.668,0,0,1,2,74.667Zm18.156.775-6.219-5.048-1.25,1.145A3,3,0,1,1,8.634,67.12L12.041,64H8.551a1.33,1.33,0,0,0-.941.392L5.331,66.666v9.326h.762L9.863,79.4a2.665,2.665,0,0,0,3.749-.387l.008-.008.746.646a1.548,1.548,0,0,0,2.178-.225l1.308-1.608.225.183a1.331,1.331,0,0,0,1.874-.2l.4-.487a1.335,1.335,0,0,0-.192-1.878Z" transform="translate(0 -64)" /></svg>, name: 'New quote' },
            { icon: <LocalOfferIcon />, name: 'New Event' },
            { icon: <svg className='fast-accses' xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 17.5 20"><defs></defs><path class="a" d="M0,18.125A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125V7.5H0Zm12.5-7.656A.47.47,0,0,1,12.969,10h1.563a.47.47,0,0,1,.469.469v1.563a.47.47,0,0,1-.469.469H12.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,12.969,15h1.563a.47.47,0,0,1,.469.469v1.562a.47.47,0,0,1-.469.469H12.969a.47.47,0,0,1-.469-.469Zm-5-5A.47.47,0,0,1,7.969,10H9.531a.47.47,0,0,1,.469.469v1.563a.47.47,0,0,1-.469.469H7.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,7.969,15H9.531a.47.47,0,0,1,.469.469v1.562a.47.47,0,0,1-.469.469H7.969a.47.47,0,0,1-.469-.469Zm-5-5A.47.47,0,0,1,2.969,10H4.531A.47.47,0,0,1,5,10.469v1.563a.47.47,0,0,1-.469.469H2.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,2.969,15H4.531A.47.47,0,0,1,5,15.469v1.562a.47.47,0,0,1-.469.469H2.969a.47.47,0,0,1-.469-.469ZM15.625,2.5H13.75V.625A.627.627,0,0,0,13.125,0h-1.25a.627.627,0,0,0-.625.625V2.5h-5V.625A.627.627,0,0,0,5.625,0H4.375A.627.627,0,0,0,3.75.625V2.5H1.875A1.875,1.875,0,0,0,0,4.375V6.25H17.5V4.375A1.875,1.875,0,0,0,15.625,2.5Z" /></svg>, name: 'New Time' },
            { icon: <svg className='fast-accses' xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 17.5 20"><defs></defs><path class="a" d="M17.5,2.857V4.643C17.5,6.217,13.581,7.5,8.75,7.5S0,6.217,0,4.643V2.857C0,1.283,3.919,0,8.75,0S17.5,1.283,17.5,2.857Zm0,4.018v4.018c0,1.574-3.919,2.857-8.75,2.857S0,12.467,0,10.893V6.875c1.88,1.295,5.321,1.9,8.75,1.9S15.62,8.17,17.5,6.875Zm0,6.25v4.018C17.5,18.717,13.581,20,8.75,20S0,18.717,0,17.143V13.125c1.88,1.295,5.321,1.9,8.75,1.9S15.62,14.42,17.5,13.125Z" /></svg>, name: 'Share' },
            { icon: <AccountCircleIcon />, name: 'New Contact' },
        ];
        return (
            <Grid item xs={12} md={6} style={{ bottom: '20px', marginLeft: '65%', position: "absolute" }}>
                <div className={classes.demo}>
                    <List style={{ visibility: this.state.visibility }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: '#f50057' }}>
                                    <svg className='fast-accses' xmlns="http://www.w3.org/2000/svg" width="26.657" height="16" viewBox="0 0 26.657 16"><defs></defs><path class="a" d="M18.106,64H14.528a1.332,1.332,0,0,0-.9.35L9.534,68.1s-.008.012-.012.017a1.657,1.657,0,0,0-.087,2.332,1.737,1.737,0,0,0,2.337.112s.012,0,.017-.008L15.115,67.5a.666.666,0,1,1,.9.983l-1.087,1L20.992,74.4a3,3,0,0,1,.329.321v-8.06l-2.274-2.274A1.323,1.323,0,0,0,18.106,64Zm4.553,2.674V76a1.331,1.331,0,0,0,1.333,1.333h2.666V66.674Zm2,9.326a.666.666,0,1,1,.666-.666A.668.668,0,0,1,24.658,76ZM0,77.329H2.666A1.331,1.331,0,0,0,4,76V66.674H0Zm2-2.662a.666.666,0,1,1-.666.666A.668.668,0,0,1,2,74.667Zm18.156.775-6.219-5.048-1.25,1.145A3,3,0,1,1,8.634,67.12L12.041,64H8.551a1.33,1.33,0,0,0-.941.392L5.331,66.666v9.326h.762L9.863,79.4a2.665,2.665,0,0,0,3.749-.387l.008-.008.746.646a1.548,1.548,0,0,0,2.178-.225l1.308-1.608.225.183a1.331,1.331,0,0,0,1.874-.2l.4-.487a1.335,1.335,0,0,0-.192-1.878Z" transform="translate(0 -64)" /></svg>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="New Quote"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: '#f50057' }}>
                                    <LocalOfferIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="New Event"
                            />
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: '#f50057' }}>
                                    <svg className='fast-accses' xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 17.5 20"><defs></defs><path class="a" d="M0,18.125A1.875,1.875,0,0,0,1.875,20h13.75A1.875,1.875,0,0,0,17.5,18.125V7.5H0Zm12.5-7.656A.47.47,0,0,1,12.969,10h1.563a.47.47,0,0,1,.469.469v1.563a.47.47,0,0,1-.469.469H12.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,12.969,15h1.563a.47.47,0,0,1,.469.469v1.562a.47.47,0,0,1-.469.469H12.969a.47.47,0,0,1-.469-.469Zm-5-5A.47.47,0,0,1,7.969,10H9.531a.47.47,0,0,1,.469.469v1.563a.47.47,0,0,1-.469.469H7.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,7.969,15H9.531a.47.47,0,0,1,.469.469v1.562a.47.47,0,0,1-.469.469H7.969a.47.47,0,0,1-.469-.469Zm-5-5A.47.47,0,0,1,2.969,10H4.531A.47.47,0,0,1,5,10.469v1.563a.47.47,0,0,1-.469.469H2.969a.47.47,0,0,1-.469-.469Zm0,5A.47.47,0,0,1,2.969,15H4.531A.47.47,0,0,1,5,15.469v1.562a.47.47,0,0,1-.469.469H2.969a.47.47,0,0,1-.469-.469ZM15.625,2.5H13.75V.625A.627.627,0,0,0,13.125,0h-1.25a.627.627,0,0,0-.625.625V2.5h-5V.625A.627.627,0,0,0,5.625,0H4.375A.627.627,0,0,0,3.75.625V2.5H1.875A1.875,1.875,0,0,0,0,4.375V6.25H17.5V4.375A1.875,1.875,0,0,0,15.625,2.5Z" /></svg>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="New Time"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: '#f50057' }}>
                                    <svg className='fast-accses' xmlns="http://www.w3.org/2000/svg" width="17.5" height="20" viewBox="0 0 17.5 20"><defs></defs><path class="a" d="M17.5,2.857V4.643C17.5,6.217,13.581,7.5,8.75,7.5S0,6.217,0,4.643V2.857C0,1.283,3.919,0,8.75,0S17.5,1.283,17.5,2.857Zm0,4.018v4.018c0,1.574-3.919,2.857-8.75,2.857S0,12.467,0,10.893V6.875c1.88,1.295,5.321,1.9,8.75,1.9S15.62,8.17,17.5,6.875Zm0,6.25v4.018C17.5,18.717,13.581,20,8.75,20S0,18.717,0,17.143V13.125c1.88,1.295,5.321,1.9,8.75,1.9S15.62,14.42,17.5,13.125Z" /></svg>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="New Stories"
                            />
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: '#f50057' }}>
                                    <AccountCircleIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="New Contact"
                            />
                        </ListItem>
                    </List>
                    <Fab color="secondary" aria-label="add" onMouseEnter={this.getFastAccses}>
                        <AddIcon />
                    </Fab>
                </div>

            </Grid>

        )
    }

    // showTips() {
    //     const { classes } = this.props;
    //     return (
    //         <Grid item xs={12}>
    //             <Grid container justify="center" spacing={3}>
    //                 {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (

    //                     <Grid key={value} item>
    //                         {value != 0 ? (<Paper className={classes.paper} />) : <Button variant="contained" color="secondary" className={classes.paper}>
    //                             <AddIcon />
    //                         </Button>}
    //                     </Grid>
    //                 ))}
    //             </Grid>
    //         </Grid>
    //     )
    // }
    toggleThumbtack = () => {
        // this.setState(this.state.dd === true);
        // if (this.state.dd) {

        this.setState({ e: true })

        if (this.state.e) {
            this.setState({ thumbtackImg: thumbtack })
            const show1 = this.state.openRightByThumbtack
            this.setState({ openRightByThumbtack: !show1 });
            this.setState({ e: false });
        }
        else {
            const show1 = this.state.openRightByThumbtack
            this.setState({ openRightByThumbtack: !show1 });
            this.setState({ thumbtackImg: thumbtack2 })

        }


    }
    toggleDrawer = () => {
        const show = this.state.right
        if (this.state.openRightByThumbtack === true)
            this.setState({ right: !show });
        else this.setState({ right: show });
    };
    ffff = () => {
        if (this.state.y === 1) {
            this.setState({ display_icon_list: 'block' })
            const show = this.state.openDrawer
            this.setState({ openDrawer: !show });
            this.setState({ y: 2 })

        }
        else {

            this.setState({ openDrawer: false })
            this.setState({ display_icon_list: 'none' })
            this.setState({ y: 1 })

        };
    }
    handleChange = (event, newValue) => {
        this.setState({ valueTab: newValue })
    };

    getFastAccses = () => {
        this.setState({ visibility: 'visible' })
    };

    closeFastAccses = () => {
        this.setState({ visibility: 'hidden' })
    };

    handlePopoverOpen = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handlePopoverClose = () => {
        this.setState({ anchorEl: null });
    };

    changeColor = () => {
        if (this.state.color === 'black')
            this.setState({ color: 'white', fontColor: 'white', arrowColor: 'gray' });
        else
            this.setState({ color: 'black', fontColor: 'black', arrowColor: 'white' })

    };
    onClickSetting = () => {

        if (!this.state.bringDataFromDB) {
            this.setState({
                bringDataFromDB: true
            })
            axios.get('http://localhost:9000/templates/')
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
        // console.log("in onClickSetting " + this.props.displayComponents.display_main_option)
    };

    downloadURI = (uri, name) => {
        var link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        delete link.click;
    }
    OnClickSave = () => {
        let arrBrandColors = [];
        let arrBrandColors1 = [];
        let x = 0;
        let color;

        const titles = this.props.canvasDetails.titles.slice();
        titles.map(title => {

            const found = arrBrandColors.some(el => el === title.fill);
            if (!found)
                arrBrandColors = arrBrandColors.concat(title.fill);

        })
        const backgroundColor = this.props.canvasDetails.background_color;
        const found = arrBrandColors.some(el => el === backgroundColor);
        if (!found)
            arrBrandColors = arrBrandColors.concat(backgroundColor);
        const shapes = this.props.canvasDetails.shapes.slice();
        shapes.map(shape => {

            const found = arrBrandColors.some(el => el === shape.fill);
            if (!found)
                arrBrandColors = arrBrandColors.concat(shape.fill);
        })





        console.log("arrBrandColors" + arrBrandColors)
        console.log("arrBrandColors1" + arrBrandColors1)
        console.log("in OnClickSave")

        let dataURL = (this.props.canvasDetails.dataURL)

        const newTemplate = {
            template_name: this.props.canvasDetails.name,
            background_color: this.props.canvasDetails.background_color,
            titles: this.props.canvasDetails.titles,
            element_img: this.props.canvasDetails.element_img,
            element_position_x: this.props.canvasDetails.element_position_x,
            element_position_y: this.props.canvasDetails.element_position_y,
            element_width: this.props.canvasDetails.element_width,
            element_height: this.props.canvasDetails.element_height,
            shapes: this.props.canvasDetails.shapes,
            brandColors: this.state.arrBrandColors,
        };

        // console.log(newTemplate);
        // save on mongodb
        axios.post('http://localhost:9000/templates/add', newTemplate)
            .then(res => console.log(res.data));
        //download the img to "download"
        this.downloadURI(dataURL.toDataURL(), newTemplate.template_name);
    };
    handleClose = () => {
        this.setState({ openSpeedDial: false });
    };
    handleOpen = () => {
        this.setState({ openSpeedDial: true });
    };
    f = () => {

    }

}

function mapStateToProps(state) {
    // console.log("state   " + state.displayComponents.displayComponents)
    return {
        displayComponents: state.displayComponents.displayComponents,
        canvasDetails: state.canvasDetails.canvasDetails
    };
}
export default connect(mapStateToProps)((withStyles(useStyles))(Wrap))
