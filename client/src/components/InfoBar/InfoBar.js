//Normal react functional component

import React from 'react';

 import onlineIcon from '../../icons/onlineIcon.png';
 import closeIcon from '../../icons/closeIcon.png';
 
 import './InfoBar.css';

 //the onlineicon is used to show a user is online
 //contains room name but should be dynamic

 //the closeIcon does a full page refresh
 //when user clicks it , its going to leave the chat
 
 const InfoBar = ({ room }) => (
   <div className="infoBar">
     <div className="leftInnerContainer">
       <img className="onlineIcon" src={onlineIcon} alt="online icon" />
       <h3>{room}</h3>
     </div>
     <div className="rightInnerContainer">
       <a href="/"><img src={closeIcon} alt="close icon" /></a>
     </div>
   </div>
 );
 
 export default InfoBar;

