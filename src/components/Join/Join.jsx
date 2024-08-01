import React, { useRef } from 'react'
import "./Join.css"
import emailjs from '@emailjs/browser'

function Join() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7xcrq45', 'template_hjfkyfm', form.current, 'EDyrRK1xCH8sCfPae')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='join' id='join-us'>
        <div className='left-j'>
          <hr/>
            <div>
                <span className='stroke-text'>Ready to</span>
                <span style={{color: "white"}}> Level up</span>
            </div>
            <div>
                <span style={{color:"white"}}> your body</span>
                <span className='stroke-text'> with us?</span>
            </div>
        </div>

        <div className='right-j'>
          <form ref={form} className='email-container' onSubmit={sendEmail}>
            <input type='email' name='user_email' placeholder='Your Email Address' />
            <button className='btn btn-j'>Join Now</button>
          </form>
        </div>
    </div>
  )
}

export default Join
