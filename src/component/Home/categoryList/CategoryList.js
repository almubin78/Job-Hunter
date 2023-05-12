import React from 'react';

const CategoryList = ({ single }) => {
    // console.log(single.jobCategoryList);
    const { jobCategoryList } = single
    console.log(jobCategoryList)
    return (
        <>
            {
                jobCategoryList.map(s =>

                    <div className=' p-4 mx-auto'>
                        <div className="card w-96 bg-base-100 shadow-xl image-full">
                            <figure><img className='ax-h-52' src={s.logo} alt="img not get" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{s.designation}</h2>
                                <p>{s.availableJob} Jobs Available Now!!</p>

                            </div>
                        </div>
                    </div>
                )
            }
        </>

    );
};

export default CategoryList;