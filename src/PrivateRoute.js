import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './Auth'

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
    const currentUser = useContext(AuthContext)
    return (
        <Route
        {...rest}
        render={routeProps =>
        !!currentUser ? (
            <RouteComponent {...routeProps} currentUser={currentUser} />
        ) : (
            <Navigate to="/login" replace="true" />
        )
        }
        />
    )
}