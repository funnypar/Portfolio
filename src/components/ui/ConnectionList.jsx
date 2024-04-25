import { SiTwitter, SiLinkedin, SiGithub } from "react-icons/si";
const ConnectionList = () => {
    return (
        <ul className="flex gap-8">
            <li className="transition-all hover:scale-125">
                <a href="https://twitter.com/Mopanoo">
                    <SiTwitter />
                </a>
            </li>
            <li className="transition-all hover:scale-125">
                <a href="https://www.linkedin.com/in/mopano/">
                    <SiLinkedin />
                </a>
            </li>
            <li className="transition-all hover:scale-125">
                <a href="https://github.com/funnypar">
                    <SiGithub />
                </a>
            </li>
        </ul>
    );
};

export default ConnectionList;
