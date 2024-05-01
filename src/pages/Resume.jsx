import Education from "../features/resume/Education";
import Experience from "../features/resume/Experience";
import Knowledges from "../features/resume/Knowledges";
import Skills from "../features/resume/Skills";

const Resume = () => {
    return (
        <div className="bg-rightSide rounded-l-3xl  text-header gap-6 px-16 py-10 font-roberto overflow-scroll">
            <h3 className="text-3xl font-bold">Resume</h3>
            <div className="grid grid-cols-2 gap-10 mt-14">
                <div>
                    <Education />
                    <Experience />
                </div>
                <div>
                    <Skills />
                    <Knowledges />
                </div>
            </div>
            <div>
                <h4 className="text-2xl font-bold mt-12">Certificates</h4>
                <div className="flex flex-wrap gap-12 mt-8">
                    <div className=" w-1/3 text-center outline outline-4 rounded-lg outline-gray-600 outline-offset-4 flex flex-col gap-2">
                        <img
                            src="/public/media/cs50x.png"
                            alt="cs50x"
                            className="rounded-lg hover:scale-150 transition-all duration-700"
                        />
                        <h5 className="font-semibold">CS50X</h5>
                    </div>
                    <div className=" w-1/3 text-center outline outline-4 rounded-lg outline-gray-600 outline-offset-4 flex flex-col gap-2">
                        <img
                            src="/public/media/cs50p.png"
                            alt="cs50p"
                            className="rounded-lg hover:scale-150 transition-all duration-700"
                        />
                        <h5 className="font-semibold">CS50P</h5>
                    </div>
                    <div className=" w-1/3 text-center outline outline-4 rounded-lg outline-gray-600 outline-offset-4 flex flex-col gap-2">
                        <img
                            src="/public/media/B2.png"
                            alt="B2"
                            className="rounded-lg hover:scale-150 transition-all duration-700"
                        />
                        <h5 className="font-semibold">Goethe-Zertifikat B2</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
