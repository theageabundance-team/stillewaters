import { useState, type FormEvent } from 'react';
import Logo from './Logo';
import BreathingOrb from './BreathingOrb';

interface LoginProps {
  onLogin: (name: string, email: string) => void;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function Login({ onLogin }: LoginProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError('Merci d’indiquer ton nom complet.');
      return;
    }
    if (!isValidEmail(email.trim())) {
      setError('Merci d’indiquer une adresse e-mail valide.');
      return;
    }
    setError('');
    onLogin(name.trim(), email.trim().toLowerCase());
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <header className="max-w-6xl w-full mx-auto px-6 py-6">
        <Logo />
      </header>

      <main className="flex-1 flex items-center justify-center px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-14 max-w-4xl w-full items-center">
          <div className="hidden md:flex flex-col items-center text-center">
            <BreathingOrb size={260} />
            <p className="mt-6 text-sm text-ink-light italic max-w-xs">
              &laquo; Venez à moi, vous tous qui êtes fatigués, et je vous donnerai du
              repos. &raquo;
              <br />
              <span className="not-italic text-xs text-ink-light/70">
                Matthieu 11.28
              </span>
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-line/70 shadow-sm p-8 md:p-10">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-terracotta-dark">
              Bienvenue
            </p>
            <h1 className="font-serif-heading text-3xl text-pine mt-2">
              Entrer dans Still Waters
            </h1>
            <p className="text-sm text-ink-light mt-2">
              Indique ton nom et ton e-mail pour commencer la méditation et la prière du
              jour.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-ink-light mb-1.5"
                >
                  Nom complet
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Claire Dupont"
                  className="w-full rounded-xl border border-line px-4 py-3 text-sm outline-none focus:border-pine focus:ring-2 focus:ring-pine/15 transition-shadow bg-cream/40"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-ink-light mb-1.5"
                >
                  E-mail utilisé lors de l’achat
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="claire@email.com"
                  className="w-full rounded-xl border border-line px-4 py-3 text-sm outline-none focus:border-pine focus:ring-2 focus:ring-pine/15 transition-shadow bg-cream/40"
                />
              </div>

              {error && <p className="text-sm text-terracotta-dark">{error}</p>}

              <button
                type="submit"
                className="w-full bg-pine hover:bg-pine-dark text-white rounded-full px-6 py-3.5 text-sm font-semibold transition-colors"
              >
                Entrer
              </button>
              <p className="text-xs text-ink-light/70 text-center pt-1">
                Aucun mot de passe nécessaire — juste le nom et l’e-mail utilisés pour
                obtenir Still Waters.
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
