import { Navigate, Outlet } from 'react-router-dom'

const AuthRoutes = ({ isAllowed }) => {
  return isAllowed ? <Outlet /> : <Navigate to="/sign_in" />
}

export default AuthRoutes
