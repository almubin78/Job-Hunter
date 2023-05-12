import React, { useEffect, useState } from 'react';
import CategoryList from '../categoryList/CategoryList';
import FeatureJob from '../featureJobs/FeatureJob';
import Header from '../Header/Header';


const Home = () => {
    const [arrayies, setArrayies] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setArrayies(data))
    }, [])

    return (
        <div className='container  mx-auto'>
            <Header></Header>

            <div className='mt-10 mb-10'>
                <h3 className='text-2xl text-center'>Category List</h3>
                <hr />
                <div className=' grid 2xl:grid-cols-4 md:grid-cols-2 xl:grid-cols-3 gap-4'>

                    {
                        arrayies.map(single => <CategoryList
                            single={single}
                        ></CategoryList>)
                    }
                </div>
            </div>
            <h3 className='text-2xl text-center'>Featured Jobs</h3>
            <hr />
            <p className=' mb-5 mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 gap-2 mb-10'>
                {
                    arrayies.map(single => <FeatureJob
                        single={single}
                    ></FeatureJob>)
                }
            </div>


        </div>
    );
};

export default Home;