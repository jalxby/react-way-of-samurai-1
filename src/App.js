import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
    return (<BrowserRouter>
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'*'} element={<Profile/>}/>
                    <Route path={'/dialogs/*'} element={<Dialogs/>}/>
                    <Route path={'/news'} element={1}/>
                    <Route path={'/music'} element={2}/>
                    <Route path={'/settings'} element={3}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>);
}

export default App;
