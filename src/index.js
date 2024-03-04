import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Card from "./components/Card";
// import Hero from "./components/Hero";
//
import CardDetails from "./data";

const cards = CardDetails.map(d => (<Card key={d.id} card={d}/>))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        {/*<Hero/>*/}
        <section className="cards-list">
            {cards}
        </section>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorkerRegistration.register();
