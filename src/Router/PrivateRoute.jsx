import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner} from 'react-bootstrap';
import { toast } from 'react-toastify';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    const handleRedirectToLogin = () => {
        toast.error('You have to log in first to view details');
        return <Navigate to="/login" state={{ from: location }} replace />;
      };
    if(loading) {
        return <Spinner animation="grow" variant="info" />
    }

    if(user?.email){
        return children;
    }

    return <>
   
    {handleRedirectToLogin()}
    </>;
};

export default PrivateRoute;