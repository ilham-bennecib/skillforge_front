
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Candidats from './pages/candidats'
import CombinedPage from './pages/combined_page'


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
        <Route path="/combined" element={<CombinedPage />} />
        
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
