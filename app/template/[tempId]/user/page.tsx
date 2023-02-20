import PersonalInfo from "@/components/PersonalInfo"
import Steps from "@/components/Steps"
import { ParsedUrlQuery } from 'querystring'

interface Slug {
    params: any
}
const page = ({params}:Slug) => {
    const {tempId}= params
    return (
        <div className='bg-gray-100'>
            <Steps id={tempId} step1/>
            <PersonalInfo id={tempId}/>
        </div>
    )
}

export default page
