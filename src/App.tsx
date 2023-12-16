import React, {useEffect, useState} from 'react';
import './App.css';
import ListTasks from "./components/ListTasks";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import { AuthContext } from './context';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/ui/navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {

    // TODO: auth replace with JWT

    const [
        isAuthenticated,
        setIsAuthenticated
    ] = useState(false);
    const [
        isLoading,
        setLoading
    ] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('authorized')) {
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, [])


    /*
        <div className="App">
        <Header />
        <Footer />
        </div>
     */

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
