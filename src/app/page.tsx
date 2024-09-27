import React from 'react'

import Link from 'next/link';

const page = () => {
  return (
   <>
    
    <h1>Nav bar</h1>
    <Link href="/home">
    <button >Home</button>
    </Link>
    <Link href="/about">
    <button >About</button>
    </Link>
    <Link href={"/contact"}>
    <button>Contact</button>
     </Link>
    
   
  <br />
  <div>
   <h2>
      This is a Home page
     </h2></div>
  </> 
  )
}

export default page