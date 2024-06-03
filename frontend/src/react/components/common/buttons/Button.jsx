import PropTypes from "prop-types";

const Button = ({ type, className, text, disabled }) => {
  return (
    <button type={type} className={className} disabled={disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
