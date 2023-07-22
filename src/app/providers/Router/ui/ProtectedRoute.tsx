import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { routePath } from 'shared/config/routeConfig/routeConfig';

type Props = {
    children: JSX.Element
}

export const ProtectedRoute = ({ children }: Props) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return (
            <Navigate
                replace
                to={routePath.main}
                state={{ from: location }}
            />
        );
    }

    return children;
};
