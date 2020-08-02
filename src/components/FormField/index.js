import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldID = 'id_$(name)';
  return (
    <div>
      <label
        htmlFor={fieldID}
      >
        {label}
        :
        <input
          id={fieldID}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {},
};

FormField.PropTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.number,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default FormField;
