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
                <Link  href='/template'>
                <li id='template' className='target:text-blue-500 focus:text-blue-500'>Free CV template</li>
                </Link>
                <li>Resume</li>
            </ul>
            <div onClick={()=>{
                setToggleMenu(!toggleMenu)
            }} className={`flex flex-col justify-center gap-y-[6px] ${toggleMenu && '-space-y-[10px]'} items-center h-12 w-12 rounded-md border border-blue-400 cursor-pointer md:hidden`}>
                <div className={`w-8 duration-500 h-1 ${toggleMenu && '-rotate-45 '} bg-blue-500`}/>
                <div className={`w-8 h-1 duration-500 ${toggleMenu && 'w-0'} bg-blue-500`}/>
                <div className={`w-8 h-1 duration-500 ${toggleMenu && 'rotate-45'} bg-blue-500`}/>
            </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {toggleMenu && (
          <ul className='w-full pt-[60px] block md:hidden'>
          <Link href='/'>
          <li className='border-y bg-gray-100 py-3 font-semibold text-md border-black'>
              <div className='flex justify-between w-10/12 mx-auto'>
                  <div>Free CV maker</div>
                  <div>Arr</div>
              </div>
          </li>
          </Link>
          <Link href='/template'>
          <li className='bg-gray-100 py-3 font-semibold text-md'>
              <div className='flex justify-between w-10/12 mx-auto'>
                  <div>Free CV template</div>
                  <div>Arr</div>
              </div>
          </li>
          </Link>
          <Link href='/'>
          <li className='border-y bg-gray-100 py-3 font-semibold text-md border-black'>
              <div className='flex justify-between w-10/12 mx-auto'>
                  <div>Resume</div>
                  <div>Arr</div>
              </div>
          </li>
          </Link>
         
        </ul>
      )}
    </>
  );
};

export default Header;
