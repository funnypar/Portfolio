/* eslint-disable react/prop-types */
const Btn = ({ children, onClick }) => {
    return (
        <button
            className="py-1 px-4 border-2 rounded-full hover:bg-white transition-all hover:text-leftSide"
            onClick={onClick}
        >
            {/* <a href="/public/CV/CV.pdf" download> */}
            {children}
            {/* </a> */}
        </button>
    );
};

export default Btn;
