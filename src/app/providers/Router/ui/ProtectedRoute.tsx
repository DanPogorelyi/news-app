import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData, getUserRoles, UserRole } from 'entities/User';
import { routePath } from 'shared/config/routeConfig/routeConfig';

type Props = {
    children: JSX.Element;
    roles?: UserRole[];
}

// TODO: roles is undefined?
export const ProtectedRoute = ({ children, roles }: Props) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasAccess = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((role) => userRoles.includes(role));
    }, [roles, userRoles]);

    if (!auth) {
        return (
            <Navigate
                replace
                to={routePath.main}
                state={{ from: location }}
            />
        );
    }

    console.log('hasAccess', { userRoles, hasAccess, rolesFromProps: roles });

    if (!hasAccess) {
        return (
            <Navigate
                replace
                to={routePath.forbidden}
                state={{ from: location }}
            />
        );
    }

    return children;
};
