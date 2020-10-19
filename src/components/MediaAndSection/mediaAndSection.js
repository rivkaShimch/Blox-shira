import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
// import { FaRocket } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Scrollspy from 'react-scrollspy';


export default class MediaAndSection extends Component {
    render() {
        const {
            itemContainerClassName, activeItemClassName, itemClassName
        } = this.props;

        return (

            <ul className={classNames(itemContainerClassName)}>
                {this.state.items.map((item, k) => {
                    return (
                        <li
                            className={classNames(
                                itemClassName,
                                item.inView ? activeItemClassName : null
                            )}
                            key={k}
                            onClick={() => {
                                this.scrollTo(item.element);
                            }}
                        >
                            {item.element.innerText}
                        </li>
                    );
                })}
            </ul>
        );


    }
}