// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'; // Ajoute un fichier CSS spécifique pour la page d'accueil
import mecanic from '/src/assets/public/img/mecanique.jpeg'
import dev from '/src/assets/public/img/image_dev.jpeg'
import comptable from '/src/assets/public/img/comptable.jpg'
import justice from '/src/assets/public/img/justice.png'
import diplome from '/src/assets/public/img/diplome.png'
import billet from '/src/assets/public/img/billet.png'
import ent from '/src/assets/public/img/entreprise.jpeg'
import etudiant from '/src/assets/public/img/etudiant.jpeg'
import checked from '/src/assets/public/img/checked.png'

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        
       
      </header>

      {/* Section des formations */}
      <section className="formations">
        <p className='details'>Mettez toutes les chances de votre coté pour trouver un job !</p>
        
        <div className="formations-list">
        
        </div>
      </section>
      <h2 >Nos prochaines formations diplômantes</h2>
      {/* Section des avantages */}
      <section className="advantages">
      
        <div className="advantage-item">
            <img className='img-fromation' src={mecanic} alt="image pièces mécanqiue" />
            <p>Formation Génie mécanique</p>
        </div>
        <div className="advantage-item">
            <img className='img-fromation' src={dev} alt="image ordinateur avec code" />
            <p >Formation Génie mécanique</p>
        </div>
        <div className="advantage-item">
            <img className='img-fromation' src={comptable} alt="image calculatrice" />
            <p >Formation Génie mécanique</p>
        </div>
      </section>
      <button className="btn btn-success">Consulter toutes nos sessions programmées</button>
      



      
      <section className="icones">
      <div className="icone-item">
            <img className='img-icone' src={justice} alt="image pièces mécanqiue" />
            <p className='p-icone'>Un format qui préserve votre équilibre personnel et professionnel avec des formats à distance.</p>
      </div>

      <div className="icone-item">
          <img className='img-icone' src={billet} alt="image ordinateur avec code" />
          <p className='p-icone'>Nous vous aidons à trouver un financement afin que la formation vous revient gratuite.</p>
        </div>

        <div className="icone-item">
          <img className='img-icone' src={diplome} alt="image calculatrice" />
          <p className='p-icone'>Des formations certifiantes ou diplomantes garanties.</p>
        </div>
      </section>
      


      {/* Section contact */}
      <section className="contact">
        <h2>Vous avez un projet professionnel ?</h2>
        <p className='p-contact'>Contactez nos experts pour qu ils vous aident à aller au bout de votre reflexion.Trouvez vites les collaborateurs les plus adaptés.</p>


        <div className='block-contact'>
          <div className="contact-options" onClick={() => navigate('/login/company')}>
            <div className="contact-card">
              <img className='round-img' src={ent}  alt="" />
              <p>Vous êtes une entreprise ? </p>
              </div>

            <div className='link-contact'>
              <img className='checked' src={checked} alt="" />
            <p>Contactez-nous</p>
            </div>
        </div>   


       
        <div className="contact-options" onClick={() => navigate('/login/student')} >
            <div className="contact-card">
              <img className='round-img'  src={etudiant} alt="" />
              <p>Vous êtes un de nos étudiants? </p>
            </div>

            <div className='link-contact'>
              <img className='checked' src={checked} alt="" />
            <p>Contactez-nous</p>
            </div>
          </div>
        </div>

        <div className='link-contact coll'onClick={() => navigate('/login/employee')}>
              <img className='checked ' src={checked} alt="" />
            <p>Espace Collaborateur</p>
            </div>
      </section>
    </div>
  );
}

export default HomePage;
