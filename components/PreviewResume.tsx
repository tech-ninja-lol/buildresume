"use client"
import React, { useRef } from 'react';
import { templates } from "../templates";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import {Info} from '../features/userInfoSlice'
import {useReactToPrint} from 'react-to-print'

interface Prop {
  id: number;
  personalInfo?: Info
}
const PreviewResume = ({ id }: Prop) => {
  const componentRef = useRef(null);
  const { personalInfo, education, experience, skill, summary } = useSelector((state: RootState) => state.userInfo);
  const download = useReactToPrint({
    content: () => componentRef.current,
  }); 

  return (
    <div className="w-11/12 pb-8 mx-auto">
      <div className="bg-white px-4 py-4 md:py-8 rounded-md mb-2">
        <h2 className="text-2xl font-semibold">Preview</h2>
      </div>
      <div className="flex items-start md:space-x-8">
        <div className="hidden md:block bg-white px-4 py-8 rounded-md md:w-8/12">
          {/* Injected Resume */}
          {templates.map((temp, i) => {
            return (
              temp.id == id && <temp.temp 
              personalInfo={personalInfo} 
              education={education}
              experience= {experience}
              skill = {skill}
              summary={summary}
              refs={componentRef}
              key={i} />
            );
          })}
          {/* Injected Resume preview */}
        </div>
        <div className="w-full md:w-4/12 md:flex flex-col items-center bg-white px-4 py-4">
          <h3 className="text-xl font-semibold my-2 text-center">
            Your CV is ready!
          </h3>
          <p className="text-black/50 text-md font-medium text-center">
            Download it or customize it more
          </p>
         
            <button onClick={download} className="text-white text-lg bg-blue-500 font-medium my-4 py-3 w-full rounded-md">
            Download
          </button>

          <button className="text-blue-500 text-lg bg-transparent border border-blue-500 font-medium my-1 py-3 w-full rounded-md">
            Print
          </button>
        </div>
      </div>
      <div className="w-full my-8 md:w-8/12 flex flex-col-reverse gap-y-4 md:flex-row md:space-x-8">
        <Link href={`/template/${id}/experience`}>
          <button className="bg-transparent w-full border border-blue-500 rounded-md font-semibold text-lg text-blue-500 md:w-[14rem] h-14">
            Back
          </button>
        </Link>
        <Link href={`/template/${id}/preview`}>
          <button
            disabled
            className="bg-blue-500/30 rounded-md font-semibold text-lg text-white w-full md:w-[14rem] h-14"
          >
            Save and Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PreviewResume;
