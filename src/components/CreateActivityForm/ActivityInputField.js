import './index.scss';
import PropTypes from 'prop-types';

const ActivityInputField = (props) => {
  const { labelName, inputName, placeholderText } = props;
  return (
    <div className="row">
      <label className="label">
        {labelName}
        <input
          className="input"
          name={inputName}
          placeholder={placeholderText}
          type="string"
        />
      </label>
    </div>
  );
};

ActivityInputField.propTypes = {
  labelName: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
};

export default ActivityInputField;
