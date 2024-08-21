import React from 'react'

const ServicesCard = ({info}) => {
  return (
    <div className='servicesCard'>
        <h1>{info.title}</h1>
        <span>{info.subTitle}</span>
        <div className="package_wrapper">
           <ul>
            {
              info.packageItem.map((item)=>(
                <li key={item.id}>{item.title}</li>
              ))
            }
           </ul>
        </div>
        <div className="priceing">
            <span>{info.price}</span>
        </div>
        <div className="button_group">
            <button>Buy Now</button>
        </div>
    </div>
  )
}

export default ServicesCard