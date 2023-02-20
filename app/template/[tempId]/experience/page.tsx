import Experience from "@/components/Experience"
import Steps from "@/components/Steps"

const page = ({params}) => {
    return (
        <div className='bg-gray-100'>
            <Steps id={tempId} step1 step2/>
            <Experience id={tempId}/>           
        </div>
    )
}

export default page
