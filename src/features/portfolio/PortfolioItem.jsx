/* eslint-disable react/prop-types */
import { DiGithubAlt } from "react-icons/di";

const PortfolioItem = ({ name, image, project, github, techs = [] }) => {
    return (
        <div className=" w-2/5 outline outline-3 outline-offset-8 rounded-lg outline-item ">
            <a href={project}>
                <img
                    src={image}
                    alt={image}
                    className="rounded-xl hover:scale-125 transition-all duration-700"
                />
            </a>
            <div className="flex flex-col justify-between mt-3">
                <h6 className="text-center font-semibold">{name}</h6>
                <p>
                    Source :
                    <a
                        href={github}
                        className="text-center ml-3 hover:font-normal hover:text-me"
                    >
                        Link
                        <span>
                            <DiGithubAlt className="text-xl inline-block ml-2" />
                        </span>
                    </a>
                </p>
                {techs.length > 0 && (
                    <div>
                        <h6>Technologies : </h6>
                        <div className="flex flex-wrap gap-2 font-normal mt-2">
                            {techs.map((el) => (
                                <p
                                    key={Math.random()}
                                    className="bg-me py-1 px-2 text-center rounded-md text-sm"
                                >
                                    {el}
                                </p>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortfolioItem;
