import { useQuery } from "@tanstack/react-query";
import { CircleLoader } from "react-spinners";
import PortfolioItem from "../features/portfolio/PortfolioItem";
import getAllProjects from "../utils/services/getAllProjects";

const Portfolio = () => {
    const { data: projects, isLoading } = useQuery({
        queryFn: () => getAllProjects(),
        queryKey: ["projects"],
    });

    return (
        <div className="bg-rightSide rounded-l-3xl  text-header gap-6 px-16 py-10 font-roboto overflow-scroll overflow-x-hidden phone:px-12 phone:py-10">
            <h3 className="text-3xl font-bold">Portfolio</h3>
            <div className=" font-roboto font-light flex flex-wrap gap-12 mt-12 phone:flex-col phone:gap-14">
                {isLoading ? (
                    <CircleLoader color="bg-front" />
                ) : (
                    projects?.map((el) => {
                        return <PortfolioItem datas={el} key={el.id} />;
                    })
                )}
            </div>
        </div>
    );
};

export default Portfolio;
