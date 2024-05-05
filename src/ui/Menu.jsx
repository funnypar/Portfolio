import { useState } from "react";
import {
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineRocketLaunch,
    HiOutlinePuzzlePiece,
    HiOutlineIdentification,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const Menu = () => {
    const [isHovered, setIsHovered] = useState(null);
    function mouseHandler(e) {
        switch (e.target.parentElement.id) {
            case "1":
                setIsHovered(1);
                break;
            case "2":
                setIsHovered(2);
                break;
            case "3":
                setIsHovered(3);
                break;
            case "4":
                setIsHovered(4);
                break;
            case "5":
                setIsHovered(5);
                break;
        }
    }
    return (
        <ul className="bg-leftSide h-96 w-16 p-2 flex justify-around items-center flex-col rounded-full shadow-menu phone:flex-row phone:w-80 phone:h-12 phone:shadow-none">
            <li>
                <Link
                    to="/"
                    id="1"
                    onMouseOver={mouseHandler}
                    onMouseOut={() => setIsHovered(null)}
                    className=" w-10 h-10 text-front text-3xl transition-all text-center"
                >
                    {isHovered === 1 ? (
                        <p className="text-base text-item">Home</p>
                    ) : (
                        <HiOutlineHome />
                    )}
                </Link>
            </li>
            <li>
                <Link
                    to="/me"
                    id="2"
                    onMouseOver={mouseHandler}
                    onMouseOut={() => setIsHovered(null)}
                    className=" w-10 h-10 text-front text-3xl transition-all text-center"
                >
                    {isHovered === 2 ? (
                        <p className="text-base text-item">Me</p>
                    ) : (
                        <HiOutlineUser />
                    )}
                </Link>
            </li>
            <li>
                <Link
                    to="/resume"
                    id="3"
                    onMouseOver={mouseHandler}
                    onMouseOut={() => setIsHovered(null)}
                    className=" w-10 h-10 text-front text-3xl transition-all text-center"
                >
                    {isHovered === 3 ? (
                        <p className="text-base text-item">Resume</p>
                    ) : (
                        <HiOutlineIdentification />
                    )}
                </Link>
            </li>
            <li>
                <Link
                    to="/portfolio"
                    id="4"
                    onMouseOver={mouseHandler}
                    onMouseOut={() => setIsHovered(null)}
                    className=" w-10 h-10 text-front text-3xl transition-all text-center "
                >
                    {isHovered === 4 ? (
                        <p className="text-base text-item">Portfolio</p>
                    ) : (
                        <HiOutlinePuzzlePiece />
                    )}
                </Link>
            </li>
            <li>
                <Link
                    to="/contact"
                    id="5"
                    onMouseOver={mouseHandler}
                    onMouseOut={() => setIsHovered(null)}
                    className=" w-10 h-10 text-front text-3xl transition-all text-center bg-black"
                >
                    {isHovered === 5 ? (
                        <p className="text-base text-item">Contact</p>
                    ) : (
                        <HiOutlineRocketLaunch />
                    )}
                </Link>
            </li>
        </ul>
    );
};

export default Menu;
