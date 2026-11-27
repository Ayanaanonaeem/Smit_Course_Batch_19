import React from 'react'

const page =async ({params}) => {
    const { city } = await params;
  return (
    <div >{city} is the best city</div>
  )
}

export default page