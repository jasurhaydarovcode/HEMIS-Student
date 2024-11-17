import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './css/index.css'
import App from './App.tsx'

import {ToastContainer} from "react-toastify"; // Specify weight and style
import 'react-toastify/dist/ReactToastify.css';

// import "@fontsource/source-sans-pro"; // Defaults to weight 400
import "@fontsource/source-sans-pro/400.css"; // Specify weight
import "@fontsource/source-sans-pro/400-italic.css";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
        <ToastContainer limit={1}/>
    </StrictMode>,
)
