import PropTypes from "prop-types";

const Input = ({
  type,
  id,
  name,
  placeholder,
  required,
  onChange,
  value,
  className,
}) => {
  return (
    <input
      name={name}
      type={type}
      id={id}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      value={value}
      className={className}
    ></input>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
