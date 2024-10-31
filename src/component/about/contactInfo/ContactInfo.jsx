import React from 'react'
import { FaPhone  } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="about_info">
        <div className="circle one"></div>
        <div className="circle two"></div>
    <h4>Jhon deo</h4>
    <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Officia, iusto!</p>
    <div className="contact_info">
      <a href="#" className="contact_info_box">
            <MdOutlineEmail/>
            <span>jhondeo@gmail.com</span>
      </a>
      <a href="#" className="contact_info_box">
            <FaPhone />
            <span>+6359852452</span>
      </a>
    </div>

      <h1> This is new  added file</h1>
</div>
  )
}

export default ContactInfo
