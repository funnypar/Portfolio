import LeftSide from "./LeftSide";
import Menu from "./Menu";
import RightSide from "./RightSide";

const AppLayout = () => {
    return (
        <div className="flex items-center gap-9">
            <div className="h-box w-box bg-leftSide rounded-box overflow-hidden grid grid-cols-box shadow-box">
                <LeftSide />
                <RightSide />
            </div>
            <Menu />
        </div>
    );
};

export default AppLayout;
