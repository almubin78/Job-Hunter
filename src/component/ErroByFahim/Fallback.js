import React, { useEffect } from 'react';

const Fallback = ({error}) => {
    useEffect(()=>{
        const stackOverFlowUrl = "https://www.stackoverflow.com/search?q=[react]+" + error.message;

        document.location.href = stackOverFlowUrl;
    },[])
    return <div role='alert' style={{color:'red'}}>Something went wrong!
        : {error.message}
    </div>
};

export default Fallback;