import Image from "next/image";
import React from "react";

const EXPERIENCES = [
  {
    title: "@cooperativa-cultural-import",
    src: "https://www.cooperativacultural.com.pe/recursos/img/fotos/logo.png",
    link: "https://www.cooperativacultural.com.pe/",
    period: 4,
    functionName: "CooperativaCulturalImport",
    position: "Assistant Position of Development of Systems of Information",
    startPeriod: "March-2023",
    endPeriod: "May-2023",
  },
  {
    title: "@digy-solutions-it",
    src: "https://www.gravatar.com/avatar/bfcb1d6a22d7098499771d3bcec5a8c4?d=identicon&f=y&s=128",
    link: "https://www.universidadperu.com/empresas/digy-solutions-it.php",
    period: 10,
    functionName: "DigySolutionsIt",
    position: "Junior Programmer Full Stack (Internship Pre Professionals)",
    startPeriod: "September-2022",
    endPeriod: "November-2022",
  },
  {
    title: "@unsm",
    src: "https://2.bp.blogspot.com/-564fJE2IAek/V-VnOQPNaFI/AAAAAAAAAF4/H8JynzJUjYYVUTuFtNc8xfvaID8tu6FZACK4B/s1600/logo-universidad-nacional-de-san-martin.png",
    link: "https://unsm.edu.pe/",
    period: 30,
    functionName: "NationalUniversityOfSanMartin",
    position:
      "Developer of the Center of Follow-up to the Graduate (Internship Pre Professionals)",
    startPeriod: "January-2021",
    endPeriod: "March-2021",
  },
  {
    title: "@vf-consulting",
    src: "https://media-exp1.licdn.com/dms/image/C4E0BAQGjEGYg0txeKA/company-logo_200_200/0/1519888540943?e=2159024400&v=beta&t=xLzzGD1nYPHYorLFcq9rrLh2Qws8UAqVHoNur1HxmuA",
    link: "http://vfcons.com/",
    period: 33,
    functionName: "VfConsulting",
    position: "Internship",
    startPeriod: "June-2020",
    endPeriod: "December-2020",
  },
];

const ExperienceCard = ({
  title,
  src,
  link,
  period,
  functionName,
  position,
  startPeriod,
  endPeriod,
}: {
  title: string;
  src: string;
  link: string;
  period: number;
  functionName: string;
  position: string;
  startPeriod: string;
  endPeriod: string;
}) => {
  return (
    <div className="flex flex-col max-w-5xl gap-4">
      <div className="flex gap-4">
        <Image
          src={src}
          alt={functionName}
          width={50}
          height={50}
          className="rounded-full scale-100 bg-auto"
        />
        <div className="flex flex-col gap-2 ">
          <a
            href={link}
            target="_blank"
            className="text-secondary-savoy-blue text-sm">
            {title}
          </a>
          <span className="text-xs">Create {period} months ago</span>
        </div>
      </div>
      <div className=" bg-primary-rich-black-300 rounded-3xl border border-lines-gunmetal p-7 max-sm:text-sm">
        <div>
          <span className="text-accent-coral-pink">function </span>
          <span>{functionName} = </span>
          <span className="text-accent-sandy-brown">{"()"}</span>{" "}
          <span>{"=> "}</span>
          <span className="text-accent-lavender-floral">{"{"}</span>
          <div className="flex flex-col gap-4 p-6">
            <div>
              <span className="text-secondary-persian-green">const </span>{" "}
              <span>POSITION = </span>
              <span className="text-accent-turquoise">{`"${position}"`}</span>
              <span>{";"}</span>
            </div>
            <div>
              <span className="text-secondary-persian-green">const </span>
              <span>START_PERIOD = </span>
              <span className="text-accent-turquoise">{`"${startPeriod}"`}</span>
              <span>{";"}</span>
            </div>
            <div>
              <span className="text-secondary-persian-green">const </span>
              <span>END_PERIOD = </span>
              <span className="text-accent-turquoise">{`"${endPeriod}"`}</span>
              <span>{";"}</span>
            </div>
          </div>
          <span className="text-accent-lavender-floral">{"}"}</span>
        </div>
      </div>
    </div>
  );
};

function Experience() {
  return (
    <div className="h-full w-full flex flex-wrap justify-center items-center border border-lines-gunmetal p-6 gap-6 ">
      {EXPERIENCES.map((EXPERIENCE, index) => (
        <section key={index} className="w-full flex flex-wrap gap-6">
          <ExperienceCard
            title={EXPERIENCE.title}
            src={EXPERIENCE.src}
            link={EXPERIENCE.link}
            period={EXPERIENCE.period}
            functionName={EXPERIENCE.functionName}
            position={EXPERIENCE.position}
            startPeriod={EXPERIENCE.startPeriod}
            endPeriod={EXPERIENCE.endPeriod}
          />
        </section>
      ))}
    </div>
  );
}

export default Experience;
