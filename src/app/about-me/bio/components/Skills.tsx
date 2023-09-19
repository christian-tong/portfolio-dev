import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiExpress,
  SiPython,
  SiDjango,
  SiMicrosoftsqlserver,
  SiMysql,
} from "@icons-pack/react-simple-icons";

function Skills() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-4 border border-lines-gunmetal">
      <SiHtml5 size={48} />
      <SiCss3 size={48} />
      <SiJavascript size={48} />
      <SiTypescript size={48} />
      <SiTailwindcss size={48} />
      <SiReact size={48} />
      <SiAngular size={48} />
      <SiNextdotjs size={48} />
      <SiExpress size={48} />
      <SiPython size={48} />
      <SiDjango size={48} />
      <SiMicrosoftsqlserver size={48} />
      <SiMysql size={48} />
      <p>More coming soon...</p>
    </div>
  );
}

export default Skills;
