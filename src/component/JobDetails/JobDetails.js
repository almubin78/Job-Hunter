import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const [mappingLoaderData,setMappingLoaderData] = useState({});
    console.log(mappingLoaderData);
    const data = useLoaderData();
    // console.log(data);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setMappingLoaderData(data))
    },[data])


    const getObject = useParams();
    const getStringId = getObject.id;
    // for (const x of mappingLoaderData) {
    //     // console.log(x);
    //     if(x._id === getStringId){
    //         // setMappingLoaderData(x)
    //         // return;
    //     }
    // }
    return (
        <div>
            Single Job details
        </div>
    );
};

export default JobDetails;