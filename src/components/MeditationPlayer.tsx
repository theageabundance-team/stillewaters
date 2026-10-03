import { useEffect, useState } from 'react';
import BreathingOrb from './BreathingOrb';
import type { Meditation } from '../data/content';
import { markMeditationComplete } from '../lib/storage';

interface MeditationPlayerProps {
  meditation: Meditation;
  onClose: () => void;
  onComplete: (id: string) => void;
}

export default function MeditationPlayer({
  meditation,
  onClose,
  onComplete,
}: MeditationPlayerProps) {
  const [step, setStep] = useState(0);
  const isLast = step === meditation.body.length - 1;
  const isFinished = step >= meditation.body.length;

  useEffect(() => {
    if (isFinished) {
      markMeditationComplete(meditation.id);
      onComplete(meditation.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFinished]);

  return (
    <div className="min-h-screen bg-pine text-cream flex flex-col">
      <header className="max-w-3xl w-full mx-auto px-6 py-6 flex items-center justify-between">
        <button
          onClick={onClose}
          className="text-sm text-cream/70 hover:text-cream transition-colors"
        >
          ← Back
        </button>
        <span className="text-xs tracking-[0.2em] uppercase text-rose font-semibold">
          {meditation.theme}
        </span>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center pb-16">
        <BreathingOrb size={260} />

        <h1 className="font-serif-heading text-3xl mt-10">{meditation.title}</h1>
        <p className="font-serif-heading italic text-xl mt-4 max-w-lg text-cream/95">
          &ldquo;{meditation.verse}&rdquo;
        </p>
        <p className="text-sm text-cream/60 mt-2">{meditation.reference}</p>

        {!isFinished ? (
          <>
            <p className="max-w-md mt-8 text-cream/90 leading-relaxed">
              {meditation.body[step]}
            </p>
            <button
              onClick={() => setStep((s) => s + 1)}
              className="mt-10 bg-terracotta hover:bg-terracotta-dark text-white rounded-full px-8 py-3.5 text-sm font-semibold transition-colors"
            >
              {isLast ? 'Finish' : 'Continue'}
            </button>
            <div className="mt-6 flex gap-1.5">
              {meditation.body.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i <= step ? 'bg-terracotta w-6' : 'bg-cream/20 w-1.5'
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="max-w-md mt-8 text-cream/90 leading-relaxed">
              Amen. Carry this stillness with you into the rest of your day.
            </p>
            <button
              onClick={onClose}
              className="mt-10 bg-cream text-pine hover:bg-white rounded-full px-8 py-3.5 text-sm font-semibold transition-colors"
            >
              Return to meditations
            </button>
          </>
        )}
      </main>
    </div>
  );
}
