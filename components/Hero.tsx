import Link from 'next/link'
import CV1 from '../assets/CV1.png'
import Image from 'next/image'
const Hero = () => {
    return (
        <section className='w-10/12 relative mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div className='w-full py-[10rem] md:py-[7rem] items-center md:items-start md:w-1/2  flex flex-col'>
                <h1 className='text-[2.3rem] text-center mb-2 md:text-left md:text-[4rem] md:leading-snug font-bold'>
                    Free CV maker<br/>Create your CV Online</h1>
                <p className='text-center md:text-left my-2 font-semibold text-gray-700 text-lg'>Create your cv for free in just 5 minutes</p>
                <Link href='/template'>
                <button className='bg-blue-500 my-2 text-white rounded-lg w-44 mx-auto md:mx-0 py-2'>Create your CV now</button>
                </Link>
                <p className='text-center md:text-left'>No registration required</p>
            </div>
            <div className='hidden justify-center md:flex w-1/2'>
                <Image
                alt='resume sample1'
                width={300}
                src={CV1}
                />                
            </div>
        </section>
    )
}

export default Hero
