import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";

export const routes = [
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <HomePage />,
    },
]