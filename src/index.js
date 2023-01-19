import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Victor'},
    {id: 5, name: 'Andrey'},
    {id: 6, name: 'Valery'}
]


let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How is you it-camasutra?'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'Hello!'},
    {id: 5, message: 'Go go go!'},
    {id: 6, message: 'Ready?'}
]

let posts = [
    {id: 1, message: 'Hi!', likesCount: '10'},
    {id: 2, message: 'It\'s my first post', likesCount: '12'},
    {id: 3, message: 'The second', likesCount: '33'},
    {id: 4, message: 'Go home', likesCount: '0'},
    {id: 5, message: 'I\'m gonna be a developer', likesCount: '14'},
    {id: 6, message: 'It-incubator', likesCount: '23'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App messages={messages} dialogs={dialogs} posts={posts}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
