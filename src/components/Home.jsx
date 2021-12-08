import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-card'>
      <h4 className='home-title'>Bonjour et bienvenue sur mon Portfolio !</h4>
      <p className='home-text'>Je suis Thomas FRANCOIS, Développeur Web FullStack</p>
      <p className='home-text'>Mon but : Apprendre un maximum de choses, accumuler de l'expérience.</p>
      <p className='home-text'>Pour en savoir plus, vous pouvez consulter mon profil ainsi que les projets sur lesquels j'ai travaillé.</p>
      <Link to="contact"><div className='home-button'><p>Contactez-moi !</p></div></Link>
      </div>
    </div>
  )
}

export default Home;