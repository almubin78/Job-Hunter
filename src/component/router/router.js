import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/home/Home";
import JobDetails from "../JobDetails/JobDetails";
import Statistics from "../Stastics/Statistics";
import { ErrorBoundary } from "react-error-boundary";
import ApplyedJob from "../AppliedJob/ApplyedJob";
import Blog from "../Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ErrorBoundary >
                <Main />
            </ErrorBoundary>),
        children: [
            {
                path: '/',
                element: <Home></Home>
            },{
                path:'/appliedJob',
                element:<ApplyedJob></ApplyedJob>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            }
            ,
            {

                path: '/details/:id',
                element: <JobDetails></JobDetails>,
                loader: async ({ params }) => {
                    await fetch(`/details/${params.id}`);
                    return await fetch('data.json')
                }
            },
            {
                path:'blog',
                element:<Blog/>
            }
        ]
    }
])
export default router;