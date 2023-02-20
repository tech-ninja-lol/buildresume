import Link from 'next/link'

interface Prop {
    step1?:boolean;
    step2?: boolean;
    step3?: boolean;
    id: number
}
const Steps = ({step1, step2, step3, id}:Prop) => {
    return (
        <div className='pt-20 pb-8'>
            <ul className='hidden md:flex w-1/2 mx-auto justify-between mb-10 border-b border-gray-300'>
                {step1 ? (
                    <Link href={`/template/${id}/user`}>
                        <li className='py-2 text-black border-b border-black font-semibold'>
                        <h3>
                            Personal Details
                        </h3>
                    </li>
                    </Link>
                ): (
                    <li className='py-2 text-black/30 font-semibold'>
                    <h3>
                        Personal Details
                    </h3>
                </li>
                )}
                {step2 ? (
                    <Link replace href={`/template/${id}/experience`}>
                        <li className='cursor-pointer py-2 text-black border-b border-black font-semibold'>
                        <h3>
                        Experience
                        </h3>
                    </li>
                    </Link>
                ): (
                    <li className='py-2 text-black/30 font-semibold'>
                    <h3>
                        Experience
                    </h3>
                </li>
                )}
                {step3 ? (
                    <Link href={`/template/${id}/preview`}>
                        <li className='cursor-pointer py-2 text-black border-b border-black font-semibold'>
                        <h3>
                        Experience
                        </h3>
                    </li>
                    </Link>
                ): (
                    <li className='py-2 text-black/30 font-semibold'>
                    <h3>
                        Preview Resume
                    </h3>
                </li>
                )}
                
            </ul>
        </div>
    )
}

export default Steps
