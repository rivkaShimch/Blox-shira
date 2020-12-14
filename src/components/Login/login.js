import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
// import login.css from './components/Login/login.css';
import { withStyles } from "@material-ui/styles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { connect } from 'react-redux';


import { signInWithGoogle, signInWithEmailAndPassword, signUpUser } from '../../services/firebase'

import {
    setUser,

} from '../../redux/actions/userAction';

const styles = () => ({
    "@global": {
        body: {
            backgroundColor: "#fff"
        }
    },
    paper: {
        marginTop: 100,
        display: "flex",
        padding: 20,
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#f50057"
    },
    form: {
        marginTop: 1
    },
    errorText: {
        color: "#f50057",
        marginBottom: 5,
        textAlign: "center"
    }
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userName: '',
            signUpParam: false
        };
    }
    componentDidUpdate(prevProps, pervState) {
        if (prevProps.user != this.props.user || prevProps.loginStatus != this.props.loginStatus) {
            if (this.props.loginStatus === 'success') {
                debugger
                this.props.history.push('/' + this.props.user.username)
            }
        }
    }
    render() {
        const { classes, loginError, isAuthenticated } = this.props;
        const onChangeName = (e) => {
            this.setState({ userName: e.target.value })
            this.props.dispatch(setUser({ "username": e.target.value }))
        }
        const onChangeEmail = (e) => {
            this.setState({ email: e.target.value })
        }
        const onChangePassword = (e) => {
            this.setState({ password: e.target.value })
        }
        const signUp = () => {
            this.setState({ signUpParam: true })
        }
        const signIn = () => {
            this.setState({ signUpParam: false })
        }
        return (

            <>{this.state.signUpParam ?

                <Container component="main" maxWidth="xs">
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up To Blox
    </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="your_name"
                            label="Your Name"
                            name="your name"
                            onChange={onChangeName}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            onChange={onChangeEmail}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={onChangePassword}
                        />

                        {this.props.loginStatus === 'error' && (
                            <Typography component="p" className={classes.errorText}>
                                The email address is already in use by another account.
                            </Typography>
                        )}
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => signUpUser(this.props, this.state.userName, this.state.email, this.state.password)}
                        >
                            Sign Up
                        </Button>
                        <br></br>

                        <Link to="" onClick={signIn} >Back To Sign in</Link>


                    </Paper>
                </Container>
                :
                <Container component="main" maxWidth="xs">
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in To Blox
 </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            onChange={onChangeEmail}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={onChangePassword}
                        />
                        {this.props.loginStatus === 'error' && (
                            <Typography component="p" className={classes.errorText}>
                                Incorrect email or password.
                            </Typography>
                        )}
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => signInWithEmailAndPassword(this.props, this.state.email, this.state.password)}
                        >
                            Sign In
                     </Button>
                        <br></br>
                        <span>Or Continue with Google</span>
                        <br></br>
                        <img style={{ width: "30px", height: "30px" }} src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon" onClick={() => signInWithGoogle(this.props)} />
                        <Link to="" onClick={signUp} >Don't Have an Account? Sign Up Here</Link>


                    </Paper>
                </Container>
            }  </ >

        );
    }
}

function mapStateToProps(state) {
    return {
        displayComponents: state.displayComponents.displayComponents,
        loginStatus: state.loginStatus.loginStatus,
        canvasDetails: state.canvasDetails.canvasDetails,
        user: state.user.user
    };
}
export default connect(mapStateToProps)(withStyles(styles)(withRouter(Login)))
