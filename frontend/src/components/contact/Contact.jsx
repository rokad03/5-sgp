import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.458099229571!2d72.81789177483877!3d22.59936243198975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50c43cdea6c7%3A0x5074fe9e0c1c8bd!2sCharotar%20University%20of%20Science%20and%20Technology%20(CHARUSAT)!5e0!3m2!1sen!2sin!4v1694155404994!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
  // const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Madhuvan Park steet No 2, Mavdi,Rajkot,Gujarat,India</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@freetube.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 9409960201</p>
              </div>
            </div>

            <form method="POST" action="https://formsubmit.co/nishitvrokad@gmail.com">
              <div className='flexSB'>
                <input type='text' placeholder='Name' name="name"/>
                <input type='email' placeholder='Email' name="email"/>
              </div>
              <input type='text' placeholder='Subject' name="subject"/>
              <textarea cols='30' rows='10' name="message">
                
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>
            <a href="https://www.instagram.com/nishit_patel_078/"><button >Instagram</button> </a>
            <a href="https://www.instagram.com/nishit_patel_078/"><button >Whatsapp</button> </a>
            <a href="https://www.instagram.com/nishit_patel_078/"><button >FaceBook</button> </a>
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
