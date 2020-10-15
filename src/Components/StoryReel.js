import React from 'react';
import Story from './Story';
import './StoryReel.css';
import Amazon from '../assets/Storybackground/amazon.jpg';
import Cat from '../assets/Storybackground/cat.jpg';
import Netflix from '../assets/Storybackground/netflix1.jpg';
import Pic2 from '../assets/Storybackground/pic2.jpg';
import Pic3 from '../assets/Storybackground/pic3.jpg'

const StoryReel = ({  }) => {
    return ( 
        <div className="storyReel">
            <Story 
            image={Amazon}
            profileSrc=""
            title="Amazon"
            />

             <Story 
            image={Cat}
            profileSrc=""
            title="Cat"
            />

             <Story 
            image={Netflix}
            profileSrc=""
            title="Netflix"
            />

             <Story 
            image={Pic2}
            profileSrc=""
            title="Nature"
            />

             <Story 
            image={Pic3}
            profileSrc=""
            title="Beach"
            />
            {/* Story */}
        </div>
     );
}
 
export default StoryReel;