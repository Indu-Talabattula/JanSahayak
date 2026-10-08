import { useAuth } from '../context/AuthContext';

const DashboardPlaceholder = () => {
  const { user } = useAuth();

  return (
    <div className="placeholder-page">
      <div className="placeholder-badge">Phase 4A Verified</div>
      <h2>Citizen Dashboard</h2>
      <p>Dashboard coming in Phase 4.</p>
      
      {user && (
        <div className="user-welcome-card">
          <p><strong>Authenticated Citizen:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Preferred Language:</strong> {user.preferredLanguage || 'English'}</p>
          <p><strong>Role:</strong> {user.role || 'user'}</p>
        </div>
      )}
    </div>
  );
};

export default DashboardPlaceholder;
