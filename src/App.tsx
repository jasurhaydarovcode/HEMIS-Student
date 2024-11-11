import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./routes/Home.tsx";
import NotFound from "./routes/NotFound.tsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
