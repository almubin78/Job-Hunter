import React from 'react';

const FeatureJob = ({single}) => {
    const {company,jobCategoryList} = single;
    console.log(single);
    console.log('jobCList',jobCategoryList);
    return (
        <div>
            <h2>Company Name {company}</h2>
            {jobCategoryList.map(s=>
                    <>
                    <h2>{s.designation}</h2>
                    <span >{s.availableJob}</span><span>Job Available</span>
                    </>
                )}
        </div>
    );
};

export default FeatureJob;