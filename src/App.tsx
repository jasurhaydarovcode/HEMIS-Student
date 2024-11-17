import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.tsx";
import NotFound from "./routes/NotFound.tsx";
import Login from "./routes/Auth/Login.tsx";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route element={<PublicRoute />}>
                    <Route path="/dashboard/login" element={<Login />} />
                    <Route path="/*" element={<NotFound />} />
                </Route>

                {/* Private Routes */}
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
