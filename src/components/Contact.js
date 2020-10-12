import React from 'react';
function Contact() {

const online = true;
<div className="Contact">
<img className="avatar" src="https://randomuser.me/api/portraits/men/4.jpg"/>

<div className="status"> 
<p className="name"> "Ethan Graham "</p>
<div className="status-online"></div>
<p classNAme="status-text">{
    online?'online':'offline';
}
</p>
</div>
</div>



}