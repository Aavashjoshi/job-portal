import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
        <div>
          <h1 className='text-2xl font-bold'>Carrer<span className='tex-[#F83002]'>Connect</span>
          </h1>
        </div>
        <div className='flex items-center gap-2'>
          <ul className='flex font-medium items-center gap-5'>

            <li>Home</li>
            <li>Jobs</li>
            <li>Aavash</li>
            <li>Browse</li>
          </ul>
          <Popover>

            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                </Avatar>
            </PopoverTrigger>
            <PopoverContent>
              <h1>Hello</h1>

            </PopoverContent>
          </Popover>

        </div>
      </div>
    </div>
  )
}
export default Navbar;
