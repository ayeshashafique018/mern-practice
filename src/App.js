import React from 'react';
import HelloWorld from './components/HelloWorld';
import ClickCounter from './components/ClickCounter';
import ItemList from './components/ItemList';
import UserForm from './components/UserForm';


export default function App() {
return (
<div className="lab-app">
<header className="lab-header">
<h1> React Playground ✨</h1>
<p className="made-by">made with love 💖 by Ayesha</p>
</header>


<main className="card-grid">
<section className="card">
<HelloWorld />
</section>


<section className="card">
<ClickCounter />
</section>


<section className="card">
<ItemList />
</section>


<section className="card">
<UserForm />
</section>
</main>


<footer className="lab-footer">
<small>SEL-310 • Semester 06 • Lab 2</small>
</footer>
</div>
);
}