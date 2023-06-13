import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../pigeon.png';
import { useDispatch } from 'react-redux';

function NavBar() {

    return (
        <nav class= "navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-left">
                <span class="navbar-toggler-icon"></span>
                <img src={logo} title="Pigeon Logo" width="30" height="30" class="d-inline-block aling-top"/>
                <Link className="navbar-brand" to="/">Home</Link>
            </div>
        </nav>
    );
}

export const navForm = ({text, style, _onClick }) => {
    const _onClickHandler = (event) => {
        event.preventDefault();
        _onClick?.(event);
    };

    return (
        <button {...style}>
            <Link href='#' onClick={_onClickHandler}>
                {text}
            </Link>
        </button>
    );
};
export default NavBar;