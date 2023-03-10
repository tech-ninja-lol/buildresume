'use client'
import {useEffect} from 'react'
import Image from 'next/image'
import user from '../assets/user-1-svgrepo-com.svg'
import cvhero from '../assets/cvhero.svg'
import Link from 'next/link'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {AppDispatch} from '../store'
import {getPersonalInfo, Info} from '../features/userInfoSlice'
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface Prop {
    id:number
}

 
const PersonalInfo = ({id}:Prop) => {
    const { storeInfo } = useSelector((state: RootState) => state.userInfo);
 
    const dispatch = useDispatch<AppDispatch>();

    const [personalInfo, setPersonalInfo] = useState<Info>(storeInfo)
    const submitHandler =()=>{
        dispatch(getPersonalInfo(personalInfo))        
    }
    
    return (
       <div className='w-11/12 pb-8 mx-auto'>
           <div className='bg-white px-4 py-4 md:py-8 rounded-md mb-2'>
               <h2 className='text-2xl font-semibold'>Personal Information</h2>
           </div>
            <div className='flex space-x-8'>
                <form className='w-full bg-white px-4 py-8 rounded-md md:w-8/12' action="">
                <div className='flex flex-col md:space-x-4 items-center md:flex-row'>
                    <div className="relative w-full mt-5">
                        <input value={personalInfo.title} onChange={(e)=>{setPersonalInfo({
                            ...personalInfo, title: e.target.value
                        })}} type="text" name="job title" placeholder="Job title" className="peer float-input" autoComplete="off" />
                        <label  className="float-label">
                            Job title
                        </label>
                    </div>
                    {/* <div className="flex items-center space-x-4 w-full mt-5">
                        <div className='flex bg-gray-100 justify-center h-[4rem] w-[4rem] 
                        border-2 rounded-lg border-dashed border-vert'>
                            <Image width={30} alt='user icon' src={user} />
                        </div>
                        <p className='font-semibold text-vert'>Upload Photo</p>
                       
                    </div> */}
                </div> 
                <div className='flex flex-col md:space-x-4 items-center md:flex-row'>
                    <div className="relative w-full mt-5">
                        <input onChange={(e)=>{setPersonalInfo({
                            ...personalInfo, firstName: e.target.value
                        })}}  type="text" value={personalInfo.firstName} name="first name" id="firstname" placeholder="first name" 
                        className="float-input peer" autoComplete="off" />
                        <label  className="float-label">
                            First name
                        </label>
                    </div>
                    <div className="relative w-full mt-5">
                        <input onChange={(e)=>{setPersonalInfo({
                            ...personalInfo, lastName: e.target.value
                        })}} type="text" name="Last name" value={personalInfo.lastName} id="Last name" placeholder="Last name" className="peer float-input" />

                        <label  className="float-label">Last name</label>
                    </div>
                </div>
                <div className='flex flex-col md:space-x-4 items-center md:flex-row'>
                    <div className="relative w-full mt-5">
                        <input onChange={(e)=>{setPersonalInfo({
                            ...personalInfo, email: e.target.value
                        })}} type="email" value={personalInfo.email} name="email" id="email" placeholder="email" 
                        className="float-input peer" autoComplete="off" />
                        <label  className="float-label">
                            Email Address
                        </label>
                    </div>
                    <div className="relative w-full mt-5">
                        <input value={personalInfo.phone} onChange={(e)=>{setPersonalInfo({
                            ...personalInfo, phone: Number(e.target.value)
                        })}} type="number" name="phone number" id="phone number" placeholder="phone number" className="peer float-input" />

                        <label  className="float-label">Phone number</label>
                    </div>
                </div>
                <div className="relative mt-5">
                    <input onChange={(e)=>{setPersonalInfo({
                            ...personalInfo, address: e.target.value
                        })}} type="text" value={personalInfo.address} name="address" id="address" placeholder="address" className="peer float-input" autoComplete="off" />
                    <label className="float-label">Address</label>
                </div>
                <div className='flex flex-col md:space-x-4 items-center md:flex-row'>
                    <div className="relative w-full mt-5">
                        <input onChange={(e)=>{setPersonalInfo({
                            ...personalInfo, linkedin: e.target.value
                        })}} type="text" value={personalInfo.linkedin} name="postal-code" id="postal-code" placeholder="postal-code" 
                        className="float-input peer" autoComplete="off" />
                        <label  className="float-label">
                            Linkedin
                        </label>
                    </div>
                    <div className="relative w-full mt-5">
                        <input onChange={(e)=>{setPersonalInfo({
                            ...personalInfo, website: e.target.value
                        })}} type="text" value={personalInfo.website} name="website" id="website" placeholder="website" className="peer float-input" />

                        <label  className="float-label">Website</label>
                    </div>
                </div>

                <div className='flex flex-col md:space-x-4 items-center md:flex-row'>
                    
                    <div className="relative w-full mt-5">
                        <input onChange={(e)=>{setPersonalInfo({
                            ...personalInfo, github: e.target.value
                        })}} type="text" value={personalInfo.github} name="github" id="github" placeholder="github" className="peer float-input" />

                        <label  className="float-label">Github</label>
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
            <div className="w-full my-8 md:w-8/12 flex flex-col-reverse gap-y-4 md:flex-row md:space-x-8">
        <Link href={`/template/${id}/user`}>
          <button disabled className="bg-transparent opacity-50 w-full border border-vert rounded-md font-semibold text-lg text-vert md:w-[14rem] h-14">
            Back
          </button>
        </Link>
        <Link href={`/template/${id}/experience`}>
          <button onClick={submitHandler} className="bg-vert rounded-md font-semibold text-lg text-white w-full md:w-[14rem] h-14">
            Save and Continue
          </button>
        </Link>
      </div>
        </div>
    )
}

export default PersonalInfo
