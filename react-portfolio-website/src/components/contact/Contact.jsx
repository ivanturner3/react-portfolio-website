/**
 * Contact Component - Contact Form and Information
 * 
 * Provides multiple ways for visitors to get in touch:
 * - Email contact form with EmailJS integration
 * - Direct contact options (email, phone, LinkedIn)
 * 
 * Features:
 * - Functional email form using EmailJS service
 * - Form validation (required fields)
 * - Loading state during submission
 * - Success/error feedback messages
 * - Auto-clearing success message after 5 seconds
 * - Contact cards with direct action links
 * - Responsive two-column layout (form + contact options)
 * 
 * EmailJS Integration:
 * - Service ID: service_o9o48mh
 * - Template ID: template_as72izh
 * - Public Key: AVYyjkInKhv2oo4lF
 * 
 * Form Fields:
 * - Name (required)
 * - Email (required)
 * - Message (required, textarea)
 */

import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { FaLinkedin } from "react-icons/fa"
import {BsWhatsapp} from 'react-icons/bs'
import { useRef, useState } from 'react'
import emailJS from 'emailjs-com'

const Contact = () => {
  // Reference to form element for EmailJS
  const form = useRef();
  
  // Loading state for form submission
  const [isLoading, setIsLoading] = useState(false);
  
  // Message state for success/error feedback
  const [message, setMessage] = useState({ type: '', text: '' });

  /**
   * Handle form submission
   * Sends email via EmailJS and provides user feedback
   */
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    // Send email using EmailJS
    emailJS.sendForm('service_o9o48mh', 'template_as72izh', form.current, 'AVYyjkInKhv2oo4lF')
      .then(() => {
        // Success: show message and reset form
        setMessage({ type: 'success', text: 'Message sent successfully!' });
        e.target.reset();
        setIsLoading(false);
        // Clear success message after 5 seconds
        setTimeout(() => setMessage({ type: '', text: '' }), 5000);
      })
      .catch((error) => {
        // Error: show error message
        setMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
        setIsLoading(false);
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <section id='contact'>
      <h5>Don't be shy!</h5>
      <h2>Contact Me</h2>

      <div className="contact__wrapper">
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-row">
            <input type="text" name='name' placeholder='Your Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
          </div>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <div className="contact__form-actions">
            {/* Submit button with loading state */}
            <button type='submit' className='btn btn-primary' disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            {/* Success/error message display */}
            {message.text && (
              <div className={`contact__message contact__message--${message.type}`}>
                {message.text}
              </div>
            )}
          </div>
        </form>
        
        {/* Direct Contact Options */}
        <div className="contact__options">
          {/* Email contact card */}
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5><a href="mailto:ivanturneriii@gmail.com" target="_blank" rel="noreferrer noopener">ivanturneriii@gmail.com</a></h5>
            <a href="mailto:ivanturneriii@gmail.com" target="_blank" rel="noreferrer noopener">Send me an email</a>
          </article>
          
          {/* Phone contact card */}
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5><a href="tel:3025283783" target="_blank" rel="noreferrer noopener">302-528-3783</a></h5>
            <a href="tel:3025283783" target="_blank" rel="noreferrer noopener">Give me a call</a>
          </article>
          
          {/* LinkedIn contact card */}
          <article className="contact__option">
            <FaLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5><a href="https://linkedin.com/in/ivanturner" target="_blank" rel="noreferrer noopener">Ivan Turner</a></h5>
            <a href="https://linkedin.com/in/ivanturner" target="_blank" rel="noreferrer noopener">Connect with me</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact