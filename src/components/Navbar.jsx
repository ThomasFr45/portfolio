import { AiFillHome, AiFillContacts } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs';
import { GoBriefcase } from 'react-icons/go';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return <nav>
    <ul>
      <li className='list'>
        <Link to="/">
          <span className='icon'>
            <AiFillHome />
          </span>
          <span className='text'>
            Accueil
          </span>
        </Link>
      </li>
      <li className='list'>
        <Link to="about">
        <span className='icon'>
            <BsFillPersonFill />
          </span>
          <span className='text'>
            Détails
          </span>
        </Link>
      </li>
      <li className='list'>
        <Link to="projects">
        <span className='icon'>
            <GoBriefcase />
          </span>
          <span className='text'>
            Projets
          </span>
        </Link>
      </li>
      <li className='list'>
        <Link to="contact">
        <span className='icon'>
            <AiFillContacts />
          </span>
          <span className='text'>
            Contact
          </span>
        </Link>
      </li>
    </ul>
  </nav>;
}

export default Navbar;