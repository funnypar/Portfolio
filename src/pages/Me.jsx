import DoList from "../features/me/DoList";
import Infos from "../features/me/Infos";

const Me = () => {
    return (
        <div className="bg-rightSide rounded-l-3xl  text-header gap-6 px-16 py-10 font-roberto overflow-scroll">
            <h3 className="text-3xl font-bold">
                About <span className=" text-me">Me</span>
            </h3>
            <Infos />
            <h3 className="text-3xl font-bold mt-14">
                What <span className=" text-me">I Do</span>
            </h3>
            <DoList />
        </div>
    );
};

export default Me;
