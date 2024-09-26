import React from "react";

const Profile = ({name}) => {
    return (
        <div className='profile'>
          <p className='name'>{name}</p>
          <img className='profile-img' src='https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80' alt='' />
          <p className='about'>I am a developer</p>
        </div>
    )
}

export default Profile;