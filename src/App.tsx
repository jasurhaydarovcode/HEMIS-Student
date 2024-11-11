import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./routes/Home.tsx";
import NotFound from "./routes/NotFound.tsx";
import LoginPage from "./routes/Auth/Login.tsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route>
                    {/* Public Routes */}
                    <Route path="/dashboard/login" element={<LoginPage/>}/>
                    <Route path="/*" element={<NotFound/>}/>

                    {/* Private Routes */}
                    <Route path="/" element={<Home/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
