const ReactBlog = () => {
    return (
        <div className="bg-rightSide  text-header gap-6 font-roboto overflow-scroll phone:px-5 phone:py-10 ">
            <h3 className="text-3xl font-bold">React</h3>
            <div className="mt-10 font-merriweather">
                <p className="font-light text-sm">
                    <span className="font-semibold block text-lg mb-2">
                        State :
                    </span>{" "}
                    It is an <strong className="text-me">internal data</strong>,
                    that owned by Component (
                    <strong className="text-me">Component's memory</strong>
                    ). States can be updated by the Component{" "}
                    <strong className="text-item">itself</strong> and updating
                    state causes Component to{" "}
                    <strong className="text-me">re-render</strong> !
                </p>
                <br />
                <p className="font-light text-sm">
                    <span className="font-semibold block text-lg mb-2">
                        Prop :
                    </span>{" "}
                    It is an
                    <strong className="text-me">external data</strong>, that
                    owned by
                    <strong className="text-me">parent Component </strong> and
                    this is just a<strong className="text-me">read-only</strong>{" "}
                    data, which receiving them causes component to{" "}
                    <strong className="text-me">re-render</strong>.
                </p>
                <br />
                <p className="font-light text-sm">
                    <span className="font-semibold block text-lg mb-2">
                        Local State :
                    </span>
                    State needed only by{" "}
                    <strong className="text-me">one or few components</strong>{" "}
                    or in other definition can we say :
                    <i className="block">
                        "That is defined in a component and only that component
                        and child components have access to it." ( By passing
                        via props )
                    </i>
                </p>
                <br />
                <p className="font-light text-sm">
                    <span className="font-semibold block text-lg mb-2">
                        Global State :
                    </span>
                    State, that many components might need or shared state that
                    is <strong className="text-me">accessible</strong> to every
                    component in the{" "}
                    <strong className="text-me">entire app</strong>. (We can
                    achieve that by using state managements.)
                </p>
                <p className="font-semibold text-lg mt-12">How React works ?</p>
                <img
                    src="/public/media/blogs/react-blog/react1.png"
                    alt="react-cylce"
                />
                <p className="font-light text-sm">
                    <span className="text-lg">💥 :</span> Phase Of Render and
                    Commit Phase are common sense meaning of the word "render"
                </p>
                <p className="font-light text-sm">
                    <span className="text-lg">💥 :</span> Rendering is{" "}
                    <strong className="text-me">NOT</strong> updating the{" "}
                    <strong className="text-me">DOM</strong> or displaying
                    elements on the screen. Rendering only happens{" "}
                    <strong className="text-me">
                        <i>internally</i>
                    </strong>{" "}
                    inside React, it does not{" "}
                    <strong className="text-me">
                        <i>Produce visual cahnges</i>
                    </strong>
                    .
                </p>
                <p className="font-light text-sm ">
                    <span className="font-semibold block text-lg mt-7 mb-2">
                        Render Is Triggered :
                    </span>
                    The 2 situations that trigger renders :
                </p>
                <ol className="font-light text-sm mt-2">
                    <li className="pl-8">
                        1.{" "}
                        <span className="text-me font-semibold">
                            Initial Render
                        </span>{" "}
                        of the application
                    </li>
                    <li className="pl-8">
                        2.{" "}
                        <span className="text-me font-semibold">
                            State is updated
                        </span>{" "}
                        in one or more component instances
                    </li>
                </ol>
                <p className="font-light text-sm mt-4">
                    <span>💥 :</span> The render process is triggered for the{" "}
                    <span className="text-me">entire app</span>.
                </p>
            </div>
        </div>
    );
};

export default ReactBlog;
