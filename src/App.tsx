import { useEffect, useState } from 'react';
import Landing from './components/Landing';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {
  loadUser,
  saveUser,
  clearUser,
  touchStreak,
  type StillWatersUser,
} from './lib/storage';

type View = 'landing' | 'login' | 'app';

export default function App() {
  const [user, setUser] = useState<StillWatersUser | null>(null);
  const [view, setView] = useState<View>('landing');
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const existing = loadUser();
    if (existing) {
      setUser(existing);
      setView('app');
      setStreak(touchStreak());
    }
  }, []);

  function handleLogin(name: string, email: string) {
    const newUser: StillWatersUser = { name, email, joinedAt: new Date().toISOString() };
    saveUser(newUser);
    setUser(newUser);
    setStreak(touchStreak());
    setView('app');
  }

  function handleSignOut() {
    clearUser();
    setUser(null);
    setView('landing');
  }

  if (view === 'app' && user) {
    return <Dashboard user={user} streak={streak} onSignOut={handleSignOut} />;
  }

  if (view === 'login') {
    return <Login onLogin={handleLogin} onBack={() => setView('landing')} />;
  }

  return <Landing onGetStarted={() => setView('login')} />;
}
