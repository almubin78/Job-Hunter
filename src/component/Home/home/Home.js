import React, { useEffect, useState } from 'react';
import CategoryList from '../categoryList/CategoryList';
import FeatureJob from '../featureJobs/FeatureJob';

const Home = () => {
    const [arrayies, setArrayies] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setArrayies(data))
    }, [])
    return (
        <div className='container  mx-auto'>
            <div className=' mb-5'>
                {
                    arrayies.map(single => <CategoryList
                        single={single}
                    ></CategoryList>)
                }
            </div>
            <div className='grid grid-cols-2 gap-2'>
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