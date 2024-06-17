import { useEffect, useState } from "react";
import {
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineRocketLaunch,
    HiOutlinePuzzlePiece,
    HiOutlineIdentification,
} from "react-icons/hi2";
import { MdMenuBook } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
    const { pathname } = useLocation();
    const [isHovered, setIsHovered] = useState("/");
    useEffect(() => {
        switch (pathname) {
            case "/":
                setIsHovered(1);
                break;
            case "/me":
                setIsHovered(2);
                break;
            case "/resume":
                setIsHovered(3);
                break;
            case "/portfolio":
                setIsHovered(4);
                break;
            case "/blog":
                setIsHovered(5);
                break;
            case "/contact":
                setIsHovered(6);
                break;
        }
    }, [pathname]);

    return (
        <ul className="bg-leftSide h-96 w-16 p-2 flex justify-around items-center flex-col rounded-full shadow-menu phone:flex-row phone:w-80 phone:h-12 phone:shadow-none">
            <li>
                <Link
                    to="/"
                    id="1"
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
                    to="/blog"
                    id="5"
                    className=" w-10 h-10 text-front text-3xl transition-all text-center bg-black"
                >
                    {isHovered === 5 ? (
                        <p className="text-base text-item">Blog</p>
                    ) : (
                        <MdMenuBook />
                    )}
                </Link>
            </li>
            <li>
                <Link
                    to="/contact"
                    id="5"
                    className=" w-10 h-10 text-front text-3xl transition-all text-center bg-black"
                >
                    {isHovered === 6 ? (
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
