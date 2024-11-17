import React, { useState, useEffect } from 'react';
import { QarduLogo } from "../../imports/images.ts";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import DropdownLoginLang from "../../components/Dropdown.login.lang";
import { Helmet } from "react-helmet";
import { SITE_TITLE } from "../../utils/SITE_TITLE";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [language, setLanguage] = useState("O‘zbekcha");
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (isAuthenticated) navigate("/");
    }, [navigate]);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (studentId === "345000000000" && password === "Admin1234") {
            if (rememberMe) localStorage.setItem("isAuthenticated", "true");
            navigate("/");
        } else {
            toast.error(language === "English" ? "Invalid Student ID or Password" : "Noto‘g‘ri ID yoki Parol");
        }
    };

    return (
        <>
            <Helmet>
                <title>Login {SITE_TITLE}</title>
            </Helmet>

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full border-t-[3px] border-green-500 max-w-md p-3 space-y-6 bg-white shadow-sm">
                    <div className="flex justify-end">
                        <DropdownLoginLang setLanguage={setLanguage} />
                    </div>
                    <div className="flex justify-center mb-6">
                        <img src={QarduLogo} alt="Logo" className="w-20 h-20" />
                    </div>

                    <h2 className="text-center text-xl text-gray-700">
                        {language === "English" ? "Qarshi State University" : "Qarshi davlat universiteti"}
                    </h2>
                    <p className="text-center text-sm text-gray-700">
                        {language === "English" ? "HEMIS Student Information System" : "HEMIS Student axborot tizimi"}
                    </p>

                    <form className="space-y-4" onSubmit={handleLogin}>
                        <div className="relative">
                            <label htmlFor="studentId" className="sr-only">Talaba ID</label>
                            <input
                                id="studentId"
                                name="studentId"
                                type="text"
                                required
                                placeholder={language === "English" ? "Student ID" : "Talaba ID"}
                                className="w-full px-4 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                            />
                            <span className="absolute inset-y-0 right-4 flex items-center">
                                <FaMessage className="text-gray-500" />
                            </span>
                        </div>

                        <div className="relative">
                            <label htmlFor="password" className="sr-only">Parol</label>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                placeholder={language === "English" ? "Password" : "Parol"}
                                className="w-full px-4 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span onClick={togglePasswordVisibility}
                                  className="absolute inset-y-0 right-4 flex items-center cursor-pointer">
                                {showPassword ? <FaEye className="text-gray-500" /> : <FaEyeSlash className="text-gray-500" />}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-indigo-600"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <span className="ml-2 text-gray-600 cursor-pointer">
                                    {language === "English" ? "Remember me" : "Eslab qolish"}
                                </span>
                            </label>
                            <button
                                type="submit"
                                className="px-24 py-[6px] text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:bg-blue-700"
                            >
                                {language === "English" ? "Login" : "Kirish"}
                            </button>
                        </div>

                        <button
                            type="button"
                            className="w-full py-2 text-sm text-white bg-purple-700 hover:bg-purple-500 focus:outline-none focus:bg-purple-700"
                        >
                            {language === "English" ? "Login with OneID" : "OneID orqali kirish"}
                        </button>
                    </form>
                    <p className="text-md text-center text-gray-900 mt-4">
                        <span className="text-black font-semibold">Version</span>: 0.9.20 / <span className="text-black font-semibold">UID</span>: 345 / <span className="text-black font-semibold">Date</span>: 11.11.2024 22:01:15
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
