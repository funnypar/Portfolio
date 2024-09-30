import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import AppLayout from "./ui/AppLayout";

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
    );
}

export default App;
