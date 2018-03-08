import React from 'react'
import { withRouteData } from 'react-static'
//
import logoImg from '../logo.png'

// const InformationComponent = ({ data }) => {

// }

export default withRouteData(({ information }) => {
  console.log(information)
  return (
    <div>
      <img src={information.image} alt='profile image' />
      <h1 style={{ textAlign: 'center' }}>{information.fullname} </h1>
    </div>
  )
})
