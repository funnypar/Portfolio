import { Outlet } from "react-router-dom";
import LeftSide from "./LeftSide";
import Menu from "./Menu";

const AppLayout = () => {
    return (
        <main className=" h-screen flex justify-center items-center">
            <div className="flex items-center gap-9">
                <div className="h-box w-box bg-leftSide rounded-box overflow-hidden grid grid-cols-box shadow-box">
                    <LeftSide />
                    <Outlet />
                </div>
                <Menu />
            </div>
        </main>
    );
};

export default AppLayout;
