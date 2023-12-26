/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './css/HideTask.css';

const HideTask = (props) => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={`hide-element ${isVisible ? 'visible' : ''}`}>
            <a className="toggle-button" onClick={toggleVisibility}>
                <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
                Hide completed tasks
            </a>
        </div>
    );
};

export { HideTask };
