import React from "react";

const Profile = ({name, imgUrl, about}) => {
    return (
        <div className='profile'>
          <p className='name'>{name}</p>
          <img className='profile-img' src={imgUrl} alt='' />
          <p className='about'>{about}</p>
        </div>
    )
}

export default Profile;