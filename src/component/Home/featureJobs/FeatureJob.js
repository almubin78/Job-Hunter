import React from 'react';
import { Link } from 'react-router-dom';

const FeatureJob = ({ single }) => {
    const { _id, company, phone, address } = single;
    // console.log(_id);

    return (
        <div className='border rounded '>

            <div className="card w-96 bg-base-100  shadow-xl mx-auto">
                <figure className="px-10 pt-10">
                    {/* <img src={s.logo} alt="img-not-found" className="rounded-xl" /> */}
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{company}</h2>
                    <p>{address}</p>
                    <div className="card-actions">
                        <Link className='btn' to={`/details/${_id}`}><button >View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureJob;