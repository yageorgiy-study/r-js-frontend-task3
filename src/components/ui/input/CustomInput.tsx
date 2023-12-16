import React, {ComponentPropsWithoutRef} from 'react';
import classes from './CustomInput.module.css';

interface CustomInputGroupProps extends ComponentPropsWithoutRef<"input"> {
    label: string;
}

const CustomInput = ({ label, ...props }: CustomInputGroupProps) => {
    return (
        <input {...props} className={classes.input} />
    );
};

export default CustomInput;
