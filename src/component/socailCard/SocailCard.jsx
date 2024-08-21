import React from 'react'

const SocailCard = ({itemInfo}) => {
  return (
    <div className='socail_card'>
        <h1>{itemInfo.title}</h1>
        <div className="profile_info">
            <span>{itemInfo.followers}</span>
            <span>Followers</span>
        </div>
        <div className="button_group">
            <a href={itemInfo.profileLink}>Profile</a>
            <a href={itemInfo.followLink}>Follow</a>
        </div>
    </div>
  )
}

export default SocailCard