import { setTempElementImg } from '../actions/canvasActions'
import { setUser, setCheckPermission } from '../actions/userAction'
import $ from 'jquery'
import { auth } from '../../services/firebase';
import { act } from 'react-dom/test-utils';
import { useHistory } from 'react-router-dom'
let username = ''
const history = ''
export const checkPermission = ({ dispatch, getState }) => next => action => {
    debugger
    if (action.type === 'CHECK_PERMISSION') {
        console.log("user2: ", username);
        let TokenToString = action.payload.accessToken.toString();
        let dataToProfilePage = {
            action: "loginCheckPermission",
            token: TokenToString,
        };
        // username = getState().user.user.username
        if (username === "null" || username === null) {
            debugger
            username = getState().user.user.username
        }
        debugger
        $.ajax({
            url: "https://blox.leader.codes/api/checkPremission/" + username,
            headers: {
                Authorization: TokenToString
            },
            method: "post",
            dataType: "json",
            contentType: "application/json",
            withCradentials: true,
            data: JSON.stringify(dataToProfilePage),
            success: function (data) {
                // history = useHistory()
                console.log("dataaaaaa", data)
                let jsonWebToken = data.jwt;
                let uid = data.uid;
                let noQuotesJwtData = jsonWebToken.split('"').join("");
                let now = new Date();
                now.setMonth(now.getMonth() + 1);
                document.cookie = "jwt=" + noQuotesJwtData + ";domain=.leader.codes" + "; path=/; Expires=" + now.toUTCString() + ";"
                let username1 = data.username
                dispatch(setUser({ "_id": data._id, "username": username1, "email": data.email, "uId": data.uid, "jwt": data.jwt }))
                console.log("uuu", username)
                let tempUserName = ''
                if (username1 !== null && username1 !== undefined) {
                    tempUserName = username1.replace(' ', '%20')
                }
                debugger
                //'https://blox.leader.codes/' + tempUserName + '/'
                if (username1 !== null && (window.location.href != 'http://localhost:3000/' + tempUserName)) {
                    window.location.href = '/' + username1
                }
            },
        });

    }
    return next(action);
}

export const onAuthStateChanged = ({ dispatch, getState }) => next => action => {
    if (action.type === 'ON_AUTH_STATE_CHANGED') {
        auth.onAuthStateChanged(function (user) {
            console.log("onauthstatechanged work from middleware", user);
            if (user) {
                username = user.displayName;
                console.log("user: ", username);
                console.log("auth.currentUser", auth.currentUser);
                auth
                    .currentUser.getIdToken(true)
                    .then((firebaseToken) => {
                        console.log("ft", firebaseToken);
                        $.ajax({
                            url: "https://blox.leader.codes/api/getAccessToken",
                            method: "post",
                            dataType: "json",
                            contentType: "application/json",
                            data: JSON.stringify({
                                action: "firebaseloginwithcredentials",
                                jwt: firebaseToken
                            }),
                            success: function (data) {
                                console.log("data", data);
                                dispatch(setCheckPermission(data, action.username))
                                // checkPremission(data);
                            }
                        });
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            }
            else {
                //"https://blox.leader.codes/" 
                if (window.location.href !== "http://localhost:3000/") {
                    console.log("location")
                    window.location.href = '/'
                }
            }
        });
    }

    return next(action);
}


export const getImageFromServer = ({ dispatch, getState }) => next => action => {
    if (action.type === 'UPLOAD_IMAGE') {

        $.ajax({
            "url": 'https://blox.leader.codes/api/uploadImage/' + 'bNS4EGSQGTOuAeflYgJCULKdg122',
            "method": "POST",
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "headers": {
                //בauthorization יש לשים jwt אחר!!!!!!!      
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJiTlM0RUdTUUdUT3VBZWZsWWdKQ1VMS2RnMTIyIiwiZW1haWwiOiJyaXZrYWZmQGdtYWlsLmNvbSIsImlwIjoiNS4xMDIuMjQ2LjIwMiIsImlhdCI6MTYwNzMzNzAxNn0.bLKjgoxTtM_UybtlAARgUViXTMwpl4WttYMUvZAsIGU"

            },
            "data": action.fd,
            "async": false,
            success: function (data1) {

                console.log("success")
                console.log(data1)

                console.log(data1);
                dispatch(setTempElementImg(data1))
            },
            error: function (err) {
                console.log(err)
            }
        });

    }
    // remeber!!!!!!!!!!!
    return next(action);
};


// export const setUser = ({ dispatch, getState }) => next => action => {
//     if (action.type === 'SET_USER') {

//         debugger

//     }
//     // remeber!!!!!!!!!!!
//     return next(action);
// };
