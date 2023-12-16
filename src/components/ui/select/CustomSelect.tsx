import React from 'react';

const CustomSelect = ({options, defaultValue, value, onChange}: {
    options: [{
        value: string,
        name: string
    }],
    defaultValue: string,
    value: string,
    onChange: any
}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default CustomSelect;
