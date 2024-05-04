import Certificates from "../features/resume/Certificates";
import Education from "../features/resume/Education";
import Experience from "../features/resume/Experience";
import Knowledges from "../features/resume/Knowledges";
import Skills from "../features/resume/Skills";

const Resume = () => {
    return (
        <div className="bg-rightSide rounded-l-3xl  text-header gap-6 px-16 py-10 font-roberto overflow-scroll phone:px-5 phone:py-10 ">
            <h3 className="text-3xl font-bold">Resume</h3>
            <div className="grid grid-cols-2 gap-10 mt-14 phone:gap-5 phone:grid-rows-2 phone:grid-cols-none phone:mt-10 ">
                <div className="phone:-mt-20">
                    <Education />
                    <Experience />
                </div>
                <div className="phone:order-first">
                    <Skills />
                    <Knowledges />
                </div>
            </div>
            <div>
                <Certificates />
            </div>
        </div>
    );
};

export default Resume;
