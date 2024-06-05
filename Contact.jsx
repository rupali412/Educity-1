import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import loc_icon from '../../assets/location-icon.png';
import arrow from '../../assets/white-arrow.png';

export default function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e89d79a9-1fe9-47e3-a724-0391ca3d651b");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res)=>res.json());

    if (res.success) {
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact' id='contact'>

        <div className="concal">
            <h3>Send us a message <img src={msg_icon} /></h3>
            <p>Feel free to reach out through contact form or find our contact information bellow.</p>
            <ul>
                <li> <img src={mail_icon} />contact@greatl.dev</li>
                <li> <img src={phone_icon} />+1 123-456-7890</li>
                <li> <img src={loc_icon} />77 Massachusetts Ave<br></br> Ma 12340, USA</li>
            </ul>
        </div>
        <div className="concal">
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label htmlFor="number">Phone No</label>
                <input type="tel" name='phone' placeholder='Enter your phone no' required/>
                <label htmlFor="msg">Write your message here!</label>
                <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn darkbtn'>Submit Now <img src={arrow} /></button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}
