"use client"
import Link from 'next/link'
import {useState} from 'react'
const Header = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  return (
    <>
      <nav className="w-10/12 z-[100] h-[60px] absolute inset-x-0 py-2 mx-auto">
        <div className="flex justify-between items-center">
            <Link href='/'>
                <h2 className='text-4xl font-bold'>Resume<span className='text-blue-500'>A</span></h2>
            </Link>
            <ul className='hidden text-lg md:flex space-x-8'>
                <Link href='/'>
                <li>Free CV maker</li>
                </Link>
                <Link href='/template'>
                <li>Free CV template</li>
                </Link>
                <li>Resume</li>
            </ul>
            <div onClick={()=>{
                setToggleMenu(!toggleMenu)
            }} className='block cursor-pointer md:hidden'>
                <div className={`w-8 duration-500 h-1 ${toggleMenu && 'rotate-45 translate-y-2'} bg-blue-500`}/>
                <div className={`w-8 h-1 duration-500 ${toggleMenu && 'translate-x-60'}  translate-y-[6px] bg-blue-500`}/>
                <div className={`w-8 h-1 duration-500 ${toggleMenu && '-rotate-45 translate-y-0'} translate-y-[12px] bg-blue-500`}/>
            </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {toggleMenu && (
          <ul className='w-full pt-[60px] block md:hidden'>
          <li className='border-y bg-gray-100 py-3 font-semibold text-md border-black'>
              <div className='flex justify-between w-10/12 mx-auto'>
                  <div>Free CV maker</div>
                  <div>Arr</div>
              </div>
          </li>
          <li className='bg-gray-100 py-3 font-semibold text-md'>
              <div className='flex justify-between w-10/12 mx-auto'>
                  <div>Free CV template</div>
                  <div>Arr</div>
              </div>
          </li>
          <li className='border-y bg-gray-100 py-3 font-semibold text-md border-black'>
              <div className='flex justify-between w-10/12 mx-auto'>
                  <div>Resume</div>
                  <div>Arr</div>
              </div>
          </li>
         
        </ul>
      )}
    </>
  );
};

export default Header;
