import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Blog = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    return (
        <div className="bg-rightSide rounded-l-3xl  text-header gap-6 px-16 py-10 font-roboto overflow-scroll phone:px-5 phone:py-10 ">
            {pathname !== "/blog" ? (
                <Outlet />
            ) : (
                <>
                    <h3 className="text-3xl font-bold">Blog</h3>
                    <div className="flex flex-col gap-8 mt-12">
                        <div className=" font-roboto font-light flex flex-col flex-wrap gap-12">
                            <div
                                className="flex shadow-menu rounded-md overflow-hidden p-2 gap-2 cursor-pointer hover:shadow-blog transition-all "
                                onClick={() => navigate("/blog/react-blog")}
                            >
                                <img
                                    src="/media/SVG/react.jpeg"
                                    alt="react"
                                    className=" object-center h-16"
                                />
                                <div className="flex flex-col gap-1">
                                    <h5 className="font-semibold">React</h5>
                                    <p className=" font-light text-sm">
                                        My handbook from all the courses and
                                        Learning React Modern Patterns for
                                        Developing React Apps book 💙
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" font-roboto font-light flex flex-col flex-wrap gap-12">
                            <div
                                className="flex shadow-menu rounded-md overflow-hidden p-2 gap-2 cursor-pointer hover:shadow-blog transition-all "
                                onClick={() => navigate("/blog/node-blog")}
                            >
                                <img
                                    src="/media/SVG/node.jpg"
                                    alt="react"
                                    className=" object-center h-16 rounded-lg"
                                />
                                <div className="flex flex-col">
                                    <h5 className="font-semibold">Node.js</h5>
                                    <p className=" font-light text-sm">
                                        This is my handbook from all the courses
                                        and books I have read in this field 💚
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Blog;
