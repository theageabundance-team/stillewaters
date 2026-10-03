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
    title: 'Be Still',
    theme: 'Peace',
    minutes: 5,
    verse: 'Be still, and know that I am God.',
    reference: 'Psalm 46:10',
    body: [
      'Settle into a quiet place. Let your shoulders drop and your breath slow.',
      'Picture the noise of the day as water settling after a storm — gradually, it grows calm.',
      'Breathe in for four counts, hold for four, release for six. Repeat gently, resting in the truth that He is God and you do not have to carry today alone.',
    ],
  },
  {
    id: 'cast-your-cares',
    title: 'Cast Your Cares',
    theme: 'Anxiety',
    minutes: 7,
    verse: 'Cast all your anxiety on him because he cares for you.',
    reference: '1 Peter 5:7',
    body: [
      'Name, one by one, what is weighing on you right now — even silently in your mind.',
      'With each breath out, picture setting that worry down at the feet of a Father who already knows it.',
      'Rest in the fact that carrying it was never required of you. He cares, and He is capable.',
    ],
  },
  {
    id: 'green-pastures',
    title: 'Green Pastures',
    theme: 'Rest',
    minutes: 6,
    verse: 'He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.',
    reference: 'Psalm 23:2-3',
    body: [
      'Imagine a wide, quiet field — soft grass, still water, nowhere to be.',
      'Let your body soften into this image as you breathe slowly, as if the Shepherd were leading you there now.',
      'Receive the refreshment that is offered, not earned. You are allowed to rest.',
    ],
  },
  {
    id: 'new-mercies',
    title: 'New Every Morning',
    theme: 'Hope',
    minutes: 5,
    verse: "His mercies are new every morning; great is your faithfulness.",
    reference: 'Lamentations 3:22-23',
    body: [
      'Whatever happened yesterday, this breath is a new mercy.',
      'Breathe in slowly and silently thank God for one thing that is new or possible today.',
      'Let go of the need to have yesterday figured out. Today is enough.',
    ],
  },
  {
    id: 'perfect-peace',
    title: 'Perfect Peace',
    theme: 'Trust',
    minutes: 8,
    verse: 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.',
    reference: 'Isaiah 26:3',
    body: [
      'Notice where your mind keeps wandering — to a worry, a person, a what-if.',
      'Each time it wanders, gently bring it back to this one word: trust.',
      'Sit in the stillness. Peace is not the absence of noise, but the presence of a steadfast mind fixed on Him.',
    ],
  },
  {
    id: 'the-lords-prayer',
    title: 'Praying as Jesus Taught',
    theme: 'Prayer',
    minutes: 6,
    verse: 'This, then, is how you should pray...',
    reference: 'Matthew 6:9-13',
    body: [
      'Slowly pray through the Lord’s Prayer, pausing on each line.',
      'Let "Give us today our daily bread" become a real request for today, not just a memorized phrase.',
      'Close by resting in "for thine is the kingdom" — it was never yours to hold together.',
    ],
  },
];

export const dailyPrayers: Omit<Prayer, 'day'>[] = [
  {
    title: 'A Prayer for a Quiet Mind',
    verse: 'Be still, and know that I am God.',
    reference: 'Psalm 46:10',
    prayer:
      'Lord, my mind is loud today. Quiet the noise and remind me that You are near. Help me to rest in who You are, not in what I can control. Amen.',
  },
  {
    title: 'A Prayer for Strength',
    verse: 'I can do all this through him who gives me strength.',
    reference: 'Philippians 4:13',
    prayer:
      'Father, today feels heavy. Meet me in my weakness and be my strength where mine runs out. Let me walk this day leaning on You. Amen.',
  },
  {
    title: 'A Prayer of Gratitude',
    verse: 'Give thanks in all circumstances; for this is God’s will for you.',
    reference: '1 Thessalonians 5:18',
    prayer:
      'Thank You, Lord, for this day and its quiet gifts. Open my eyes to what is good, even in what is hard. Let gratitude lead my heart today. Amen.',
  },
  {
    title: 'A Prayer for Trust',
    verse: 'Trust in the Lord with all your heart and lean not on your own understanding.',
    reference: 'Proverbs 3:5',
    prayer:
      'Lord, I want to understand everything before I trust You, but today I choose to trust first. Lead my steps; I will follow. Amen.',
  },
  {
    title: 'A Prayer for Rest',
    verse: 'Come to me, all you who are weary and burdened, and I will give you rest.',
    reference: 'Matthew 11:28',
    prayer:
      'Jesus, I am tired in ways I cannot always explain. I bring You my burdens today and ask for Your rest, the kind the world cannot give. Amen.',
  },
  {
    title: 'A Prayer for Hope',
    verse: 'May the God of hope fill you with all joy and peace as you trust in him.',
    reference: 'Romans 15:13',
    prayer:
      'God of hope, fill the empty places in me today. Where I have lost sight of joy, restore it. Where I have stopped trusting, meet me there. Amen.',
  },
  {
    title: 'A Prayer for Those I Love',
    verse: 'And pray in the Spirit on all occasions with all kinds of prayers and requests.',
    reference: 'Ephesians 6:18',
    prayer:
      'Lord, I lift up the people You’ve placed in my life. Watch over them, comfort them, and let them feel Your presence today as I do now. Amen.',
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
