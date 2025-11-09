import React, { useState } from 'react';


export default function ClickCounter() {
const [count, setCount] = useState(0);


function handleClick() {
setCount(prev => prev + 1);
}


return (
<div className="counter-box">
<h3>Click Counter</h3>
<p className="big-count">{count}</p>
<button onClick={handleClick} className="btn">
Click me!
</button>
<p className="tiny">Each click increases the counter using <code>useState</code>.</p>
</div>
);
}