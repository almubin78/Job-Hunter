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
            
            <div className=' mb-10'>
                {
                    arrayies.map(single => <CategoryList
                        single={single}
                    ></CategoryList>)
                }
            </div>
            <h3 className=''>Featured Jobs</h3>
            <p className=' mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 gap-2 '>
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