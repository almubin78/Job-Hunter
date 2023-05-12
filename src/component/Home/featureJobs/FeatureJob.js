import React from 'react';
import { Link } from 'react-router-dom';

const FeatureJob = ({ single }) => {
    const {_id,jobCategoryList} = single
    
    return (
        <div className='border rounded '>

            {
                jobCategoryList.map(s =>


                    <>
                        <div className="card w-96 bg-base-100  shadow-xl mx-auto">
                            <figure className="px-10 pt-10">
                                <img src={s.logo} alt="img-not-found" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{s.designation}</h2>
                                <p>{s.availableJob} Job Available</p>
                                <div className="card-actions">
                                    <Link to={`/details/${s.id}`}><button >View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </div>
    );
};

export default FeatureJob;