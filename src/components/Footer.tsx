import React from "react";

export const Footer: React.FC<{}> = props => {
    let year = new Date().getFullYear()
    return (
        <footer>
            &copy; Copyright {year}
        </footer>
    );
};