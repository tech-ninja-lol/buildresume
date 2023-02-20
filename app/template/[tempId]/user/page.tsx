import PersonalInfo from "@/components/PersonalInfo"
import Steps from "@/components/Steps"

const page = ({params}) => {
    const {tempId}= params
    return (
        <div className='bg-gray-100'>
            <Steps id={tempId} step1/>
            <PersonalInfo id={tempId}/>
        </div>
    )
}

export default page
