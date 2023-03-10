import { Info } from "../features/userInfoSlice";
import { SkillType, eduType, ExperienceType } from "./Experience";
import SkillLevel from "@/components/SkillLevel";
import {useRef} from 'react'

interface Prop {
  personalInfo: Info;
  experience: ExperienceType[];
  skill: SkillType[];
  education: eduType[];
  summary: string;
  refs: any;
} 

const Template2 = ({personalInfo, summary, education, refs, skill, experience }:Prop) => {
  const { firstName, lastName, email, title, linkedin, phone, address, github, website } =
    personalInfo;
    const componentRef= refs
  return (
    <div ref={componentRef} className="w-full text-[12px] border border-b-transparent border-gray-200 mx-auto flex flex-col">
      {/* Title starts */}
      <div className="bg-gray-800 text-white px-6 py-6" id="title">
        <h1 className="text-xl font-semibold">
          {firstName} {lastName}{" "}
        </h1>
        <p className="text-lg">{title}</p>
      </div>

      {/* Title ends */}
      <div className="w-full flex justify-between">
        <div className="w-2/3 py-2 px-6">
          <p>{summary}</p>
          {/* Experience starts */}
          <h2 className="font-semibold text-black/90">Work Experience</h2>
          <div className="border-t py-2 border-gray-300">
            <ul className="space-y-2">
              {/* Experience 1 starts */}
              {experience.map((exp, i) => (
                <div key={i}>
                  <li className="flex  justify-between">
                    <div className="w-2/12 font-medium" id="date">
                      {exp.from} - {exp.to}
                    </div>
                    <div className="w-9/12">
                      <h2
                        id="position"
                        className="text-md text-black/90 font-medium"
                      >
                        {exp.title}
                      </h2>
                      <h3 className="text-md text-black/90 font-bold">
                        {exp.company}
                      </h3>
                      <ul className="my-2 ">
                        {exp.description?.split("\n").map((li, index) => (
                          <li className="list-disc" key={index}>
                            {li}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </div>
              ))}
              {/* Experience 2 ends */}
            </ul>
          </div>
          {/* Experience ends */}

          {/* Education starts */}
          <h2 className="font-semibold text-black/90">Education</h2>
          <div className="border-t py-2 border-gray-300">
            <ul className="space-y-2">
              {/* Education 1 starts */}
              {education.map((edu, i) => (
                <div key={i}>
                  <li className="flex  justify-between">
                    <div className="w-2/12 font-medium" id="date">
                      {edu.from} - {edu.to}
                    </div>
                    <div className="w-9/12">
                      <h2
                        id="position"
                        className="text-md text-black/90 font-medium"
                      >
                        {edu.specialization}
                      </h2>
                      <h3 className="text-md text-black/90 font-bold">
                        {edu.school}
                      </h3>
                      <p className="my-2 ">{edu.description}</p>
                    </div>
                  </li>
                </div>
              ))}
              {/* Education 2 ends */}
            </ul>
          </div>
          {/* Education ends */}
        </div>
        <div className="w-1/3 h-[930px] px-2 py-2 bg-gray-100">
          <h3 className="text-lg font-semibold">Personal Info</h3>
          <div className="border-t space-y-2 border-gray-200 py-2">
            <div>
              <h4 className="font-semibold">Address:</h4>
              <p>{address}</p>
            </div>
            <div>
              <h4 className="font-semibold">Email:</h4>
              <p>{email}</p>
            </div>
            <div>
              <h4 className="font-semibold">LinkedIn:</h4>
              <p>{linkedin}</p>
            </div>
            {github && (
              <div>
              <h4 className="font-semibold">Github:</h4>
              <p>{github}</p>
            </div>
          )}
          {website && (
              <h3>
              Website : <span>{website}</span>
            </h3>
          )}
          </div>
          {/* Skills and softwares */}

          <h3 className="text-lg font-semibold">Skills and software</h3>
          <div className="border-t space-y-2 border-gray-200 py-2">
          <ul className="w-full space-y-0">
          {/* Skills 1 starts */}
          {skill.map((skillset, i) => (
            // <div key={i}>
            <li className="flex flex-col">
                <h4>{skillset.skill}</h4>{""}
                <div className="flex justify-end w-full flex-col items-end space-x-2">
                    <SkillLevel skillLevel={skillset.level} />
                    <span>{skillset.level}</span>
                </div>
            </li>
            // </div>
          ))}
          {/* Skills 1 ends */}
        </ul>
          </div>
          {/* Skills and software ends */}
        </div>
      </div>

      {/* Experience ends */}
    </div>
  );
};

export default Template2;
