import React from "react";

function AboutMe() {
  return (
    <section className="h-full border border-lines-gunmetal">
      <div className="max-w-3xl p-8 text-xl max-2xl:text-xl max-md:text-base leading-10 flex flex-col">
        <div className="max-2xl:hidden">{"/**"}</div>
        <div className="flex">
          <div className="px-3 max-2xl:hidden">
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
          </div>
          <div className="flex flex-col">
            <h3>Front-End Developer</h3>
            <h4>
              {"I'm"} a dedicated Frontend Developer with a strong focus on
              creating captivating user interfaces and exceptional user
              experiences.
            </h4>
            <h4>
              If {"you're"} looking for a Frontend Developer who can transform
              your vision into stunning, user-friendly web applications, {"I'd"}
              be thrilled to collaborate with you!
            </h4>
          </div>
        </div>
        <div className="pl-3 max-2xl:hidden">{"*/"}</div>
      </div>
    </section>
  );
}

export default AboutMe;
