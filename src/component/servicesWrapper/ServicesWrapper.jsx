import React from 'react'
import ServicesCard from '../servicesCard/ServicesCard'

const ServicesWrapper = () => {
    const servicesInfo = [
        {
            id:1,
            title:"Web Design",
            subTitle:"Web Design Services",
            packageItem:[
                {
                    id:1,
                    title:"1 page Design"
                },
                {
                    id:2,
                    title:"Full Responsive Design"
                }
                ,
                {
                    id:3,
                    title:"Clear Code Design"
                },
                {
                    id:4,
                    title:"24/7 Support"
                }
            ],
            price:"$200",
        },
        {
            id:2,
            title:"Portfolio Design",
            subTitle:"Portfolio Design Services",
            packageItem:[
                {
                    id:1,
                    title:"5 page Design"
                },
                {
                    id:2,
                    title:"Full Responsive Design"
                }
                ,
                {
                    id:3,
                    title:"Clear Code Design"
                },
                {
                    id:4,
                    title:"24/7 Support"
                }
            ],
            price:"$600",
        },
        {
            id:3,
            title:"Business Site Design",
            subTitle:"Web Design Services",
            packageItem:[
                {
                    id:1,
                    title:"7 page Design"
                },
                {
                    id:2,
                    title:"Full Responsive Design"
                }
                ,
                {
                    id:3,
                    title:"Clear Code Design"
                },
                {
                    id:4,
                    title:"24/7 Support"
                }
            ],
            price:"$900",
        },
        {
            id:4,
            title:"E-commerce Design",
            subTitle:"Web Design Services",
            packageItem:[
                {
                    id:1,
                    title:"15 page Design"
                },
                {
                    id:2,
                    title:"Full Responsive Design"
                }
                ,
                {
                    id:3,
                    title:"Clear Code Design"
                },
                {
                    id:4,
                    title:"24/7 Support"
                }
            ],
            price:"$1200",
        },
        {
            id:5,
            title:"Web Redesign",
            subTitle:"Web Design Services",
            packageItem:[
                {
                    id:1,
                    title:"1 page Design"
                },
                {
                    id:2,
                    title:"Full Responsive Design"
                }
                ,
                {
                    id:3,
                    title:"Clear Code Design"
                },
                {
                    id:4,
                    title:"24/7 Support"
                }
            ],
            price:"$100",
        },
        {
            id:6,
            title:"Template Design",
            subTitle:"Web Design Services",
            packageItem:[
                {
                    id:1,
                    title:"5 page Design"
                },
                {
                    id:2,
                    title:"Full Responsive Design"
                }
                ,
                {
                    id:3,
                    title:"Clear Code Design"
                },
                {
                    id:4,
                    title:"24/7 Support"
                }
            ],
            price:"$600",
        },
        {
            id:7,
            title:"React App Design",
            subTitle:"Web Design Services",
            packageItem:[
                {
                    id:1,
                    title:"1 page Design"
                },
                {
                    id:2,
                    title:"Full Responsive Design"
                }
                ,
                {
                    id:3,
                    title:"Clear Code Design"
                },
                {
                    id:4,
                    title:"24/7 Support"
                }
            ],
            price:"$200",
        },
        {
            id:8,
            title:"Web Development",
            subTitle:"Web Development Services",
            packageItem:[
                {
                    id:1,
                    title:"with Dashboard"
                },
                {
                    id:2,
                    title:"Full Responsive Design"
                }
                ,
                {
                    id:3,
                    title:"Clear Code Design"
                },
                {
                    id:4,
                    title:"24/7 Support"
                }
            ],
            price:"$2000",
        },

        
    ]
  return (
    <div className='servicesWrapper'>
        <div className="circleone"></div>
        <div className="circletwo"></div>
        {
            servicesInfo.map((item)=>(
                <ServicesCard key={item.id} info={item}/>
            ))
        }
    </div>
  )
}

export default ServicesWrapper