import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import First from './First'
const Second = () => {
  return (
    <div>
      <Navbar />
      <First img="https://cdn1.epicgames.com/spt-assets/419bd4760ed0465ba7f365f56f47d163/shrapnel-19nie.jpg?h=270&quality=medium&resize=1&w=480" price="6,000" data="20 jul, satuday"  />
    </div>
  )
}

export default Second
