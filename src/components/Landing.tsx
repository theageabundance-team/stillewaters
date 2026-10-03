import Logo from './Logo';
import BreathingOrb from './BreathingOrb';
import { meditations } from '../data/content';

interface LandingProps {
  onGetStarted: () => void;
}

const faqs = [
  {
    q: 'Dois-je avoir de l’expérience en méditation ?',
    a: 'Non. Still Waters est conçu pour les débutants. Chaque méditation est guidée, centrée sur les Écritures, et dure entre cinq et huit minutes.',
  },
  {
    q: 'À quoi ressemble la prière quotidienne ?',
    a: 'Chaque matin, tu reçois une courte prière fondée sur les Écritures, que tu peux lire en moins d’une minute ou prier lentement, mot après mot.',
  },
  {
    q: 'Est-ce une application chrétienne ?',
    a: 'Oui. Chaque méditation et chaque prière est enracinée dans les Écritures et écrite pour te rapprocher de la présence et de la paix de Dieu.',
  },
  {
    q: 'Puis-je l’utiliser sur mon téléphone ?',
    a: 'Still Waters fonctionne directement dans ton navigateur, sur téléphone, tablette ou ordinateur — aucun téléchargement depuis un app store n’est nécessaire.',
  },
];

export default function Landing({ onGetStarted }: LandingProps) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-light font-medium">
          <a href="#inside" className="hover:text-pine transition-colors">Ce qui est inclus</a>
          <a href="#day" className="hover:text-pine transition-colors">Ta journée</a>
          <a href="#community" className="hover:text-pine transition-colors">Communauté de prière</a>
          <a href="#faq" className="hover:text-pine transition-colors">FAQ</a>
        </nav>
        <button
          onClick={onGetStarted}
          className="bg-pine hover:bg-pine-dark text-white rounded-full px-6 py-2.5 text-sm font-semibold transition-colors"
        >
          Commencer
        </button>
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-10 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-terracotta-dark mb-4">
            — Méditation chrétienne &amp; prière quotidienne
          </p>
          <h1 className="font-serif-heading text-5xl md:text-6xl leading-[1.05] text-pine">
            Apaise ton esprit. <span className="italic text-terracotta">Repose-toi</span> en Sa
            présence.
          </h1>
          <p className="mt-6 text-lg text-ink-light max-w-md">
            Still Waters t’offre des méditations chrétiennes guidées pour un esprit
            agité et une communauté de prière qui t’envoie une nouvelle prière chaque
            jour. Prends quelques minutes de calme, centrées sur la Parole de Dieu,
            chaque fois que la vie devient bruyante.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onGetStarted}
              className="bg-terracotta hover:bg-terracotta-dark text-white rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2 transition-colors"
            >
              Obtenir Still Waters — Gratuit
              <span aria-hidden>→</span>
            </button>
            <a
              href="#inside"
              className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold hover:bg-white transition-colors"
            >
              Voir ce qui est inclus
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <BreathingOrb />
          <p className="mt-6 text-sm text-ink-light italic">
            Essaie maintenant : respire au rythme du cercle.
          </p>
        </div>
      </section>

      <section id="inside" className="bg-paper border-y border-line/70 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif-heading text-3xl text-pine text-center">
            Ce qui est inclus
          </h2>
          <p className="text-ink-light text-center mt-3 max-w-xl mx-auto">
            Une petite bibliothèque de méditations guidées, chacune centrée sur les
            Écritures et écrite pour apaiser l’esprit.
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
                  &laquo; {m.verse} &raquo;
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
            <h2 className="font-serif-heading text-3xl text-pine">Une journée plus calme</h2>
            <ul className="mt-6 space-y-4 text-ink-light">
              <li className="flex gap-3">
                <span className="text-terracotta font-bold">1.</span>
                Ouvre Still Waters et reçois une nouvelle prière fondée sur les
                Écritures.
              </li>
              <li className="flex gap-3">
                <span className="text-terracotta font-bold">2.</span>
                Choisis une courte méditation guidée, de cinq à huit minutes.
              </li>
              <li className="flex gap-3">
                <span className="text-terracotta font-bold">3.</span>
                Respire, médite Sa Parole, et emporte cette paix dans ta journée.
              </li>
            </ul>
          </div>
          <div className="bg-pine rounded-3xl p-8 text-cream">
            <p className="text-xs tracking-[0.2em] uppercase text-rose font-semibold">
              Prière du jour
            </p>
            <p className="font-serif-heading italic text-2xl mt-4 leading-snug">
              &laquo; Arrêtez, et sachez que je suis Dieu. &raquo;
            </p>
            <p className="text-sm text-cream/70 mt-2">Psaume 46.11</p>
          </div>
        </div>
      </section>

      <section id="community" className="bg-paper border-y border-line/70 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif-heading text-3xl text-pine">
            Une communauté de prière, chaque jour
          </h2>
          <p className="text-ink-light mt-4 max-w-xl mx-auto">
            Still Waters t’envoie une nouvelle prière chaque jour — enracinée dans les
            Écritures, écrite pour te rejoindre là où tu es. Pas de bruit, pas de fil
            d’actualité à faire défiler. Juste un moment de calme avec Dieu.
          </p>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="font-serif-heading text-3xl text-pine">Tarif simple</h2>
          <div className="mt-8 bg-white rounded-3xl border border-line/70 p-8 shadow-sm">
            <p className="text-4xl font-serif-heading text-pine">27 $</p>
            <p className="text-ink-light text-sm mt-1">paiement unique, accès complet</p>
            <ul className="mt-6 space-y-2 text-sm text-ink-light text-left">
              <li>✓ Bibliothèque complète de méditations</li>
              <li>✓ Une nouvelle prière chaque jour</li>
              <li>✓ Accès sur tous tes appareils</li>
            </ul>
            <button
              onClick={onGetStarted}
              className="mt-6 w-full bg-terracotta hover:bg-terracotta-dark text-white rounded-full px-6 py-3 text-sm font-semibold transition-colors"
            >
              Obtenir Still Waters · 27 $
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
        <p>Still Waters — Méditation &amp; Prière quotidienne</p>
        <p className="mt-1">
          Des questions ? Écris-nous à tout moment à{' '}
          <a href="mailto:hello@stillwaters.app" className="underline">
            hello@stillwaters.app
          </a>
        </p>
      </footer>
    </div>
  );
}
