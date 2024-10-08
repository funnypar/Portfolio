import ConnectionList from "./ConnectionList";
import CVModal from "./CVModal";

const LeftSide = () => {
    return (
        <div className="bg-leftSide flex justify-around items-center flex-col text-header py-2 px-6 phone:hidden">
            <img
                src="media/parsa.jpg"
                alt="user"
                className=" rounded-full h-48 w-48 object-cover border-2 hover:scale-105 hover:border-none transition-all"
            />
            <h2 className=" text-3xl text-center">Mohammadparsa Norouzi</h2>
            <h2 className=" text-xl">Frontend programmer</h2>
            <ConnectionList />
            <CVModal />
            <p className=" text-sm">© 2023 All rights reserved.</p>
        </div>
    );
};

export default LeftSide;
