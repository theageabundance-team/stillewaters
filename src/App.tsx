import { useEffect, useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {
  loadUser,
  saveUser,
  clearUser,
  touchStreak,
  type StillWatersUser,
} from './lib/storage';

export default function App() {
  const [user, setUser] = useState<StillWatersUser | null>(null);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const existing = loadUser();
    if (existing) {
      setUser(existing);
      setStreak(touchStreak());
    }
  }, []);

  function handleLogin(name: string, email: string) {
    const newUser: StillWatersUser = { name, email, joinedAt: new Date().toISOString() };
    saveUser(newUser);
    setUser(newUser);
    setStreak(touchStreak());
  }

  function handleSignOut() {
    clearUser();
    setUser(null);
  }

  if (user) {
    return <Dashboard user={user} streak={streak} onSignOut={handleSignOut} />;
  }

  return <Login onLogin={handleLogin} />;
}
