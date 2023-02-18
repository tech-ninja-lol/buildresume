import PersonalInfo from "@/components/PersonalInfo"
import Steps from "@/components/Steps"

const page = () => {
    return (
        <div className='bg-gray-100'>
            <Steps step1/>
            <PersonalInfo/>
        </div>
    )
}

export default page
