import Logo from './Logo';
import BreathingOrb from './BreathingOrb';
import { meditations } from '../data/content';

interface LandingProps {
  onGetStarted: () => void;
}

const faqs = [
  {
    q: 'Do I need any experience with meditation?',
    a: 'No. Still Waters is built for beginners. Every meditation is guided, Scripture-centered, and five to eight minutes long.',
  },
  {
    q: 'What does the daily prayer look like?',
    a: 'Each morning you’ll receive a short, Scripture-grounded prayer you can read in under a minute or pray slowly, word by word.',
  },
  {
    q: 'Is this a Christian app?',
    a: 'Yes. Every meditation and prayer is rooted in Scripture and written to draw you closer to God’s presence and peace.',
  },
  {
    q: 'Can I use it on my phone?',
    a: 'Still Waters works right in your browser on any phone, tablet, or computer — no app store download required.',
  },
];

export default function Landing({ onGetStarted }: LandingProps) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-light font-medium">
          <a href="#inside" className="hover:text-pine transition-colors">What&apos;s inside</a>
          <a href="#day" className="hover:text-pine transition-colors">Your day</a>
          <a href="#community" className="hover:text-pine transition-colors">Prayer community</a>
          <a href="#faq" className="hover:text-pine transition-colors">FAQ</a>
        </nav>
        <button
          onClick={onGetStarted}
          className="bg-pine hover:bg-pine-dark text-white rounded-full px-6 py-2.5 text-sm font-semibold transition-colors"
        >
          Get Started
        </button>
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-10 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-terracotta-dark mb-4">
            — Christian Meditation &amp; Daily Prayer
          </p>
          <h1 className="font-serif-heading text-5xl md:text-6xl leading-[1.05] text-pine">
            Quiet your mind. <span className="italic text-terracotta">Rest</span> in His
            presence.
          </h1>
          <p className="mt-6 text-lg text-ink-light max-w-md">
            Still Waters brings you guided Christian meditations for a restless mind and
            a prayer community that sends you a new prayer every single day. Take a few
            calm minutes, centered on God&apos;s Word, whenever life gets loud.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onGetStarted}
              className="bg-terracotta hover:bg-terracotta-dark text-white rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2 transition-colors"
            >
              Get Still Waters — Free
              <span aria-hidden>→</span>
            </button>
            <a
              href="#inside"
              className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold hover:bg-white transition-colors"
            >
              See what&apos;s inside
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <BreathingOrb />
          <p className="mt-6 text-sm text-ink-light italic">
            Try it now: breathe along with the circle.
          </p>
        </div>
      </section>

      <section id="inside" className="bg-paper border-y border-line/70 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif-heading text-3xl text-pine text-center">
            What&apos;s inside
          </h2>
          <p className="text-ink-light text-center mt-3 max-w-xl mx-auto">
            A small library of guided meditations, each one Scripture-centered and
            written for a quiet mind.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {meditations.map((m) => (
              <div
                key={m.id}
                className="bg-cream rounded-2xl p-6 border border-line/70 text-left"
              >
                <span className="text-xs font-semibold tracking-wide text-terracotta-dark uppercase">
                  {m.theme} · {m.minutes} min
                </span>
                <h3 className="font-serif-heading text-xl text-pine mt-2">{m.title}</h3>
                <p className="text-sm text-ink-light mt-2 italic">
                  &ldquo;{m.verse}&rdquo;
                </p>
                <p className="text-xs text-ink-light/70 mt-1">{m.reference}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="day" className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif-heading text-3xl text-pine">Your day, made calmer</h2>
            <ul className="mt-6 space-y-4 text-ink-light">
              <li className="flex gap-3">
                <span className="text-terracotta font-bold">1.</span>
                Open Still Waters and receive a new Scripture-grounded prayer.
              </li>
              <li className="flex gap-3">
                <span className="text-terracotta font-bold">2.</span>
                Choose a short guided meditation, five to eight minutes.
              </li>
              <li className="flex gap-3">
                <span className="text-terracotta font-bold">3.</span>
                Breathe, reflect on His Word, and carry that peace into your day.
              </li>
            </ul>
          </div>
          <div className="bg-pine rounded-3xl p-8 text-cream">
            <p className="text-xs tracking-[0.2em] uppercase text-rose font-semibold">
              Today&apos;s Prayer
            </p>
            <p className="font-serif-heading italic text-2xl mt-4 leading-snug">
              &ldquo;Be still, and know that I am God.&rdquo;
            </p>
            <p className="text-sm text-cream/70 mt-2">Psalm 46:10</p>
          </div>
        </div>
      </section>

      <section id="community" className="bg-paper border-y border-line/70 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif-heading text-3xl text-pine">
            A prayer community, every day
          </h2>
          <p className="text-ink-light mt-4 max-w-xl mx-auto">
            Still Waters sends you a new prayer each day — rooted in Scripture, written
            to meet you wherever you are. No noise, no feed to scroll. Just a quiet
            moment with God.
          </p>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="font-serif-heading text-3xl text-pine">Simple pricing</h2>
          <div className="mt-8 bg-white rounded-3xl border border-line/70 p-8 shadow-sm">
            <p className="text-4xl font-serif-heading text-pine">$27</p>
            <p className="text-ink-light text-sm mt-1">one-time, full access</p>
            <ul className="mt-6 space-y-2 text-sm text-ink-light text-left">
              <li>✓ Full meditation library</li>
              <li>✓ A new daily prayer, every day</li>
              <li>✓ Access on any device</li>
            </ul>
            <button
              onClick={onGetStarted}
              className="mt-6 w-full bg-terracotta hover:bg-terracotta-dark text-white rounded-full px-6 py-3 text-sm font-semibold transition-colors"
            >
              Get Still Waters · $27
            </button>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-paper border-t border-line/70 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif-heading text-3xl text-pine text-center">FAQ</h2>
          <div className="mt-10 space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-line/70 pb-6">
                <p className="font-semibold text-pine">{f.q}</p>
                <p className="text-ink-light text-sm mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="py-10 text-center text-xs text-ink-light/70">
        <p>Still Waters — Meditation &amp; Daily Prayer</p>
        <p className="mt-1">
          Questions? Reach us anytime at{' '}
          <a href="mailto:hello@stillwaters.app" className="underline">
            hello@stillwaters.app
          </a>
        </p>
      </footer>
    </div>
  );
}
