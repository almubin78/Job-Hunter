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
    // console.log(arrayies);
    // const {jobCategoryList} = arrayies
    return (
        <div>
            {
                arrayies.map(single=><CategoryList
                    single={single}
                ></CategoryList>)
            }
            {
                arrayies.map(single=><FeatureJob
                    single={single}
                ></FeatureJob>)
            }
            

        </div>
    );
};

export default Home;