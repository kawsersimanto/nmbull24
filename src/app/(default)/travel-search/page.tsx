import TravelBody from '@/components/travelbody/TravelBody';
import TravelSearch from '@/components/travelSearch/TravelSearch';
import React from 'react';

const page = () => {
    return (
        <div className=''>
            <TravelSearch></TravelSearch>
            <TravelBody></TravelBody>
        </div>
    );
};

export default page;