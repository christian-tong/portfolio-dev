import { AboutMe, Experience, Skills } from "../components/_index";

function BioPage() {
  return (
    <section className="flex max-xl:flex-wrap w-full h-full gap-6 max-xl:gap-0">
      <div className="w-full">
        <AboutMe />
      </div>
      <div className="w-full flex flex-col">
        <Experience />
        <Skills />
      </div>
    </section>
  );
}

export default BioPage;
