import Image from 'next/image'
import Link from 'next/link'
import cvhero from '../assets/cvhero.svg'
const Experience = () => {
    return (
        <div className='w-10/12 pb-8 mx-auto'>
        <div className='bg-white px-4 py-8 rounded-md mb-2'>
            <h2 className='text-2xl font-semibold'>Experience</h2>
        </div>
         <div className='flex space-x-8'>
             <form className='w-full bg-white px-4 py-8 rounded-md md:w-8/12' action="">
             <label className='text-xl font-semibold'>Proffesional Summary</label>
             <p className='text-sm py-6 text-black/50'>
             Write 2-4 short sentences to summarize your resume and interest the reader! Mention your title, number of years of experience, if any, and most 
             importantly - your most important achievements, best qualities or skill.
             </p>
             <textarea placeholder='write here' className='w-full h-[10rem] p-2 outline-none rounded-md border border-gray-300'></textarea>
             
            <div className='border-y mt-4 py-2 border-gray-300'>
                <div className='text-xl font-semibold'>Work Experience</div>
                <p className='text-sm py-6 text-black/50'>
                Add the jobs or positions you have held. In the description talk about your best achievements and the tasks you were doing.
                </p>
            </div>
             
             <div className='flex flex-col md:space-x-4 items-center md:flex-row'>
                 <div className="relative w-full mt-5">
                     <input type="text" name="job title" placeholder="Job title" className="peer float-input" autoComplete="off" />
                     <label  className="float-label">
                         Job title
                     </label>
                 </div>
                 <div className="relative w-full mt-5">
                     <input type="text" name="job title" placeholder="Job title" className="peer float-input" autoComplete="off" />
                     <label  className="float-label">
                         Job title
                     </label>
                 </div>
                 
             </div> 
             <div className='flex flex-col md:space-x-4 items-center md:flex-row'>
                 <div className="relative w-full mt-5">
                     <input type="text" name="first name" id="firstname" placeholder="first name" 
                     className="float-input peer" autoComplete="off" />
                     <label  className="float-label">
                         First namu
                     </label>
                 </div>
                 <div className="relative w-full mt-5">
                     <input type="text" name="Last name" id="Last name" placeholder="Last name" className="peer float-input" />

                     <label  className="float-label">Last name</label>
                 </div>
             </div>
             <div className='flex flex-col md:space-x-4 items-center md:flex-row'>
                 <div className="relative w-full mt-5">
                     <input type="email" name="email" id="email" placeholder="email" 
                     className="float-input peer" autoComplete="off" />
                     <label  className="float-label">
                         Email Address
                     </label>
                 </div>
                 <div className="relative w-full mt-5">
                     <input type="number" name="phone number" id="phone number" placeholder="phone number" className="peer float-input" />

                     <label  className="float-label">Phone number</label>
                 </div>
             </div>
             <div className="relative mt-5">
                 <input type="text" name="address" id="address" placeholder="address" className="peer float-input" autoComplete="off" />
                 <label className="float-label">Address</label>
             </div>

             <div className='flex flex-col md:space-x-4 items-center md:flex-row'>
                 <div className="relative w-full mt-5">
                     <input type="number" name="postal-code" id="postal-code" placeholder="postal-code" 
                     className="float-input peer" autoComplete="off" />
                     <label  className="float-label">
                         Postal Code
                     </label>
                 </div>
                 <div className="relative w-full mt-5">
                     <input type="number" name="phone number" id="phone number" placeholder="phone number" className="peer float-input" />

                     <label  className="float-label">Phone number</label>
                 </div>
             </div>
             </form>
             <div className='w-4/12 md:flex flex-col rounded-md items-center bg-white px-4 py-8 hidden'>
                 <Image width={200} height={200} alt='resume' src={cvhero}/>
                 <h3 className='text-2xl font-normal my-6'>Work Experience Tips</h3>
                 <ul role='list' className='md:space-y-4'>
                     <li className='list-disc text-sm ml-6'>The section you deem unnecessary, leave it blank and will not appear on your resume.</li>
                     <li className='list-disc text-sm ml-6'>In work experience, start with your last job and work up to your first job (in reverse chronological order).</li>
                     <li className='list-disc text-sm ml-6'>Having trouble writing the introduction to your resume (professional summary)? Read this article: How to write a CV Introduction with Examples</li>
                 </ul>
             </div>
         </div>
         <div className='w-full my-8 md:w-8/12 flex space-x-8'>
             <button className='bg-transparent border border-blue-500 rounded-md font-semibold text-lg text-blue-500 w-[14rem] h-14'>Back</button>
             <Link href='experience'>
             <button className='bg-blue-500 rounded-md font-semibold text-lg text-white w-[14rem] h-14'>Save and Continue</button>
             </Link>
         </div>
     </div>
    )
}

export default Experience
