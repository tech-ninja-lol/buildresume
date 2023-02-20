import PreviewResume from "@/components/PreviewResume"
import Steps from "@/components/Steps"

const page = ({params}) => {
  const {tempId}=params
    return (
        <div>
          <Steps id={tempId} step1 step2 step3/>
          <PreviewResume/> 
        </div>
    )
}

export default page
