import React from 'react';
// import PropTypes from 'prop-types';

function Alert(props) {
    const capitalize = (word) => {
        let word1 = word.toLowerCase()
        return word1.charAt(0).toUpperCase() + word1.slice(1);

    }

    return (
        <div>
            {props.alert && (
                <div className="alert alert-primary" role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                </div>
            )}
        </div>
    );
}

export default Alert;
