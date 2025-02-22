import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/auth/login';
import PublicRoute from '../components/AuthRoutes/publicRoutes';
import PrivateRoute from '../components/AuthRoutes/privateRoute';
import Dashboard from '../pages/main/Dashboard/dashboard';
import DashboarLayout from '@/components/CustomComponents/DashboardLayout';
import MangeUsers from '@/pages/main/Adminstration/userManagement/MangeUsers';
const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute element={<Login />} />,
    },
    {
        path: "/",
        element: <PrivateRoute element={<DashboarLayout/>} />, 
        children: [
          {
            path: "dashboard",
            element: <PrivateRoute element={<Dashboard />}/>,
          },
          {
            path: "manageusers",
            element: <PrivateRoute element={<MangeUsers/>}/>,
          },
        ]
    }
])

export {router}