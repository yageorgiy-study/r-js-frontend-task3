import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./ui/loader/Loader";
import Error from "../pages/Error";

const AppRouter = () => {
    const {isAuthenticated, isLoading} = useContext(AuthContext);
    console.log("isAuthenticated: ", isAuthenticated);

    if (isLoading) {
        return <Loader/>
    }


    return (
        isAuthenticated
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        // exact={route.exact}
                        path={route.path}
                        key={route.path}
                        Component={route.component}
                    />
                )}
                <Route path='*' element={<Error />}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        Component={route.component}
                        path={route.path}
                        // exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path='*' element={<Error />}/>
            </Routes>
    );
};

export default AppRouter;
