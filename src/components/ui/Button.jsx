/* eslint-disable react/prop-types */
const Button = ({ children }) => {
    return (
        <button className="py-1 px-4 border-2 rounded-full hover:bg-white transition-all hover:text-leftSide">
            {children}
        </button>
    );
};

export default Button;
