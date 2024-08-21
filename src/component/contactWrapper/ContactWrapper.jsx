import React from 'react'
import ContactForm from '../contactForm/ContactForm'
import SocailContact from '../socailContact/SocailContact'

const ContactWrapper = () => {
  return (
    <div className='contact_wrapper'>
        <SocailContact/>
        <ContactForm/>
    </div>
  )
}

export default ContactWrapper