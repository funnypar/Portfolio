import {
    HiOutlineCodeBracket,
    HiOutlineMicrophone,
    HiOutlineAcademicCap,
} from "react-icons/hi2";
import ListItem from "./ListItem";

const DoList = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-8 mt-10">
            <ListItem
                title="Coding"
                info="You can usually find me behind the computer and I love computers
                and their different languages. So forward to infinity and
                beyond..."
            >
                <HiOutlineCodeBracket className=" text-3xl text-me hover:scale-110 transition-all" />
            </ListItem>
            <ListItem
                title="Teaching Deutsch"
                info="Without a doubt, I am one of the lovers of the German
                language and I have been trying to teach it to others for
                almost 1 and a half years."
            >
                <HiOutlineAcademicCap className=" text-3xl text-me hover:scale-110 transition-all" />
            </ListItem>
            <ListItem
                title="Creating Podcasts"
                info="I love to spread knowledge freely. So that is why I love
                making podcasts and listening to them."
            >
                <HiOutlineMicrophone className=" text-3xl text-me hover:scale-110 transition-all" />
            </ListItem>
        </div>
    );
};

export default DoList;
