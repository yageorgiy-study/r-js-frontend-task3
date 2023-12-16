import React, {ComponentPropsWithoutRef} from 'react';
import classes from './CustomButton.module.css';

interface CustomButtonGroupProps extends ComponentPropsWithoutRef<"button"> {
    label: string;
}

const CustomButton = ({ label, ...props }: CustomButtonGroupProps) => {
    return (
        <button {...props} className={classes.button}>
            {label}
        </button>
    );
};

export default CustomButton;
