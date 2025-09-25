import { Navigate, useLocation } from 'react-router-dom';
//useNavigate = hooks (inside js); Navigate = component (inside jsx)
import { AuthContext } from '../context/contextsCreation'; // Adjust import path
import { useContext } from 'react';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>; // Or your loading component
  }

  if (!user) {
    // Redirect to login with return url
    return <Navigate to="/log-in-page" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;