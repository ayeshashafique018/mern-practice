import React, { useState } from 'react';


export default function UserForm() {
const [name, setName] = useState('');


return (
<div className="form-box">
<h3>Say hi 👋</h3>
<label htmlFor="name">Your name</label>
<input
id="name"
value={name}
onChange={(e) => setName(e.target.value)}
placeholder="Type your name..."
/>


<p className="tiny">Real-time display:</p>
<div className="preview">Hello, {name || 'friend'}!</div>


<p className="tiny">This input is a controlled component — React owns the value.</p>
</div>
);
}