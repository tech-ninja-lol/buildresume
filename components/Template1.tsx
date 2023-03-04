'use client'
import {useRef} from 'react'
import { Info } from "../features/userInfoSlice";
import { SkillType, eduType, ExperienceType } from "../components/Experience";
interface Prop {
  personalInfo: Info;
  experience: ExperienceType[];
  skill: SkillType[];
  education: eduType[];
  summary: string;
  refs: any
}
const Template1 = ({
  personalInfo,
  experience,
  summary,
  skill,
  education,
  refs
}: Prop) => {
    
  const { firstName, lastName, title, email, address, phone, postalCode } =
    personalInfo;
    const componentRef= refs
  return (
    <div ref={componentRef} className="w-full text-[14px]  p-6  border border-b-transparent  mx-auto flex flex-col">
      {/* Title starts */}
      <div id="title">
        <h1 className="text-3xl font-semibold">
          {firstName} {lastName}
        </h1>
        <p className="text-gray-500 text-lg font-medium">{title}</p>
      </div>
      {/* Title ends */}

      {/* Contact starts */}
      <div id="contact" className="flex my-4 space-x-16">
        <div>
          <h3>
            Phone : <span>{phone}</span>
          </h3>
          <h3>
            Email : <span>{email}</span>
          </h3>
        </div>
        <div>
          <h3>
            Website : <span>https://segun-adeniyi.vercel.app</span>
          </h3>
          <h3>
            Github : <span>https://github.com/hadeeny</span>
          </h3>
        </div>
      </div>
      {/* Contact Ends */}

      {/* Professional Summary */}
      <div className="mb-4">
        <p>{summary}</p>
      </div>
      {/* Professional summary ends */}

      {/* Experience starts */}
      <h2 className="mt-0 font-semibold text-black/90">Work Experience</h2>
      <div className="border-t py-4 border-gray-300">
        <ul className="space-y-4">
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
                    className="text-lg text-black/90 font-medium"
                  >
                    {exp.title}
                  </h2>
                  <h3 className="text-md text-black/90 font-bold">
                    {exp.company}
                  </h3>
                  <ul className="my-2 ">{exp.description?.split('\n').map((li, index)=>(
                      <li className='list-disc' key={index}>{li}</li>
                  ))}</ul>
                </div>
              </li>
            </div>
          ))}
          {/* Experience 2 ends */}
        </ul>
      </div>
      {/* Experience ends */}

      {/* Education starts */}
      <h2 className="mt-2 font-semibold text-black/90">Education</h2>
      <div className="border-t py-4 border-gray-300">
        <ul className="space-y-4">
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
                    className="text-lg text-black/90 font-medium"
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
      {/* Education Ends */}

      {/* Skills starts */}
      <h2 className="mt-2 font-semibold text-black/90">Skills</h2>
      <div className="border-t py-4 border-gray-300">
        <ul className="space-x-2 space-y-2">
          {/* Skills 1 starts */}
          {skill.map((skillset, i) => (
            // <div key={i}>
              <li key={i} className="px-2 inline-block py-0.5 text-sm font-semibold border border-gray-300 rounded-md bg-gray-100">
                {skillset.skill}
              </li>
            // </div>
          ))}
          {/* Skills 1 ends */}
        </ul>
      </div>
      {/* Skills end */}

      {/* Interests start*/}
      <h2 className="mt-4 font-semibold text-black/90">Interest</h2>
      <div className="border-t py-4 border-gray-300">
        <ul className="space-x-2 space-y-2">
          {/* Skills 1 starts */}
          <li className="px-2 inline-block py-0.5 text-sm font-semibold border border-gray-300 rounded-md bg-gray-100">
            html
          </li>
          <li className="px-2 inline-block py-0.5 text-sm font-semibold border border-gray-300 rounded-md bg-gray-100">
            css
          </li>
          <li className="px-2 inline-block py-0.5 text-sm font-semibold border border-gray-300 rounded-md bg-gray-100">
            javascript
          </li>
          <li className="px-2 inline-block py-0.5 text-sm font-semibold border border-gray-300 rounded-md bg-gray-100">
            react
          </li>
          <li className="px-2 inline-block py-0.5 text-sm font-semibold border border-gray-300 rounded-md bg-gray-100">
            framer motion
          </li>
          <li className="px-2 inline-block py-0.5 text-sm font-semibold border border-gray-300 rounded-md bg-gray-100">
            css
          </li>
          <li className="px-2 inline-block py-0.5 text-sm font-semibold border border-gray-300 rounded-md bg-gray-100">
            javascript
          </li>

          {/* Skills 1 ends */}
        </ul>
      </div>
      {/* Interests end */}
    </div>
  );
};

export default Template1;
