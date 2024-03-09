import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Finden Sie Ihren nächsten Computer bei Nemesis</h1>
            <p>
            Kaufen Sie noch heute Nemesis für alle Ihre Gaming-, PC- und Technologieanforderungen. Verpassen Sie nicht die besten Elektronik-Angebote von heute mit schnellem Versand und großartigem Kundenservice!
            </p>
            <button className='btn'>Erkunde mehr <img src={dark_arrow} alt="" /></button>
        </div>

    </div>
  )
}

export default Hero