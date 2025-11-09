import React from 'react';


export default function ItemList() {
const items = ['Apple', 'Banana', 'Orange'];


return (
<div className="list-box">
<h3>Fruity List 🍎</h3>
<ul>
{items.map((item, idx) => (
<li key={item + idx}>{item}</li>
))}
</ul>
<p className="tiny">Rendered with <code>.map()</code> — each item has a `key`.</p>
</div>
);
}