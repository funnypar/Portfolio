import { HiOutlineAcademicCap } from "react-icons/hi2";
const Education = () => {
    return (
        <>
            <h4 className="text-2xl font-bold">Education</h4>
            <ul className="mt-6 flex flex-col gap-4">
                <li className="font-semibold">
                    <HiOutlineAcademicCap className=" inline text-2xl mr-2 text-me" />
                    <span>High school diploma in mathematics and physics</span>
                    <span className="font-light block mt-2">
                        In <span className="font-semibold">2015</span>, I passed
                        this section in Shahid Beheshti High School and managed
                        to pass with a
                        <span className="text-item font-semibold ml-2">
                            GPA: 3,94
                        </span>
                    </span>
                </li>
                <li className="font-semibold">
                    <HiOutlineAcademicCap className=" inline text-2xl mr-2 text-me" />
                    <span>Pre-university in mathematics and physics</span>
                    <span className="font-light block mt-2">
                        In <span className="font-semibold">2018</span>, I passed
                        this section in Ehtemam Pouya High School and managed to
                        pass with a
                        <span className="text-item font-semibold ml-2">
                            GPA: 3,54
                        </span>
                    </span>
                </li>
            </ul>
        </>
    );
};

export default Education;
