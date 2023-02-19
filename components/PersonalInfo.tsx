import Image from 'next/image'
import user from '../assets/user-1-svgrepo-com.svg'
const PersonalInfo = () => {
    return (
       <div className='w-10/12 mx-auto'>
        <div className='flex'>
        <form className='w-full md:w-8/12' action="">
          <div className='flex flex-col md:space-x-4 items-center md:flex-row'>
            <div className="relative w-full mt-5">
                <input type="text" name="job title" placeholder="Job title" className="peer w-full rounded-md 
                border border-gray-300 px-3 py-3 shadow shadow-gray-100 
                placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="off" />
                <label  className="pointer-events-none absolute top-0 left-0 ml-3 
                origin-left -translate-y-1/2 transform bg-white px-1 text-sm 
                text-gray-500 transition-all duration-100 ease-in-out 
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 
                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
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
                    First name
                </label>
            </div>
            <div className="relative w-full mt-5">
                <input type="text" name="Last name" id="Last name" placeholder="Last name" className="peer peer w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />

                <label  className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Last name</label>
            </div>
          </div>
          <div className='flex flex-col md:space-x-4 items-center md:flex-row'>
            <div className="relative w-full mt-5">
                <input type="text" name="first name" id="firstname" placeholder="first name" className="peer w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="off" />
                <label  className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">First name</label>
            </div>
            <div className="relative w-full mt-5">
                <input type="text" name="Last name" id="Last name" placeholder="Last name" className="peer peer w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />

                <label  className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Last name</label>
            </div>
          </div>
          <div className='flex flex-col md:space-x-4 items-center md:flex-row'>
            <div className="relative w-full mt-5">
                <input type="text" name="first name" id="firstname" placeholder="first name" className="peer w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="off" />
                <label  className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">First name</label>
            </div>
            <div className="relative w-full mt-5">
                <input type="text" name="Last name" id="Last name" placeholder="Last name" className="peer peer w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />

                <label  className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Last name</label>
            </div>
          </div>
          <div className="relative mt-5">
            <input type="email" name="email" id="email" placeholder="Email Address" className="peer w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="off" />
            <label for="email" className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
          </div>
          <div className="relative mt-5">
            <input type="password" name="password" id="password" placeholder="Password" className="peer peer w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />

            <label for="password" className="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
          </div>
          <div className="my-6">
            <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-neutral-800 focus:outline-none">Sign in</button>
          </div>
          <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet? <a href="#!" className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign up</a>.</p>
        </form>
        <div className='w-4/12 hidden'></div>
        </div>
        </div>
    )
}

export default PersonalInfo
