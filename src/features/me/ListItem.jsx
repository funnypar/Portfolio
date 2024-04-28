// eslint-disable-next-line no-unused-vars, react/prop-types
const ListItem = ({ children, title, info }) => {
    return (
        <div className="flex flex-col gap-4">
            {children}
            <h3 className=" font-semibold">{title}</h3>
            <p className=" font-light">{info}</p>
        </div>
    );
};

export default ListItem;
