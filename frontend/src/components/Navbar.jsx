import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiLogOut, FiMessageSquare, FiGrid, FiFileText } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🏛️</span>
          <span className="brand-text">JanSahayak</span>
        </Link>

        <div className="navbar-links">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="nav-link" title="Dashboard">
                <FiGrid /> <span>Dashboard</span>
              </Link>
              <Link to="/schemes" className="nav-link" title="Schemes">
                <FiFileText /> <span>Schemes</span>
              </Link>
              <Link to="/chat" className="nav-link" title="Chat">
                <FiMessageSquare /> <span>Chat</span>
              </Link>
              <div className="nav-user">
                <span className="nav-user-name">{user?.name}</span>
                <button className="nav-logout-btn" onClick={handleLogout} title="Logout">
                  <FiLogOut />
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link nav-register-btn">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
