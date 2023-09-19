"use client";

import {  useState } from "react";
import ArrowDownSFillIcon from "remixicon-react/ArrowDownSFillIcon";
import ArrowRightSFillIcon from "remixicon-react/ArrowRightSFillIcon";
import { SiReact, SiNextdotjs } from "@icons-pack/react-simple-icons";

function ProjectsSideNav() {
  const [ProjectsInfo, setProjectsInfo] = useState(true);
  const [Checked, setChecked] = useState(false);
  const [userinfo, setUserInfo] = useState([]);

  const ProjectsInfoClick = () => {
    setProjectsInfo(!ProjectsInfo);
  };

  const IsChecked = () => {
    setChecked(!Checked);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = event.target.value;
    const res: string[] = [];
    res.push(data);
    console.log(res);
  };

  function ProjectsInfoSection() {
    return (
      <div>
        <div
          className="flex p-3 border border-lines-gunmetal text-white"
          onClick={ProjectsInfoClick}>
          {ProjectsInfo ? <ArrowDownSFillIcon /> : <ArrowRightSFillIcon />}
          <h2>projects</h2>
        </div>
        {ProjectsInfo && (
          <div className="flex flex-col">
            <div className="flex items-center px-5 py-4 gap-6">
              <input
                className="h-5 w-5 rounded-sm bg-primary-rich-black-200 border-secondary-slate-gray text-secondary-slate-gray"
                type="checkbox"
                name="languages"
                value="React"
                onChange={handleChange}
              />
              <label htmlFor="React" className="flex gap-2">
                <SiReact />
                <p>React</p>
              </label>
            </div>
            <div className="flex items-center px-5 py-4 gap-6">
              <input
                className="h-5 w-5 rounded-sm bg-primary-rich-black-200 border-secondary-slate-gray text-secondary-slate-gray"
                type="checkbox"
                name="languages"
                value="NextJS"
                onChange={handleChange}
              />
              <label htmlFor="NextJS" className="flex gap-2">
                <SiNextdotjs />
                <p>NextJS</p>
              </label>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="h-full w-[450px] max-xl:w-full max-xl:h-auto border border-lines-gunmetal">
      <ProjectsInfoSection />
    </section>
  );
}

export default ProjectsSideNav;
