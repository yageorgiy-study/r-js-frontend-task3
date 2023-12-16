import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import CustomButton from "../button/CustomButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('authorized');
    }

    return (
        <div className="navbar">
            <CustomButton label="Выйти" onClick={logout} />
            <div className="navbar__links">
                <Link to="/">Главная</Link>
                <Link to="/posts">Посты</Link>
                <Link to="/login">Войти</Link>
                <Link to="/register">Регистрация</Link>
            </div>
        </div>
    );
};

export default Navbar;
