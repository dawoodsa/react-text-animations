/* eslint-disable */
import PropTypes from 'prop-types';
import CssAnimation from '../CssAnimation';

function Rotate1(props) {
    props = Object.assign({name:'rotate1'}, props);
    return <CssAnimation {...props} />
}

Rotate1.propTypes = {
    target: PropTypes.string.isRequired,
    alternatingText: PropTypes.array.isRequired,
}

Rotate1.defaultProps = {
    id: '',
    cname: 'text-animation-rotate1',
    animation: {
        delay: 2500,
        duration: 1000,
        timingFunction: 'ease'
    },
}
export default Rotate1;