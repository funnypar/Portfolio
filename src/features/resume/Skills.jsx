import ProgressLabelOutside from "./ProgressLabelOutside";
const Skills = () => {
    return (
        <>
            <h4 className="text-2xl font-bold">
                Code <span className=" text-me">Skills</span>
            </h4>
            <div className="flex flex-col gap-4 mt-6">
                <ProgressLabelOutside label="HTML/CSS" value={85} />
                <ProgressLabelOutside label="Javascript" value={90} />
                <ProgressLabelOutside label="Python" value={65} />
                <ProgressLabelOutside label="React" value={80} />
                <ProgressLabelOutside label="Tailwind" value={95} />
                <ProgressLabelOutside label="Bootstrap" value={80} />
            </div>
        </>
    );
};

export default Skills;
