import Welcome from "../pages/Welcome";
import Posts from "../pages/Posts";
import PostSingle from "../pages/PostSingle";
import Login from "../pages/Login";


export const privateRoutes = [
    {path: '/profile', component: Welcome, exact: true},
]

export const publicRoutes = [
    {path: '/', component: Welcome, exact: true},
    {path: '/login', component: Login, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostSingle, exact: true},
]
