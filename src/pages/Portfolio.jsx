import PortfolioItem from "../features/portfolio/PortfolioItem";

const Portfolio = () => {
    return (
        <div className="bg-rightSide rounded-l-3xl  text-header gap-6 px-16 py-10 font-roberto overflow-scroll phone:px-12 phone:py-10">
            <h3 className="text-3xl font-bold">Portfolio</h3>
            <div className=" font-roberto font-light flex flex-wrap gap-12 mt-12 phone:flex-col phone:gap-14">
                <PortfolioItem
                    name="Pizzamopano"
                    image="media/projects/1.png"
                    project="https://pizzamopano.netlify.app/"
                    github="https://github.com/funnypar/Learn-React/tree/main/pizza-mopano"
                    techs={[
                        "React",
                        "React Router",
                        "Redux",
                        "Tailwind",
                        "HTML",
                    ]}
                />
                <PortfolioItem
                    name="Mopanoreactredux"
                    image="media/projects/3.png"
                    project="https://mopanoreactredux.netlify.app/"
                    github="https://github.com/funnypar/Learn-React/tree/main/reduxBank"
                    techs={["React", "Redux", "Redux-thunk", "HTML", "Css"]}
                />
                <PortfolioItem
                    name="Footexam"
                    image="media/projects/4.png"
                    project="https://footexam.netlify.app/"
                    github="https://github.com/funnypar/Learn-React/tree/main/quiz"
                    techs={[
                        "React",
                        "ApiContext",
                        "useReducer",
                        "Supabase",
                        "HTML",
                        "Css",
                    ]}
                />
                <PortfolioItem
                    name="Mopanofaraway"
                    image="media/projects/2.png"
                    project="https://mopanofaraway.netlify.app/"
                    github="https://github.com/funnypar/Learn-React/tree/main/faraway"
                    techs={["React", "HTML", "Css"]}
                />
                <PortfolioItem
                    name="Mopanoexchange"
                    image="media/projects/5.png"
                    project="https://mopanoexchange.netlify.app/"
                    github="https://github.com/funnypar/Learn-React/tree/main/exchange"
                    techs={["React", "HTML", "Css"]}
                />
                <PortfolioItem
                    name="Mopanotip"
                    image="media/projects/6.png"
                    project="https://mopanotip.netlify.app/"
                    github="https://github.com/funnypar/Learn-React/tree/main/tip"
                    techs={["React", "HTML", "Css"]}
                />
                <PortfolioItem
                    name="Mopanoowe"
                    image="media/projects/7.png"
                    project="https://mopanoowe.netlify.app/"
                    github="https://github.com/funnypar/Learn-React/tree/main/owe"
                    techs={["React", "HTML", "Css"]}
                />
                <PortfolioItem
                    name="Whatisfoss"
                    image="media/projects/8.png"
                    project="https://whatisfoss.netlify.app/"
                    github="https://github.com/funnypar/FOSS/tree/master"
                    techs={["HTML", "Sass"]}
                />
                <PortfolioItem
                    name="Whatisfoss"
                    image="media/projects/9.png"
                    project="https://fsocietyy.netlify.app/"
                    github="https://github.com/funnypar/fSociety"
                    techs={["HTML", "Css"]}
                />
            </div>
        </div>
    );
};

export default Portfolio;
