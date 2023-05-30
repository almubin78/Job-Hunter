import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import vector from '../../../src/assets/All Images/Vector.png'
import { addToDb } from '../LocalStorage/localStorage';

const JobDetails = () => {
    const par = useParams();
    const id = par.id;
    const goto = useNavigate();

    const data = useLoaderData();
    console.log('Loader Data', data);
    const getSingleInfo = data.find(s => s._id === id);
    // console.log();
    const checkJobDetails = getSingleInfo.JobDetails;
    const handleApply = (info)=>{
        // console.log(info.id);
        goto('/appliedJob');
        // addToDb(info.id)


    }

    return (
        <div className='container mx-auto m-10'>
            <img className='w-full max-h-32 mb-5' src={vector} alt="" />
            {
                checkJobDetails ?
                    <div className='make-grid grid md:grid-cols-2 gap-5 shadow-xl text-left'>

                        <div className='mx-auto'>
                            <h3 className='mb-5'><span className="text-lg bg-green-400 text-black p-1 rounded mx-2">Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</h3>
                            <h3 className='mb-5'><span className="text-lg bg-green-400 text-black p-1 rounded mx-2">Job Responsibility: </span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</h3>
                            <h3 className='mb-5'><span className="text-lg bg-green-400 text-black p-1 rounded mx-2">Educational Requirement: </span>Bachelor degree to complete any reputational university.</h3>
                            <h3 className='mb-5'><span className="text-lg bg-green-400 text-black p-1 rounded mx-2">Experiences: </span>2-3 Years in this field.</h3>

                        </div>
                        <div className='bg-purple-100 text-left p-5 text-black rounded-xl'>
                            <p className="text-3xl mb-5">Job Details</p>
                            <hr />
                            <p className='mt-5'><span className="text-2xl">Salary: </span>{checkJobDetails.salary} / Month </p>
                            <p className='mb-10'><span className="text-2xl">Job Title: </span>{checkJobDetails.jobTitle}</p>
                            <h3 className="text-3xl mb-5">Contact Information</h3>
                            <hr />
                            <p className='mt-5'><span className="text-2xl">Phone: </span>{checkJobDetails.phone}</p>
                            <p className=''><span className="text-2xl">Email: </span>{checkJobDetails.email}</p>
                            <p className=''><span className="text-2xl">Address: </span>{checkJobDetails.address}</p>
                            <button onClick={()=>handleApply(checkJobDetails)} className="btn mt-5">Apply Now</button>
                        </div>
                    </div>

                    : "Information Missing"
            }
        </div>
    );
};

export default JobDetails;