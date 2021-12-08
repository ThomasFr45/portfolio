import "./Contact.css";
import emailjs from 'emailjs-com';
import { SiGithub, SiLinkedin, SiGmail, SiTwitter } from 'react-icons/si';
const Contact = () => {
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_0nkucvi',
        'template_u0brbwl',
        e.target,
        'user_2q5ee1RYRTjglVbkWn7xs'
      );
      alert('Message envoyé !');
      e.target.reset();
    };

  return (
    <div className='contact-form'>
      <form onSubmit={sendEmail}>
      <div className='contact-ligne'>
        <label htmlFor="">Votre adresse mail</label>
        <input className='contact-input' type="text" required/>
      </div>
      <div className='contact-ligne'>
        <label htmlFor="">Objet</label>
        <input className='contact-input' type="email" required/>
      </div>
      <div className='contact-ligne'>
        <label htmlFor="">Message</label>
        <textarea className='contact-text' name="" id="" cols="30" rows="10" required></textarea>
      </div>
      <div>
        <input type="submit" className='contact-button' value="Envoyer" required/>
      </div>
        <div className='contact-icons'>
        <div className='contact-icon'>
          <a href="https://github.com/ThomasFr45" target='_blank' rel="noreferrer"><SiGithub /></a>
          </div>
        <div className='contact-icon'>
        <a href="https://www.linkedin.com/in/thomas-fran%C3%A7ois-bba91a221/" rel="noreferrer" target='_blank'><SiLinkedin /></a>
        </div>
        <div className='contact-icon'>
        <a href="mailto:thomasfran1935@gmail.com"><SiGmail /></a>
        </div>
        <div className='contact-icon'>
        <a href="https://twitter.com/Thomas28639313" target='_blank' rel="noreferrer"><SiTwitter /></a>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
