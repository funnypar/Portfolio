const NodeBlog = () => {
    return (
        <div className="bg-rightSide  text-header gap-6 font-roboto overflow-scroll phone:px-5 phone:py-10 ">
            <h3 className="text-3xl font-bold font-oswald">Node.js</h3>
            <div className="mt-10 font-roboto">
                <p>
                    <span className="block">
                        Hello and welcome, dear readers 🙌🏻{" "}
                    </span>{" "}
                    I'm thrilled to have you here. Today, we're diving into the
                    fascinating world of Node.js, a technology that has
                    revolutionized the way we build and scale applications.
                    Whether you're a seasoned developer or just starting your
                    journey in web development, this article will offer insights
                    and practical knowledge to enhance your understanding of
                    Node.js.By the end of this article, you'll have a solid
                    foundation in Node.js and be equipped to start building your
                    own applications. So, let's embark on this journey together
                    and explore the exciting possibilities that Node.js offers!
                </p>
                <hr className="mt-10" />
                <p className=" text-sm mt-10">
                    <span className="font-semibold block font-oswald text-lg mb-2">
                        Node :
                    </span>{" "}
                    Node is a{" "}
                    <strong className="text-me">Javascript Runtime </strong>
                    built on google's open-source{" "}
                    <strong className="text-item">V8 javascript engine</strong>.
                </p>
                <br />
                <p className=" text-sm">
                    <span className="font-semibold block text-lg font-oswald mb-2 mt-5">
                        Javascript Runtime :
                    </span>{" "}
                    It is just like a container, in which a program written in
                    Javascript can be executed outside of browswer.
                </p>
                <p className=" text-sm mt-6">
                    <span className="text-lg">💥 :</span> Do{" "}
                    <strong className="text-me">NOT</strong> use Node for
                    actions like{" "}
                    <strong className="text-me">image manipulation</strong>,{" "}
                    <strong className="text-me">video conversion</strong> or{" "}
                    <strong className="text-me">
                        Apps that has heavy server-side rendering
                    </strong>
                    .
                </p>
                <br />
                <p className="text-sm">
                    <span className="font-semibold block text-lg mb-4 font-oswald mt-5">
                        Write Or Read Files Synchronously :
                    </span>
                    1. import 'fs' library
                </p>
                <div className="bg-code p-3 text-center mt-3 rounded-xl">
                    <p className="font-code">
                        <span className="text-codeRed">const </span>
                        <span className=" text-codeOrange">fs</span>
                        <span className=" text-codeWhite">
                            {" "}
                            = require(
                            <span className=" text-CodeGreen">'fs'</span>);
                        </span>
                    </p>
                </div>
                <p className="text-sm mt-4">2. Read file synchronously</p>
                <div className="bg-code p-3 text-center mt-3 rounded-xl">
                    <p className="font-code">
                        <span className="text-codeRed">const </span>
                        <span className=" text-codeOrange">file</span>
                        <span className=" text-codeWhite">
                            {" "}
                            = fs.
                            <span className=" text-CodeLightGreen">
                                readFileSync
                            </span>
                            (
                            <span className=" text-CodeGreen">
                                'PATH', 'utf-8'
                            </span>
                            );
                        </span>
                    </p>
                </div>
                <p className="text-sm mt-4">
                    And If we want to write something in the file :
                </p>
                <div className="bg-code p-3 text-center mt-3 rounded-xl">
                    <p className="font-code">
                        <span className=" text-codeWhite">
                            fs.
                            <span className=" text-CodeLightGreen">
                                writeFileSync
                            </span>
                            (
                            <span className=" text-CodeGreen">
                                'PATH', 'WHAT WE WANT TO WRITE'
                            </span>
                            );
                        </span>
                    </p>
                </div>
                <br />
                <p className="text-sm">
                    <span className="font-semibold block text-lg mb-2 mt-5">
                        Synchronous Way :
                    </span>
                    That means each statement is basically processed{" "}
                    <strong className="text-me">one after another</strong>.
                    (line by line)
                </p>
                <p className=" text-sm mt-6">
                    <span className="text-lg">💥 :</span> This can become a{" "}
                    <string className=" text-deep-orange-500">PROBLEM</string>,{" "}
                    especially with slow operations, because each line{" "}
                    <strong className="text-deep-orange-500">blocks</strong> the
                    execution of the rest of the code ! .
                </p>
                <p className="text-sm">
                    <span className="font-semibold block text-lg mb-2 mt-5">
                        Asynchronous Way :
                    </span>
                    We upload heavy work to be worked on in the{" "}
                    <strong className="text-me">background</strong> ! And once
                    that work is done, a callback function that we register
                    before is called to handle the result.
                </p>
                <p className=" text-sm mt-6">
                    <span className="text-lg">💥 :</span> During all this time,
                    the rest of the code can still be{" "}
                    <strong className="text-me">executing</strong>!{" "}
                    <strong className="text-deep-orange-500">Without</strong>{" "}
                    being blocked by the heavy task !!!
                </p>
                <p className="text-sm">
                    <span className="font-semibold block text-lg mb-2 mt-5">
                        Why we need this ?
                    </span>
                    Beacuse the Node.js is{" "}
                    <strong className="text-me">Single Thread</strong> ! And
                    thread is just like a set of{" "}
                    <strong className="text-me">instructions</strong> that is
                    run in the computer's CPU.
                </p>
                <p className=" text-sm mt-6">
                    <span className="text-lg">💥💥💥 :</span> When we have
                    asynchronous part in our code, this will execute in the
                    background and our code executes line by line until the end
                    ! And then we can have the result of asynchronous part !!!
                </p>
            </div>
        </div>
    );
};

export default NodeBlog;
