import React, { Component } from 'react';
import styles from './home.css'
import { Link } from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <div className="d-flex flex-column align-item-center align-content-center justify-content-between">

                <div className="row">
                    <img src={require('../img/banner_ad.jpg')} alt="njknjkn" width="1100px" height="100px"></img>

                    <button type="button" className="btn coloumn"
                        title="עצב באנר" data-target="#">
                        <img src={require('../img/כרטיס ביקור.png')} className="button_image" />
                        <Link to="/empty_page">Create Your Banner Now!! </Link>

                    </button>
                    <button type="button" className="btn coloumn" title="עצב באנר"
                        data-target="#">
                        <img src={require('../img/כרטיס ביקור.png')} className="button_image" />
                        <div>Do It Easy</div>
                    </button>

                </div>
            </div>

        );
    }
}