/* eslint-disable */
import PropTypes from 'prop-types';
import WordAnimation from '../WordAnimation';

function Rotate1(props) {
    props = Object.assign({name:'rotate1'}, props);
    return <WordAnimation {...props} />
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