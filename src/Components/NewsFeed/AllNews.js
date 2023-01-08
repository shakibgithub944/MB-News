import React from 'react';
import News1 from './News1';
import News2 from './News2';
import News3 from './News3';
import News4 from './News4';
import News5 from './News5';

const AllNews = () => {
    return (
        <div className="col-span-12 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96">
                <News1/>
                <News2/>
                <News3/>
                <News4/>
                <News5/>
        </div>
    );
};

export default AllNews;