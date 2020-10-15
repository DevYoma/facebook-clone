import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import profilePic from '../assets/yoma.jpg'
import Netflix from '../assets/Storybackground/netflix1.jpg'

const Feed = () => {
    return ( 
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                profilePic = {profilePic}
                message="I am a React Developer"
                timestamp= "Timestamp works"
                username="DevYoma"
                image={Netflix}
            />
            <Post />
            <Post />
           
        </div>
     );
}
 
export default Feed;