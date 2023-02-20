import Image from 'next/image'
import user from '../assets/user-1-svgrepo-com.svg'
import cvhero from '../assets/cvhero.svg'
import Link from 'next/link'
interface Prop {
    id:number
}
const PreviewResume = ({id}:Prop) => {
    return (
       <div className='w-10/12 pb-8 mx-auto'>
           <div className='bg-white px-4 py-8 rounded-md mb-2'>
               <h2 className='text-2xl font-semibold'>Preview</h2>
           </div>
            <div className='flex md:space-x-8'>
                <div className='hidden md:block bg-white px-4 py-8 rounded-md md:w-8/12'>

                <div className='w-[2480px] h-[3508px]'>

                </div>
                </div>
                <div className='w-full md:w-4/12 md:flex flex-col items-center bg-white px-4 py-4'>
                    
                    <h3 className='text-xl font-semibold my-2 text-center'>Your CV is ready!</h3>
                    <p className='text-black/50 text-md font-medium text-center'>Download it or customize it more</p>
                    <button className='text-white text-lg bg-blue-500 font-medium my-4 py-3 w-full rounded-md'>Download</button>
                    <button className='text-blue-500 text-lg bg-transparent border border-blue-500 font-medium my-1 py-3 w-full rounded-md'>Print</button>
                </div>
            </div>
            <div className="w-full my-8 md:w-8/12 flex flex-col-reverse gap-y-4 md:flex-row md:space-x-8">
        <Link href={`/template/${id}/experience`}>
          <button className="bg-transparent w-full border border-blue-500 rounded-md font-semibold text-lg text-blue-500 md:w-[14rem] h-14">
            Back
          </button>
        </Link>
        <Link href={`/template/${id}/preview`}>
          <button disabled className="bg-blue-500/30 rounded-md font-semibold text-lg text-white w-full md:w-[14rem] h-14">
            Save and Continue
          </button>
        </Link>
      </div>
        </div>
    )
}

export default PreviewResume
