import React from 'react'

import Typography from '../Typography'

export default function Logo() {
  return (
    <div>
      <div className="px-8 pt-16 relative w-fit">
        <div className="w-0 h-0 -rotate-[4deg] border-[20rem] border-white border-b-0 border-l-transparent border-r-transparent border-b-transparent after:border-[19.65rem] after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-black after:border-b-0 after:absolute after:top-[-19.85rem] after:left-[-19.65rem]" />
        <div className="absolute top-[2rem] left-[2rem] w-0 h-0 -rotate-[4deg] border-[20rem] border-[#3FFFFF] border-b-0 border-l-transparent border-r-transparent border-b-transparent after:border-[19.65rem] after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-black after:border-b-0 after:absolute after:top-[-19.85rem] after:left-[-19.65rem]" />
        <Typography
          isNeon
          neonLevel="4"
          component="h1"
          className="absolute mt-8 text-[8rem] font-[Yellowtail] top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 before:absolute before:top-0 before:left-0 whitespace-nowrap"
        >
          Dylan Claywell
        </Typography>
      </div>
    </div>
  )
}
