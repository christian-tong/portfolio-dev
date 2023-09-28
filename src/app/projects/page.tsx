import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";

const PROJECTS = [
  {
    title: "nike-tailwind",
    description: "a simple nike page.",
    link: "https://github.com/christian-tong/nike-tailwind",
    image:
      "https://raw.githubusercontent.com/christian-tong/nike-tailwind/master/public/Capture-nike-tailwind.jpeg",
    technologies: [
      {
        name: "NextJS",
        icon: <SiNextdotjs size={24} color="#fff" />,
      },
      {
        name: "Javascript",
        icon: <SiJavascript size={24} color="#F7DF1E" />,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss size={24} color="#06B6D4" />,
      },
    ],
  },
  {
    title: "POKE_API",
    description: "search pokedex.",
    link: "https://github.com/christian-tong/POKE_API",
    image:
      "https://user-images.githubusercontent.com/81640934/266075691-2b7efb67-8801-41b8-bc48-53fd6d2e03c0.png",
    technologies: [
      {
        name: "React",
        icon: <SiReact size={24} color="#61DAFB" />,
      },
      {
        name: "Javascript",
        icon: <SiJavascript size={24} color="#F7DF1E" />,
      },
      {
        name: "Css3",
        icon: <SiCss3 size={24} color="#1572B6" />,
      },
    ],
  },
  {
    title: "HTML-CSS-PokemonCard",
    description: "pokemon card design.",
    link: "https://github.com/christian-tong/HTML-CSS-PokemonCard",
    image:
      "https://user-images.githubusercontent.com/81640934/266074432-2b5dc699-6f5e-4398-b23f-907d2ec2e694.png",
    technologies: [
      {
        name: "Html5",
        icon: <SiHtml5 size={24} color="#E34F26" />,
      },
      {
        name: "Css3",
        icon: <SiCss3 size={24} color="#1572B6" />,
      },
    ],
  },
  {
    title: "portfolio-dev",
    description: "portfolio front-end developer.",
    link: "https://github.com/christian-tong/portfolio-dev",
    image:
      "https://user-images.githubusercontent.com/81640934/268725943-c4368453-5ad7-40ae-b2b5-f72e4b715d36.png",
    technologies: [
      {
        name: "NextJS",
        icon: <SiNextdotjs size={24} color="#fff" />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript size={24} color="#3178C6" />,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss size={24} color="#06B6D4" />,
      },
    ],
  },
];

const IconCard = ({ name, icon }: { name: string; icon: any }) => {
  return (
    <div
      className={`h-8 w-8 rounded-md flex items-center justify-center bg-primary-rich-black-100`}>
      {icon}
    </div>
  );
};

const ProjectCard = ({
  id,
  title,
  description,
  link,
  image,
  technologies,
}: {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  technologies: {
    name: string;
    icon: any;
  }[];
}) => {
  return (
    <section className="max-w-sm p-4 flex flex-col gap-4 ">
      <div>
        <h3 className="text-secondary-savoy-blue font-bold inline">
          Project {id+1}{" "}
        </h3>
        <span>{`// _${title}`}</span>
      </div>
      <div className="border border-lines-gunmetal rounded-xl">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="rounded-t-xl w-96 h-56 object-cover "
          />
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {technologies.map((technology, index) => (
              <IconCard
                key={index}
                name={technology.name}
                icon={technology.icon}
              />
            ))}
          </div>
        </div>
        <div className=" w-full p-6 bg-primary-rich-black-300 flex rounded-b-xl flex-col gap-6">
          <p>{description}</p>
          <div className="flex items-center max-xl:flex-col gap-4 text-sm">
            <a href={link} target="_blank">
              <button className="bg-[#1C2B3A] text-white p-4 rounded-xl">
                view-project
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

function ProjectsPage() {
  return (
    <section className="w-full p-10 max-xl:p-4 grid grid-cols-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 place-content-center overflow-auto">
      {PROJECTS.map((PROJECT, index) => (
        <ProjectCard
          key={index}
          id={index}
          title={PROJECT.title}
          description={PROJECT.description}
          link={PROJECT.link}
          image={PROJECT.image}
          technologies={PROJECT.technologies}
        />
      ))}
      <div className="flex justify-center items-center "><p>More Projects Coming Soon...</p></div>
    </section>
  );
}

export default ProjectsPage;
