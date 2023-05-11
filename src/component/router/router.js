import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/home/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])
export default router;