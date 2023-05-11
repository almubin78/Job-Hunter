import React from 'react';

const FeatureJob = ({ single }) => {
    const { company, jobCategoryList } = single;
    console.log(single);
    console.log('jobCList', jobCategoryList);
    return (
        <div className='border'>
            <h2>Company Name {company}</h2>
            {jobCategoryList.map(s =>
                <>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={s.logo} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{s.designation}</h2>
                            <p>{s.availableJob} Job Available</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default FeatureJob;