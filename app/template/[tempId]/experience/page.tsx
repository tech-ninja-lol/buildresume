import Experience from "@/components/Experience"
import Steps from "@/components/Steps"

const page = () => {
    return (
        <div className='bg-gray-100'>
            <Steps step1 step2/>
            <Experience/>           
        </div>
    )
}

export default page
