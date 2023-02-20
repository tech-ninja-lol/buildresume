import Image from "next/image";
import Link from "next/link";
import cvhero from "../assets/cvhero.svg";
interface Prop {
  id:number
}
const Experience = ({ id }:Prop) => {
  return (
    <div className="w-11/12 pb-8 mx-auto">
      <div className="bg-white px-4 py-4 md:py-8 rounded-md mb-2">
        <h2 className="text-2xl font-semibold">Experience</h2>
      </div>
      <div className="flex space-x-8 items-start">
        <form
          className="w-full bg-white px-4 py-8 rounded-md md:w-8/12"
          action=""
        >
          <label className="text-xl font-semibold">Proffesional Summary</label>
          <p className="text-sm py-6 text-black/50">
            Write 2-4 short sentences to summarize your resume and interest the
            reader! Mention your title, number of years of experience, if any,
            and most importantly - your most important achievements, best
            qualities or skill.
          </p>
          <textarea
            placeholder="write here"
            className="w-full h-[10rem] p-2 outline-none rounded-md border border-gray-300"
          ></textarea>

          <div className="border-y mt-4 py-2 border-gray-300">
            <div className="text-xl font-semibold">Work Experience</div>
            <p className="text-sm py-6 text-black/50">
              Add the jobs or positions you have held. In the description talk
              about your best achievements and the tasks you were doing.
            </p>
          </div>

          <div className="flex flex-col md:space-x-4 items-center md:flex-row">
            <div className="relative w-full mt-5">
              <input
                type="text"
                name="title"
                placeholder="title"
                className="peer float-input"
                autoComplete="off"
              />
              <label className="float-label">Title/Position</label>
            </div>
            <div className="relative w-full mt-5">
              <input
                type="text"
                name="city"
                placeholder="city"
                className="peer float-input"
                autoComplete="off"
              />
              <label className="float-label">City/Country</label>
            </div>
          </div>

          <div className="relative w-full mt-5">
            <input
              type="text"
              name="company"
              id="company"
              placeholder="company"
              className="float-input peer"
              autoComplete="off"
            />
            <label className="float-label">Company/Organization</label>
          </div>

          <div className="flex flex-col md:space-x-4 items-center md:flex-row">
            <div className="relative w-full mt-5">
              <input
                type="month"
                name="month"
                id="month"
                className="peer float-input"
              />

              <label className="float-label">From</label>
            </div>
            <div className="relative w-full mt-5">
              <input
                type="month"
                name="month"
                id="month"
                className="peer float-input"
              />

              <label className="float-label">To</label>
            </div>
          </div>
          <div className="relative mt-5">
            <label className="float-label">Description</label>
            <textarea
              placeholder="write here"
              className="w-full h-[10rem] p-2 outline-none rounded-md border border-gray-300"
            ></textarea>
          </div>

          <button className='text-blue-500 font-semibold'>Add more experience +</button>

          <div className="border-y mt-8 py-2 border-gray-300">
            <div className="text-xl font-semibold">Education</div>
            <p className="text-sm py-6 text-black/50">
            Add your educational qualification, such as a university degree, 
            master's degree and doctorate. Do not add a high school 
            diploma unless you have not completed your university studies.
            </p>
          </div>
          
          <div className="flex flex-col md:space-x-4 items-center md:flex-row">
            <div className="relative w-full mt-5">
              <input
                type="text"
                name="specialization"
                id="specialization"
                placeholder="specialization"
                className="float-input peer"
                autoComplete="off"
              />
              <label className="float-label">Specialization/Degree</label>
            </div>
            <div className="relative w-full mt-5">
              <input
                type="text"
                name="university"
                id="university"
                placeholder="university"
                className="peer float-input"
              />

              <label className="float-label">School/University</label>
            </div>
          </div>
          <div className="flex flex-col md:space-x-4 items-center md:flex-row">
            <div className="relative w-full mt-5">
              <input
                type="month"
                name="month"
                id="month"
                className="peer float-input"
              />

              <label className="float-label">From</label>
            </div>
            <div className="relative w-full mt-5">
              <input
                type="month"
                name="month"
                id="month"
                className="peer float-input"
              />

              <label className="float-label">To</label>
            </div>
          </div>
          <div className="relative mt-5">
            <label className="float-label">Description</label>
            <textarea
              placeholder="write here"
              className="w-full h-[10rem] p-2 outline-none rounded-md border border-gray-300"
            ></textarea>
          </div>

          <button className='text-blue-500 font-semibold'>Add more education +</button>

          {/* Skills start */}
          <div className="border-y mt-8 py-2 border-gray-300">
            <div className="text-xl pt-4 font-semibold">Skills</div>
            <p className="text-sm py-6 text-black/50">
            Show your relevant experience (last 10 years). Use bullet points 
            to note your achievements, 
            if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).
            </p>
          </div>
          
          <div className="flex flex-col md:space-x-4 items-center md:flex-row">
            <div className="relative w-full mt-5">
              <input
                type="text"
                name="specialization"
                id="skill"
                placeholder="skill"
                className="float-input peer"
                autoComplete="off"
              />
              <label className="float-label">Skill</label>
            </div>
            <div className="relative w-full mt-5">
            <label  className='float-label'>Level</label>

            <select className='float-input' name="pets" id="pet-select">
                <option value="">Select skill level</option>
                <option value="beginner">Beginner</option>
                <option value="good">Good</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>
            </div>
          </div>
          

          <button className='text-blue-500 mt-4 font-semibold'>Add more skills +</button>
          {/* skills end */}
        </form>
        <div className="w-4/12 md:flex flex-col rounded-md items-center bg-white px-4 py-8 hidden">
          <Image width={200} height={200} alt="resume" src={cvhero} />
          <h3 className="text-2xl font-normal my-6">Work Experience Tips</h3>
          <ul role="list" className="md:space-y-4">
            <li className="list-disc text-sm ml-6">
              The section you deem unnecessary, leave it blank and will not
              appear on your resume.
            </li>
            <li className="list-disc text-sm ml-6">
              In work experience, start with your last job and work up to your
              first job (in reverse chronological order).
            </li>
            <li className="list-disc text-sm ml-6">
              Having trouble writing the introduction to your resume
              (professional summary)? Read this article: How to write a CV
              Introduction with Examples
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full my-8 md:w-8/12 flex flex-col-reverse gap-y-4 md:flex-row md:space-x-8">
        <Link href={`/template/${id}/user`}>
          <button className="bg-transparent w-full border border-blue-500 rounded-md font-semibold text-lg text-blue-500 md:w-[14rem] h-14">
            Back
          </button>
        </Link>
        <Link href={`/template/${id}/preview`}>
          <button className="bg-blue-500 rounded-md font-semibold text-lg text-white w-full md:w-[14rem] h-14">
            Save and Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Experience;
