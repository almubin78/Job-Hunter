import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/home/Home";
import JobDetails from "../JobDetails/JobDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/details',
                element:<JobDetails></JobDetails>
            }
        ]
    }
])
export default router;