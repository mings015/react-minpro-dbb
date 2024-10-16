import DetailUserPage from "@/pages/DetailUserPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import UserListPage from "@/pages/UserListPage";

export const routes = [
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/user',
        element: <UserListPage />,
    },
    {
        path: '/user-detail/:id',
        element: <DetailUserPage />,
    },
]