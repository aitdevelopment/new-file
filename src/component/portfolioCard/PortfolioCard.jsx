import React from 'react'

const PortfolioCard = ({item}) => {
    console.log(item)
    const seemore = false;
  return (
         <div className='portfolioCard'>
       <div className="image_box">
            <img src={item.image} alt="" />
       </div>
       <div className="portfolio_info">
            <h1>{item.title}</h1>
           <button className='seemore_btn'>See More</button>
       </div>
       <div className="portfolio_card_footer">
            <span>{item.date}</span>
            <a href="#">View Details</a>
       </div>
    </div>
  )
}

export default PortfolioCard