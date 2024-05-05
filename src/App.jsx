import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Suspense } from "react";
import { PacmanLoader } from "react-spinners";

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<PacmanLoader color="#36d7b7" />}>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index element={<Home />} />
                        <Route path="me" element={<Me />} />
                        <Route path="resume" element={<Resume />} />
                        <Route path="portfolio" element={<Portfolio />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
