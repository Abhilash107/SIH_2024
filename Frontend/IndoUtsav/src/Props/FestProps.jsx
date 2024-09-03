import React from 'react'

export function FestProps({imgsrc , name}) {
  return (
    <div className="relative h-[130px] w-[180px] rounded-md ">
  <img
    src={imgsrc}
    alt={name}
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-md font-semibold text-white">{name}</h1>
    <button className="mt-2 inline-flex cursor-pointer items-center text-[12px] text-white ">
      See More →
    </button>
  </div>
</div>
  )
}
