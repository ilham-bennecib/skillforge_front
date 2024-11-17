import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Candidats from './pages/candidats';
import Students from './pages/students';
import CombinedPage from './pages/combined_page';
import ProfileCandidat from './pages/profile_candidat';
import ProfileStudent from './pages/profile_student';
import HomePage from './pages/home';
import './App.css';
import Header from './components/header';
import Sidebar from './components/side_bar';
import Footer from './components/footer';
import LoginForm from './pages/loginForm';
import Dashboard from './pages/employee_dashbord';

function AppLayout() {
  // Utilise useLocation dans un composant qui est enfant de Router
  const location = useLocation();

  // Condition pour afficher ou masquer la SideBar
  const hideSidebar = location.pathname === '/' || location.pathname.startsWith('/login');

  return (
    <div className='main'>
      <Header />
      <div className='main-container'>
        {/* Affiche la SideBar uniquement si hideSidebar est false */}
        {!hideSidebar && <Sidebar />}
        
        <Routes>
          {/* Routes publiques sans Sidebar */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login/student" element={<LoginForm userType="student" />} />
          <Route path="/login/company" element={<LoginForm userType="company" />} />
          <Route path="/login/employee" element={<LoginForm userType="employee" />} />

          {/* Routes protégées avec Sidebar */}
          <Route path="/candidates/all" element={<Candidats />} />
          <Route path="/students/all" element={<Students />} />
          <Route path="/combined" element={<CombinedPage />} />
          <Route path="/candidat/profile/:id" element={<ProfileCandidat />} />
          <Route path="/student/profile/:id" element={<ProfileStudent />} />
          <Route path="/employee/profile/:id" element={<Dashboard />} />
        </Routes>
      </div>

      <div className='footer-container'>
        <Footer />
      </div>
    </div>
  );
}

// Composant App principal, qui encapsule AppLayout dans un Router
function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
