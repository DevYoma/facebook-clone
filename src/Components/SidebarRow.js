import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarRow.css';

const SidebarRow = ({ src,Icon, title }) => {
    return ( 
        <div className="sidebarRow">
            {/* renders avatar if the src props exists... */}
            {src && <Avatar src={src} />}
            {/* passing a component as a props(Icon)...NB: must start with capital letter */}
            { Icon && <Icon /> }
            <h4>{title}</h4>
        </div>
     );
}
 
export default SidebarRow;