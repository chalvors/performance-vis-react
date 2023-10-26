import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from "./tools/reportWebVitals";

import Layout from "./pages/Layout";
import Performance from "./pages/Performance";
import NoPage from "./pages/NoPage";
import Contact from "./pages/Contact";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    
                    <Route index element={<Performance />} />
                    <Route path="contact/:id" element={<Contact /> } />

                    <Route path="*" element={<NoPage />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
