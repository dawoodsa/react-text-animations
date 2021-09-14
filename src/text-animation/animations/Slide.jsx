/* eslint-disable */
import PropTypes from 'prop-types';
import CssAnimation from '../CssAnimation';
function Slide(props) {
    props = Object.assign({name:'slide'}, props);
    return <CssAnimation {...props} />
}

Slide.propTypes = {
    target: PropTypes.string.isRequired,
    alternatingText: PropTypes.array.isRequired,
}

Slide.defaultProps = {
    id: '',
    cname: 'text-animation-slide',
    animation: {
        delay: 2500,
        duration: 2000,
        timingFunction: 'ease'
    },
}
export default Slide;