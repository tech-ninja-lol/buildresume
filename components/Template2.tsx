import { Info } from "../features/userInfoSlice";
import { SkillType, eduType, ExperienceType } from "../components/Experience";
import SkillLevel from "@/components/SkillLevel";

interface Prop {
  personalInfo: Info;
  experience: ExperienceType[];
  skill: SkillType[];
  education: eduType[];
  summary: string;
  refs: any
}

const Template2 = ({
    personalInfo,
    experience,
    summary,
    skill,
    education,
    refs
}:Prop) => {
    const {firstName, lastName, email, title, linkedin, phone, address} = personalInfo
    return (
        <div className='w-full text-[12px] shadow-md my-8 border border-gray-200 mx-auto flex flex-col'>
          {/* Title starts */}
          <div className='bg-gray-800 text-white px-6 py-6' id='title'>
            <h1 className='text-xl font-semibold'>{firstName} {lastName} </h1>
            <p className='text-lg'>{title}</p>
          </div>

          {/* Title ends */}
            <div className='w-full flex justify-between'>
                <div className='w-2/3 py-1 px-6'>
                    <p>{summary}</p>
                </div>
                <div className='w-1/3 px-2 py-6 bg-gray-100'></div>
            </div>
          {/* Contact starts */}
        </div>
    )
}

export default Template2
