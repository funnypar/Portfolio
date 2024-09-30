/* eslint-disable react/prop-types */
import { DiGithubAlt } from "react-icons/di";

const PortfolioItem = ({ datas = [] }) => {
    return (
        <div className=" w-2/5 outline outline-3 outline-offset-8 rounded-lg outline-item phone:w-full">
            <a href={datas?.project}>
                <img
                    src={datas?.image}
                    alt={datas?.title}
                    className="rounded-xl hover:scale-125 transition-all duration-700"
                />
            </a>
            <div className="flex flex-col justify-between mt-3">
                <h6 className="text-center font-semibold">{datas?.title}</h6>
                <p>
                    Source :
                    <a
                        href={datas?.source}
                        className="text-center ml-3 hover:font-normal hover:text-me"
                    >
                        Link
                        <span>
                            <DiGithubAlt className="text-xl inline-block ml-2" />
                        </span>
                    </a>
                </p>
                <div>
                    <h6>Technologies : </h6>
                    <div className="flex flex-wrap gap-2 font-normal mt-2">
                        {datas?.techs?.datas.map((el) => (
                            <p
                                key={el.id}
                                className="bg-me py-1 px-2 text-center rounded-md text-sm"
                            >
                                {el}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;
