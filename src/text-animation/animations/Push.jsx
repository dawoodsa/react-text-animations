/* eslint-disable */
import PropTypes from 'prop-types';
import WordAnimation from '../WordAnimation';

function Push(props) {
    props = Object.assign({ name: 'push' }, props);
    return <WordAnimation {...props} />
}

Push.propTypes = {
    target: PropTypes.string.isRequired,
    alternatingText: PropTypes.array.isRequired,
}

Push.defaultProps = {
    id: '',
    cname: 'text-animation-Push',
    animation: {
        delay: 2500,
        duration: 600,
        timingFunction: 'ease'
    },
}
export default Push;