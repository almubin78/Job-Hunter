import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/home/Home";
import JobDetails from "../JobDetails/JobDetails";
import Statistics from "../Stastics/Statistics";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            // {
            //     path:'/details',
            //     element:<JobDetails></JobDetails>
            // },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            }
            ,
            {
                
                path:'/details/:id',
                element:<JobDetails></JobDetails>,
                loader:async({params})=>{
                    await fetch(`/details/${params.id}`);
                    return await fetch('data.json')
                }
            }
        ]
    }
])
export default router;