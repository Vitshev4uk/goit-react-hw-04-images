import React from "react";
import css from './Button.module.css';
import PropTypes from 'prop-types';

function Button(props) {
    const { children, onClick } = props;

    return (
            <>
                <button type="submit" onClick={onClick} className={css.Button}>{ children }</button>
            </>
        )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Button;