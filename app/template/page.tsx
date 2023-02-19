import Templates from "@/components/Templates";
import WhatCV from "@/components/WhatCV";
const page = () => {
    return (
        <div>
        <h2 className='pt-24 text-3xl text-center font-bold text-blue-700'>Free CV templates ready
        edit and download in pdf
        </h2>
        <br/>
        <div className='w-10/12 mx-auto'>
        <p className='text-md md:text-lg mb-10'>If you are looking for a job and want to create a CV online, on this page you 
            will find many free CV templates that you can download for free.</p>
            </div> 
        <Templates/>
        <WhatCV/>
      </div>
    )
}

export default page
