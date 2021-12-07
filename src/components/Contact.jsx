import "./Contact.css";
import { SiDiscord, SiGithub, SiLinkedin, SiGmail, SiTwitter } from 'react-icons/si';
const Contact = () => {
  return (
    <div className='contact-form'>
      <div className='contact-ligne'>
        <label htmlFor="">Votre adresse mail</label>
        <input className='contact-input' type="text" />
      </div>
      <div className='contact-ligne'>
        <label htmlFor="">Objet</label>
        <input className='contact-input' type="email" />
      </div>
      <div className='contact-ligne'>
        <label htmlFor="">Message</label>
        <textarea className='contact-text' name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div className='contact-button'>Envoyer</div>
        <div className='contact-icons'>
        <div className='contact-icon'>
          <a href="https://github.com/ThomasFr45" target='_blank' rel="noreferrer"><SiGithub /></a>
          </div>
        <div className='contact-icon'>
        <a href="https://www.linkedin.com/in/thomas-fran%C3%A7ois-bba91a221/" rel="noreferrer" target='_blank'><SiLinkedin /></a>
        </div>
        <div className='contact-icon'>
        <a href="discord.me/contact-me" target='_blank'><SiDiscord /></a>
        </div>
        <div className='contact-icon'>
        <a href="mailto:thomasfran1935@gmail.com"><SiGmail /></a>
        </div>
        <div className='contact-icon'>
        <a href="https://twitter.com/Thomas28639313" target='_blank' rel="noreferrer"><SiTwitter /></a>
        </div>
        </div>
    </div>
  );
};

export default Contact;
