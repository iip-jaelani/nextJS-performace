import React, { useState } from 'react'
import Image from 'next/image'

function ImageComponent(props) {
  return (
   <Image  placeholder="blur"  {...props} />
  )
}

export default ImageComponent
