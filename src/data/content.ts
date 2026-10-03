export interface Meditation {
  id: string;
  title: string;
  theme: string;
  minutes: number;
  verse: string;
  reference: string;
  body: string[];
}

export interface Prayer {
  day: number; // day of year, 0-indexed
  title: string;
  verse: string;
  reference: string;
  prayer: string;
}

export const meditations: Meditation[] = [
  {
    id: 'be-still',
    title: 'Calme-toi',
    theme: 'Paix',
    minutes: 5,
    verse: 'Arrêtez, et sachez que je suis Dieu.',
    reference: 'Psaume 46.11',
    body: [
      'Installe-toi dans un endroit calme. Laisse tes épaules se détendre et ton souffle ralentir.',
      'Imagine le bruit de la journée comme l’eau qui s’apaise après une tempête — peu à peu, le calme revient.',
      'Inspire pendant quatre temps, retiens pendant quatre temps, expire pendant six temps. Répète doucement, en te reposant dans cette vérité : Il est Dieu, et tu n’as pas à porter cette journée seul(e).',
    ],
  },
  {
    id: 'cast-your-cares',
    title: 'Dépose tes soucis',
    theme: 'Anxiété',
    minutes: 7,
    verse: 'Déchargez-vous sur lui de tous vos soucis, car lui-même prend soin de vous.',
    reference: '1 Pierre 5.7',
    body: [
      'Nomme, un par un, ce qui pèse sur toi en ce moment — même silencieusement, dans ton cœur.',
      'À chaque expiration, imagine que tu déposes ce souci aux pieds d’un Père qui le connaît déjà.',
      'Repose-toi dans cette vérité : tu n’as jamais eu à le porter seul(e). Il prend soin de toi, et Il en est capable.',
    ],
  },
  {
    id: 'green-pastures',
    title: 'Verts pâturages',
    theme: 'Repos',
    minutes: 6,
    verse: 'Il me fait reposer dans de verts pâturages, il me dirige près des eaux paisibles, il restaure mon âme.',
    reference: 'Psaume 23.2-3',
    body: [
      'Imagine un grand champ paisible — de l’herbe douce, une eau calme, rien à faire ni où aller.',
      'Laisse ton corps se détendre dans cette image en respirant lentement, comme si le Berger t’y conduisait maintenant.',
      'Reçois ce repos qui t’est offert, non pas mérité. Tu as le droit de te reposer.',
    ],
  },
  {
    id: 'new-mercies',
    title: 'Nouvelles chaque matin',
    theme: 'Espérance',
    minutes: 5,
    verse: 'Les compassions de l’Éternel se renouvellent chaque matin. Oh ! que ta fidélité est grande !',
    reference: 'Lamentations 3.22-23',
    body: [
      'Quoi qu’il se soit passé hier, ce souffle est une grâce nouvelle.',
      'Inspire lentement et remercie silencieusement Dieu pour une chose nouvelle ou possible aujourd’hui.',
      'Laisse derrière toi le besoin de tout comprendre d’hier. Aujourd’hui suffit.',
    ],
  },
  {
    id: 'perfect-peace',
    title: 'Une paix parfaite',
    theme: 'Confiance',
    minutes: 8,
    verse: 'À celui qui est ferme dans ses sentiments tu assures la paix, la paix, parce qu’il se confie en toi.',
    reference: 'Ésaïe 26.3',
    body: [
      'Remarque où ton esprit s’égare — un souci, une personne, un « et si ».',
      'Chaque fois qu’il s’égare, ramène-le doucement vers ce seul mot : confiance.',
      'Reste dans le calme. La paix n’est pas l’absence de bruit, mais la présence d’un esprit fermement tourné vers Lui.',
    ],
  },
  {
    id: 'the-lords-prayer',
    title: 'Prier comme Jésus l’a enseigné',
    theme: 'Prière',
    minutes: 6,
    verse: 'Voici donc comment vous devez prier...',
    reference: 'Matthieu 6.9-13',
    body: [
      'Prie lentement le Notre Père, en t’arrêtant sur chaque ligne.',
      'Laisse « Donne-nous aujourd’hui notre pain quotidien » devenir une vraie demande pour aujourd’hui, pas seulement une phrase apprise par cœur.',
      'Termine en te reposant sur « car c’est à toi qu’appartient le règne » — ce n’était jamais à toi de tout porter.',
    ],
  },
];

export const dailyPrayers: Omit<Prayer, 'day'>[] = [
  {
    title: 'Une prière pour un esprit apaisé',
    verse: 'Arrêtez, et sachez que je suis Dieu.',
    reference: 'Psaume 46.11',
    prayer:
      'Seigneur, mon esprit est bruyant aujourd’hui. Apaise le bruit et rappelle-moi que Tu es proche. Aide-moi à me reposer en qui Tu es, et non dans ce que je peux contrôler. Amen.',
  },
  {
    title: 'Une prière pour la force',
    verse: 'Je puis tout par celui qui me fortifie.',
    reference: 'Philippiens 4.13',
    prayer:
      'Père, aujourd’hui me semble lourd. Rencontre-moi dans ma faiblesse et sois ma force là où la mienne s’épuise. Laisse-moi marcher aujourd’hui appuyé(e) sur Toi. Amen.',
  },
  {
    title: 'Une prière de gratitude',
    verse: 'Rendez grâces en toutes choses, car c’est à votre égard la volonté de Dieu.',
    reference: '1 Thessaloniciens 5.18',
    prayer:
      'Merci, Seigneur, pour ce jour et ses dons discrets. Ouvre mes yeux sur ce qui est bon, même dans ce qui est difficile. Que la gratitude guide mon cœur aujourd’hui. Amen.',
  },
  {
    title: 'Une prière de confiance',
    verse: 'Confie-toi en l’Éternel de tout ton cœur, et ne t’appuie pas sur ta sagesse.',
    reference: 'Proverbes 3.5',
    prayer:
      'Seigneur, je voudrais tout comprendre avant de Te faire confiance, mais aujourd’hui je choisis de faire confiance d’abord. Guide mes pas ; je Te suivrai. Amen.',
  },
  {
    title: 'Une prière pour le repos',
    verse: 'Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.',
    reference: 'Matthieu 11.28',
    prayer:
      'Jésus, je suis fatigué(e) de manières que je ne sais pas toujours expliquer. Je T’apporte mes fardeaux aujourd’hui et je Te demande Ton repos, celui que le monde ne peut pas donner. Amen.',
  },
  {
    title: 'Une prière d’espérance',
    verse: 'Que le Dieu de l’espérance vous remplisse de toute joie et de toute paix dans la foi.',
    reference: 'Romains 15.13',
    prayer:
      'Dieu d’espérance, remplis aujourd’hui les vides en moi. Là où j’ai perdu de vue la joie, restaure-la. Là où j’ai cessé de croire, rencontre-moi. Amen.',
  },
  {
    title: 'Une prière pour ceux que j’aime',
    verse: 'Faites en tout temps par l’Esprit toutes sortes de prières et de supplications.',
    reference: 'Éphésiens 6.18',
    prayer:
      'Seigneur, je Te présente les personnes que Tu as placées dans ma vie. Veille sur elles, réconforte-les, et qu’elles ressentent Ta présence aujourd’hui comme moi en ce moment. Amen.',
  },
];

export function getDayOfYear(date: Date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / 86400000);
}

export function getTodaysPrayer(date: Date = new Date()): Prayer {
  const day = getDayOfYear(date);
  const base = dailyPrayers[day % dailyPrayers.length];
  return { day, ...base };
}
