import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ReactBlog from "./features/blogs/ReactBlog";
import NodeBlog from "./features/blogs/NodeBlog";
import { Suspense } from "react";
import { PacmanLoader } from "react-spinners";
import Blog from "./pages/Blog";

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
                        <Route path="blog" element={<Blog />}>
                            <Route path="react-blog" element={<ReactBlog />} />
                            <Route path="node-blog" element={<NodeBlog />} />
                        </Route>
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
