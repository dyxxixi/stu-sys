
import PropTypes from 'prop-types';

function Alert(props) {
  Alert.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string
  }
  return (
    <div className={['alert', 'alert-dismissible', 'alert-' + props.type].join(' ')} role="alert">
      <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>提示：</strong> {props.message}
    </div>
  );
}

export default Alert;
