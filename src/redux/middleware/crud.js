import { setTempElementImg } from '../actions/canvasActions'
import $ from 'jquery'

export const getImageFromServer = ({ dispatch, getState }) => next => action => {
    if (action.type === 'UPLOAD_IMAGE') {

        $.ajax({
            "url": 'http://localhost:9000/templates/uploadImage/' + 'uLKS7DPkWsdywmn1LaRv1gI3RYL2',
            "method": "POST",
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "headers": {
                //בauthorization יש לשים jwt אחר!!!!!!!      
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzaW1kc01ycmNKZHBRZ3RhOGtnWHlRQmRERnkyIiwiZW1haWwiOiJjdG9AbGVhZGVyLmNvZGVzIiwiaXAiOiI1LjEwMi4yNDYuMjAyIiwiaWF0IjoxNjA0NDgyOTc0fQ.Nn2IC7j_VCDOFIkbwzT3nao0l7OcqbNqDUKkcL0Aoik"

            },
            "data": action.fd,
            "async": false,
            success: function (data1) {

                console.log("success")
                console.log(data1)

                console.log(data1);

                // dispatch({ type: 'TEMP_ELEMENT_IMG', payload: data1 })

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

// export const getCommunityById = ({ dispatch, getState }) => next => action => {

//     if (action.type === 'GET_COMMUNITY_BY_ID') {
//         axios.get('http://localhost:3000/communities/' + action.payload)
//             .then(res => { console.log("get ", res.data); dispatch(actions.getCommunity({ community: res.data })) });
//     }

//     return next(action);
// };
