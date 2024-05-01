import {
    HiOutlineCodeBracketSquare,
    HiOutlineGlobeEuropeAfrica,
} from "react-icons/hi2";

const Experience = () => {
    return (
        <>
            <h4 className="text-2xl font-bold mt-16">Experience</h4>
            <ul className="mt-6 flex flex-col gap-6">
                <li className="font-semibold">
                    <HiOutlineCodeBracketSquare className=" inline text-2xl mr-2 text-me" />
                    Intern in programming
                    <span className="font-light block mt-2">
                        From
                        <span className="font-semibold mx-2">04.2019</span>to
                        <span className="font-semibold mx-2">09.2019</span>,I
                        was working in
                        <span className="font-normal ml-1">
                            Wersi company
                        </span>{" "}
                        and in there i found my passion and my professional
                        career started.
                    </span>
                    <ol className="font-light text-sm list-disc pl-4 pt-2">
                        <li>Frontend developer</li>
                        <li>React developer</li>
                    </ol>
                </li>
                <li className="font-semibold">
                    <HiOutlineCodeBracketSquare className=" inline text-2xl mr-2 text-me" />
                    Intern in programming
                    <span className="font-light block mt-2">
                        From
                        <span className="font-semibold mx-2">05.2020</span>to
                        <span className="font-semibold mx-2">08.2020</span>,I
                        was working in
                        <span className="font-normal ml-1">
                            Madyar Sanat company
                        </span>
                        .
                    </span>
                    <ol className="font-light text-sm list-disc pl-4 pt-2">
                        <li>Python developer</li>
                    </ol>
                </li>
                <li className="font-semibold">
                    <HiOutlineGlobeEuropeAfrica className=" inline text-2xl mr-2 text-me" />
                    German teacher
                    <span className="font-light block mt-2">
                        From
                        <span className="font-semibold mx-2">02.2021</span>to
                        <span className="font-semibold mx-2">08.2023</span>,I
                        was working as a teacher in
                        <span className="font-normal ml-1">
                            Afrooz Jahangiri training group
                        </span>
                        and during this time, I was able to nurture +500
                        students and provide them with a more beautiful world.
                    </span>
                </li>
            </ul>
        </>
    );
};

export default Experience;
