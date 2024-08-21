import React from 'react'
import PortfolioCard from '../portfolioCard/PortfolioCard'

const PortfolioWrapper = () => {
    const portfolioDetails = [
        {
            id:1,
            title:"React js Blog Template",
            des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae, quaerat nulla a corporis quos non ipsam dolores officiis nam doloribus, vel nihil sed vero magni sapiente dolorem odio nobis modi? Tempora sequi itaque, commodi eius blanditiis voluptates quae optio beatae obcaecati officiis totam facere dolorem a unde nam nihil!",
            date:"12 july 2024",
            image:"./src/assets/image/portfolio/01.jpg"
        },
        {
            id:3,
            title:"React js blog Template",
            des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae, quaerat nulla a corporis quos non ipsam dolores officiis nam doloribus, vel nihil sed vero magni sapiente dolorem odio nobis modi? Tempora sequi itaque, commodi eius blanditiis voluptates quae optio beatae obcaecati officiis totam facere dolorem a unde nam nihil!",
            date:"15 july 2024",
            image:"./src/assets/image/portfolio/01.jpg"
        },
        {
            id:4,
            title:"React js E-commerce Template",
            des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae, quaerat nulla a corporis quos non ipsam dolores officiis nam doloribus, vel nihil sed vero magni sapiente dolorem odio nobis modi? Tempora sequi itaque, commodi eius blanditiis voluptates quae optio beatae obcaecati officiis totam facere dolorem a unde nam nihil!",
            date:"20 july 2024",
            image:"./src/assets/image/portfolio/01.jpg"
        },
        {
            id:5,
            title:"React js Blog Template",
            des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae, quaerat nulla a corporis quos non ipsam dolores officiis nam doloribus, vel nihil sed vero magni sapiente dolorem odio nobis modi? Tempora sequi itaque, commodi eius blanditiis voluptates quae optio beatae obcaecati officiis totam facere dolorem a unde nam nihil!",
            date:"01 july 2024",
            image:"./src/assets/image/portfolio/01.jpg"
        },
        {
            id:6,
            title:"React js portfolio Template",
            des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae, quaerat nulla a corporis quos non ipsam dolores officiis nam doloribus, vel nihil sed vero magni sapiente dolorem odio nobis modi? Tempora sequi itaque, commodi eius blanditiis voluptates quae optio beatae obcaecati officiis totam facere dolorem a unde nam nihil!",
            date:"01 july 2024",
            image:"./src/assets/image/portfolio/01.jpg"
        },
        {
            id:7,
            title:"React js Blog Template",
            des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae, quaerat nulla a corporis quos non ipsam dolores officiis nam doloribus, vel nihil sed vero magni sapiente dolorem odio nobis modi? Tempora sequi itaque, commodi eius blanditiis voluptates quae optio beatae obcaecati officiis totam facere dolorem a unde nam nihil!",
            date:"30 july 2024",
            image:"./src/assets/image/portfolio/01.jpg"
        }
        ,
        {
            id:8,
            title:"React js Blog Template",
            des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae, quaerat nulla a corporis quos non ipsam dolores officiis nam doloribus, vel nihil sed vero magni sapiente dolorem odio nobis modi? Tempora sequi itaque, commodi eius blanditiis voluptates quae optio beatae obcaecati officiis totam facere dolorem a unde nam nihil!",
            date:"30 july 2024",
            image:"./src/assets/image/portfolio/01.jpg"
        }
        ,
        {
            id:9,
            title:"React js Blog Template",
            des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae, quaerat nulla a corporis quos non ipsam dolores officiis nam doloribus, vel nihil sed vero magni sapiente dolorem odio nobis modi? Tempora sequi itaque, commodi eius blanditiis voluptates quae optio beatae obcaecati officiis totam facere dolorem a unde nam nihil!",
            date:"30 july 2024",
            image:"./src/assets/image/portfolio/01.jpg"
        }
    ]
  return (
    <div className='portfolio_container'>
        {
            portfolioDetails.map((item)=>(
                <PortfolioCard key={item.id} item={item} />
            ))
        }
        
    </div>
  )
}

export default PortfolioWrapper