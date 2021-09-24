/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import WordAnimation from '../templates/WordAnimation';

function Zoom(props) {
    props = Object.assign({ name: 'zoom' }, props);
    return <WordAnimation {...props} />
}

Zoom.propTypes = {
    target: PropTypes.string.isRequired,
    alternatingText: PropTypes.array.isRequired,
}

Zoom.defaultProps = {
    id: '',
    cname: 'text-animation-zoom',
    animation: {
        delay: 2500,
        duration: 800,
        timingFunction: 'linear'
    },
}

export default Zoom;