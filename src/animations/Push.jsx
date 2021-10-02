/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import WordAnimation from '../templates/WordAnimation';

function Push(props) {
    props = Object.assign({ name: 'push' }, props);
    return <WordAnimation {...props} />
}

Push.propTypes = {
    target: PropTypes.string.isRequired,
    text: PropTypes.array.isRequired,
}

Push.defaultProps = {
    id: '',
    cname: 'text-animation-Push',
    animation: {
        delay: 1000,
        duration: 1000,
        timingFunction: 'ease'
    },
}
export default Push;