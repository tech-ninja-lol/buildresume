import Image from 'next/image'
import user from '../assets/user-1-svgrepo-com.svg'
import cvhero from '../assets/cvhero.svg'
import Link from 'next/link'
const PersonalInfo = ({id}) => {
    return (
       <div className='w-10/12 pb-8 mx-auto'>
           <div className='bg-white px-4 py-8 rounded-md mb-2'>
               <h2 className='text-2xl font-semibold'>Personal Information</h2>
           </div>
            <div className='flex space-x-8'>
                <form className='w-full bg-white px-4 py-8 rounded-md md:w-8/12' action="">
                <div className='flex flex-col md:space-x-4 items-center md:flex-row'>
                    <div className="relative w-full mt-5">
                        <input type="text" name="job title" placeholder="Job title" className="peer float-input" autoComplete="off" />
                        <label  className="float-label">
                            Job title
                        </label>
                    </div>
                    <div className="flex items-center space-x-4 w-full mt-5">
                        <div className='flex bg-gray-100 justify-center h-[4rem] w-[4rem] 
                        border-2 rounded-lg border-dashed border-blue-500'>
                            <Image width={30} alt='user icon' src={user} />
                        </div>
                        <p className='font-semibold text-blue-500'>Upload Photo</p>
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
                <div className='w-4/12 md:flex flex-col items-center bg-white px-4 py-8 hidden'>
                    <Image width={200} height={200} alt='resume' src={cvhero}/>
                    <h3 className='text-2xl font-normal my-6'>Personal tips</h3>
                    <ul role='list' className='md:space-y-4'>
                        <li className='list-disc text-sm ml-6'>Only write the information that you consider necessary</li>
                        <li className='list-disc text-sm ml-6'>Personal photo, date of birth, and gender are not recommended in America, Canada and Australia</li>
                        <li className='list-disc text-sm ml-6'>Don't use e-mail that gives a childish impression of you</li>
                    </ul>
                </div>
            </div>
            <div className='w-full my-8 md:w-8/12 flex space-x-8'>
                <button disabled className='bg-transparent border border-blue-500 rounded-md font-semibold text-lg text-blue-500 w-[14rem] h-14'>Back</button>
                <Link href={`/template/${id}/experience`}>
                <button className='bg-blue-500 rounded-md font-semibold text-lg text-white w-[14rem] h-14'>Save and Continue</button>
                </Link>
            </div>
        </div>
    )
}

export default PersonalInfo
