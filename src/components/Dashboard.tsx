import { useMemo, useState } from 'react';
import Logo from './Logo';
import BreathingOrb from './BreathingOrb';
import MeditationPlayer from './MeditationPlayer';
import { meditations, getTodaysPrayer, type Meditation } from '../data/content';
import { getCompletedMeditations, type StillWatersUser } from '../lib/storage';

interface DashboardProps {
  user: StillWatersUser;
  streak: number;
  onSignOut: () => void;
}

const firstName = (name: string) => name.trim().split(/\s+/)[0];

export default function Dashboard({ user, streak, onSignOut }: DashboardProps) {
  const [active, setActive] = useState<Meditation | null>(null);
  const [completed, setCompleted] = useState<string[]>(() => getCompletedMeditations());
  const prayer = useMemo(() => getTodaysPrayer(), []);

  if (active) {
    return (
      <MeditationPlayer
        meditation={active}
        onClose={() => setActive(null)}
        onComplete={(id) => setCompleted((c) => Array.from(new Set([...c, id])))}
      />
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-terracotta-dark bg-rose/40 rounded-full px-3 py-1.5">
            🔥 {streak} jour{streak > 1 ? 's' : ''} de suite
          </div>
          <button
            onClick={onSignOut}
            className="text-xs font-semibold text-ink-light hover:text-pine transition-colors"
          >
            Se déconnecter
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        <p className="text-ink-light text-sm">Bon retour,</p>
        <h1 className="font-serif-heading text-3xl md:text-4xl text-pine mt-1">
          Que la paix soit avec toi, {firstName(user.name)}.
        </h1>

        <div className="mt-10 grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 bg-pine rounded-3xl p-8 text-cream flex flex-col justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-rose font-semibold">
                Prière du jour
              </p>
              <h2 className="font-serif-heading text-2xl mt-3">{prayer.title}</h2>
              <p className="font-serif-heading italic text-xl mt-5 leading-snug text-cream/95">
                &laquo; {prayer.verse} &raquo;
              </p>
              <p className="text-sm text-cream/70 mt-2">{prayer.reference}</p>
              <p className="mt-6 text-cream/90 leading-relaxed">{prayer.prayer}</p>
            </div>
          </div>

          <div className="md:col-span-2 bg-white rounded-3xl border border-line/70 flex flex-col items-center justify-center p-8 text-center">
            <BreathingOrb size={200} />
            <p className="mt-5 text-sm text-ink-light">
              Prends une minute. Respire au rythme du cercle.
            </p>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between">
          <h2 className="font-serif-heading text-2xl text-pine">Méditations</h2>
          <p className="text-sm text-ink-light">
            {completed.length} sur {meditations.length} terminées
          </p>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {meditations.map((m) => {
            const done = completed.includes(m.id);
            return (
              <button
                key={m.id}
                onClick={() => setActive(m)}
                className="text-left bg-white rounded-2xl p-6 border border-line/70 hover:border-pine/40 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wide text-terracotta-dark uppercase">
                    {m.theme} · {m.minutes} min
                  </span>
                  {done && (
                    <span className="text-xs font-semibold text-pine bg-pine/10 rounded-full px-2 py-0.5">
                      ✓ Terminée
                    </span>
                  )}
                </div>
                <h3 className="font-serif-heading text-xl text-pine mt-2">{m.title}</h3>
                <p className="text-sm text-ink-light mt-2 italic">&laquo; {m.verse} &raquo;</p>
                <p className="text-xs text-ink-light/70 mt-1">{m.reference}</p>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
