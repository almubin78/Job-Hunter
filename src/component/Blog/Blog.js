import React from 'react';

const Blog = () => {
    const styles = {
        margin:"100px",
        boxShadow:"5px 3px 7px green",
        padding:"5%"
    }

    return (
        <div style={styles}>
            <h3>এই সেকশন করতে এসে দেখি মার্কস পেয়ে গেছি। </h3>
            <h5>এখন এটার রিপো চেঞ্জ করে নিয়েছি পাবলিকে।</h5>
            <h6><span style={{color:"pink"}}>Statistic and blog section</span> have to improve</h6>
        </div>
    );
};

export default Blog;