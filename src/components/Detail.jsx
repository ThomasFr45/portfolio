import './Detail.css'
import CV from '../CV.pdf'
const Detail = () => {
  return (
    <div className='profil-card'>
      <div className='profil-infos'>
        <img className='profil-img' src="https://i.imgur.com/KYSmwKf.png" alt="" />
        <div>
          <p>FRANCOIS Thomas</p>
          <p>Développeur Web FullStack</p>
          <p>Motivé, Autonome, Organisé, Ouvert d'esprit, ...</p>
        </div>
      </div>
      <div className='profil-levels'>
        <div className='level'>
          <h3>HTML</h3><span className='bar'><span className='html'></span></span>
        </div>
        <div className='level'>
          <h3>CSS</h3><span className='bar'><span className='css'></span></span>
        </div>
        <div className='level'>
          <h3>JavaScript</h3><span className='bar'><span className='js'></span></span>
        </div>
        <div className='level'>
          <h3>React</h3><span className='bar'><span className='react'></span></span>
        </div>
        <div className='level'>
          <h3>Express</h3><span className='bar'><span className='express'></span></span>
        </div>
        <div className='level'>
          <h3>MySql</h3><span className='bar'><span className='mysql'></span></span>
        </div>
        <div className='level'>
          <h3>C</h3><span className='bar'><span className='c'></span></span>
        </div>
        <div className='level'>
          <h3>Github</h3><span className='bar'><span className='github'></span></span>
        </div>
        <div className='level'>
          <h3>Responsive design</h3><span className='bar'><span className='resp'></span></span>
        </div>
      </div>
      <a href={CV} target="_blank" rel="noreferrer"><div className='profil-button'>Mon CV</div></a>
    </div>
  )
}

export default Detail