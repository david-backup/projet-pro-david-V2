import PropTypes from "prop-types";

const Label = ({ htmlFor, text, className }) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Label;
