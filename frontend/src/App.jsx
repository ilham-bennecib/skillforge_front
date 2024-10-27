
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Candidats from './pages/candidats'
import Students from './pages/students'
import CombinedPage from './pages/combined_page'
import ProfileCandidat from './pages/profile_candidat'
import ProfileStudent from './pages/profile_student'

import './App.css'
import Header from './components/header'; // Importation du header
import Sidebar from './components/side_bar'; // Importation du header
import Footer from './components/footer'; // Importation du footer
function App() {
  

  return (
    <Router>
    <div className='main'>
    {/* Le Header sera affiché sur toutes les pages */}
    <Header />
    <div className='main-container'>

    <Sidebar/>
    {/* Routes pour différentes pages */}
    <Routes>
        <Route path="/candidates/all" element={<Candidats /> } />
        <Route path="/students/all" element={<Students /> } />
        <Route path="/combined" element={<CombinedPage />} />
        <Route path="/candidat/profile/:id" element={<ProfileCandidat />} /> {/* Route vers le profil */}
        <Route path="/student/profile/:id" element={<ProfileStudent />} /> {/* Route vers le profil */}
        
        </Routes>
      
    </div>
    <div className='footer-container'>
    <Footer/>
    </div>
    
    
            
      </div>
    </Router>
  );
  
}

export default App
