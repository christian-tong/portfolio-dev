import Image from "next/image";
import ImagePortfolio from "../assets/image-portfolio.png";

function HelloPage() {
  return (
    <section className="h-full w-full py-2 px-2 flex items-center justify-center gap-20">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-lg text-white">Hi all. I am</p>
          <h1 className="text-6xl text-white">Christian Tong</h1>
          <h2 className="text-3xl text-secondary-savoy-blue flex gap-2 items-center max-sm:text-xl max-sm:text-secondary-persian-green">
            {"> Front-End Developer"}
          </h2>
        </div>
        <div className="flex flex-col gap-y-2 max-sm:text-sm">
          <p>{"// find my profile on Github"}</p>
          <p>
            <span className="text-secondary-savoy-blue">const</span>{" "}
            <span className="text-secondary-persian-green">githubLink</span>{" "}
            <span className="text-white"> = </span>
            <a
              href="https://github.com/christian-tong"
              target="_blank"
              className="text-accent-coral-pink underline underline-offset-1">
              {'"https://github.com/christian-tong"'}
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col absolute 2xl:left-1/2 -rotate-12">
        <div className="flex">
          <div className="h-[550px] w-[550px] max-sm:h-32 max-sm:w-32 max-lg:h-40 max-lg:w-40  max-xl:h-52 max-xl:w-52 rounded-full bg-gradients-turquoise blur-3xl opacity-20 max-sm:opacity-50"></div>
          <div></div>
        </div>
        <div className="flex">
          <div className="w-40"></div>
          <div className="h-[550px] w-[550px] max-sm:h-32 max-sm:w-32 max-lg:h-40 max-lg:w-40  max-xl:h-52 max-xl:w-52 rounded-full bg-gradients-savoy-blue blur-3xl opacity-20 max-sm:opacity-50"></div>
        </div>
      </div>
      <div className="flex max-xl:hidden">
        <Image
          src={ImagePortfolio}
          alt="profile photo"
          className="rounded-3xl shadow-2xl"></Image>
      </div>
    </section>
  );
}

export default HelloPage;
