import { En } from '@/enums/En'
import React,{memo} from 'react'

const Footer = () => {
  return (
    <>
    {/* <hr className="my-6 border-blueGray-300"> */}
    <div className="flex flex-wrap items-center md:justify-between justify-center bg-slate-700">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="py-1">
          <h2 className='text-white tracking-wider over:-translate-y-1 hover:scale-110 duration-300 font-normal text-sm cursor-pointer'>{En.footerText}</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default memo(Footer);