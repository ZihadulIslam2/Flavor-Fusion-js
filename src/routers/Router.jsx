import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/Home"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import Menu from "../pages/Menu"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <div>this is about page.</div>
            },
            {
                path: "/contact",
                element: <div>this is my contact</div>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            },
            {
                path: "/menu",
                element: <Menu/>
            },

        ]
    }
]) 

export default Router