import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

export const routesArray = [
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "login",
        element: <Login />,
    },
];
