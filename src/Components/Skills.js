import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaJava } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiTailwindcss, SiFirebase, SiMysql, SiCanva } from "react-icons/si";

const Skills = ({ skill }) => {
    const icon = {
        'C++': <CgCPlusPlus />,
        Postman: <SiPostman />,
        React: <FaReact />,
        Javascript: <DiJavascript1 />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        MongoDb: <SiMongodb />,
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        Npm: <FaNpm />,
        Figma: <FaFigma />,
        Bootstrap: <FaBootstrap />,
        Vercel: <SiVercel />,
        // New skills
        Java: <FaJava />,
        Firebase: <SiFirebase />,
        MySQL: <SiMysql />,
        TailwindCSS: <SiTailwindcss />,
        Canva: <SiCanva />
    }

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    )
}

export default Skills;
