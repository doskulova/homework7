import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostsPage from "./pages/postsPage/PostsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import Menu from "./components/menu/Menu";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import Home from "./pages/home/Home";

function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="posts" element={<PostsPage/>}/>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="contacts" element={<ContactsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;