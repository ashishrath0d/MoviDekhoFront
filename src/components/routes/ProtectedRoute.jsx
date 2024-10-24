import { Navigate } from 'react-router';



export default function ProtectedRoute({ user, children }) {
  if (user) {
    return children;
  }
  if (!user) {
    return <Navigate to={'/Login'} />;
  }
  return null;

}
