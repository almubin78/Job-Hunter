import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../LocalStorage/localStorage';

const ApplyedJob = () => {
    const [appliedJob,setAppliedJob] = useState([]);
    // console.log(appliedJob);
    const idFromDB = getStoredCart('applied-job');
    // console.log(idFromDB[0]);
    const [error,setError] = useState('')
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>{
            // const sdata = data.jobDetails;
            // console.log(sdata);
            const findData = data.find(s=>console.log(s.jobDetails));
            // setAppliedJob(findData);
        })
    },[]);
    useEffect(()=>{
        const localCart = getStoredCart('applied-job');
        const saveJob = [];
        // console.log(saveJob);
        for(const id in localCart){
            console.log(id);
            const previousApplied = appliedJob.find(s=>s._id === id);
            if(previousApplied){
                saveJob.push(previousApplied)
            }else{
                const message = 'id not found';
                setError(message)
            }
        }
    },[appliedJob]);
    // console.log(saveJob);
    return (
        <div>
            {error}
        </div>
    );
};

export default ApplyedJob;