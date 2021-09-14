/* eslint-disable */
import PropTypes from 'prop-types';
import CssAnimation from '../CssAnimation';

function Zoom(props) {
    props = Object.assign({ name: 'zoom' }, props);
    return <CssAnimation {...props} />
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