import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {addPostActionCreator, updateNewPostTextActionCreator} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// addPost('Hey hey!');
const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 addPostActionCreator={addPostActionCreator}
                 updateNewPostTextActionCreator={updateNewPostTextActionCreator}/>
        </React.StrictMode>
    );
}


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
