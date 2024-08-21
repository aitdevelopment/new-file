import React from 'react'

const ContactForm = () => {
  return (
    <div className='contact_form'>
      <h1 className='socail_heading'>Message Me</h1>
      <div className="form_wrapper">
            <div className="input_group">
              <input type="text" name='fname' placeholder='First name'/>
              <input type="text" name='lname' placeholder='Last Name'/>
            </div>
            <div className="input_group">
              <input type="email" name="email" id="email" placeholder='email'/>
            </div>
            <div className="input_group">
              <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>
            <div className="button_group">
              <button>Reset</button>
              <button>Send Me</button>
            </div>
      </div>
    </div>
  )
}

export default ContactForm