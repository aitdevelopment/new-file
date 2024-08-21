import React from 'react'
import SocailCard from '../socailCard/SocailCard';

const SocailContact = () => {

  const socailInfo = [
    {
      id:1,
      title:"Facebook",
      followers:"120k",
      followLink:"https://facebook.com",
      profileLink:"https://facebook.com"
    },
    {
      id:2,
      title:"Instagrams",
      followers:"120k",
      followLink:"https://instagram.com",
      profileLink:"https://instagrams.com"
    },
    {
      id:3,
      title:"Twitter",
      followers:"120k",
      followLink:"https://twitter.com",
      profileLink:"https://twitter.com"
    },
    {
      id:4,
      title:"Linkedin",
      followers:"120k",
      followLink:"https://twitter.com",
      profileLink:"https://twitter.com"
    },
    {
      id:5,
      title:"Pinterest",
      followers:"120k",
      followLink:"https://pinterest.com",
      profileLink:"https://pinterest.com"
    }
  ]
  return (
    <div className='socail_contact'>
        <h4 className='socail_heading'>Socail Contacts</h4>
        <div className="card_wrapper">
          {
            socailInfo.map((itemInfo)=>(
              <SocailCard itemInfo={itemInfo} key={itemInfo.id}/>
            ))
          }

        </div>
        
    </div>
  )
}

export default SocailContact;