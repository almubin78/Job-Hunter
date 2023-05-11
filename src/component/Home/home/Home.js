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
        <div>
            <div className=' mb-5'>
                {
                    arrayies.map(single => <CategoryList
                        single={single}
                    ></CategoryList>)
                }
            </div>
            {
                arrayies.map(single => <FeatureJob
                    single={single}
                ></FeatureJob>)
            }


        </div>
    );
};

export default Home;