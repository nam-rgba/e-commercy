import logo from '../assets/logo.png'

import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

export default function Header() {
  return (
    <div className="h-24 w-full flex flex-row items-center justify-start bg-transparent">
        <div className="h-11 w-fit flex items-center justify-center m-1" >
            <img src={logo} className='h-full max-h-full object-cover' />
        </div>
        <div className="w-5/12 h-full flex flex-row items-center m-1 ">
            <div className="h-10 w-full flex flex-row items-center border-solid border border-border_color rounded ">

            </div>
        </div>
        <div className='flex flex-row text-sm h-full items-center w-fit m-1'>
            <div className='text-gray_text p-1'>
                <CiLocationOn />
            </div>
            <div className='text-border_color '>
                Your location
            </div>
            <div className='text-gray_text p-1'>
                <FaAngleDown/>
            </div>
        </div>
    </div>
  )
}
