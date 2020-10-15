import { Avatar } from '@material-ui/core';
import React from 'react';
import './Story.css';

const Story = ({ image, profileSrc, title }) => {
    return ( 
        // take note of the background image entry..
        <div style={{ backgroundImage: `url(${image})` }} className="story">
            <Avatar className="story__avatar" src={profileSrc} />
            <h4>{title}</h4>
        </div>
     );
}
 
export default Story;