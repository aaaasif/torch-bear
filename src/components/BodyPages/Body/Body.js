import React from 'react';
import Consulting from '../Consulting/Consulting.js';
import Marketing from '../Marketing/Marketing.js';
import Nutrition from '../Nutrition/Nutrition.js';
import Physiotherapy from '../Physiotherapy/Physiotherapy.js';
import Podiatry from '../Podiatry/Podiatry.js';

const Body = () => {
    return (
        <div>
            <Consulting />
            <Podiatry />
            <Nutrition />
            <Marketing />
            <Physiotherapy/>
        </div>
    );
};

export default Body;