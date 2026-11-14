// Product data - source of truth from the project brief
export const PRODUCTS = [
  {
    id: 'basic',
    name: 'Basic Edition',
    price: 999,
    tag: 'Everyday embarrassing memories.',
    description: 'Perfect for those everyday cringe moments — the time you waved back at someone who wasn\'t waving at you, or called your teacher "mom."',
    features: ['Single memory mode', 'Standard spray', '100 ml bottle', 'Everyday use'],
    flag: '',
  },
  {
    id: 'pro',
    name: 'Professional Edition',
    price: 1499,
    tag: 'Heartbreaks, exams and major regrets.',
    description: 'For the deeper stuff — heartbreaks that won\'t fade, exam answers you\'ll never forget forgetting, and those "I can\'t believe I said that" moments.',
    features: ['Three memory modes', 'Enhanced formula', '100 ml bottle', 'Deep memory access'],
    flag: 'Most chosen',
  },
  {
    id: 'ultimate',
    name: 'Ultimate Edition',
    price: 2999,
    tag: 'For people who have seen too much.',
    description: 'The nuclear option. For people who have accumulated a lifetime of memories they\'d rather not keep. Full access to all six memory modes.',
    features: ['All six modes', 'Maximum strength', '100 ml bottle', 'Unlimited memory access'],
    flag: '',
  },
];

export const MODES = [
  {
    id: 'exit',
    name: 'Ex-It Mode',
    description: 'For heartbreaks and broken promises.',
    longDescription: 'Designed for emotional memories that overstay their welcome. Ex-It Mode targets memories of broken promises, unanswered messages, and love that didn\'t last.',
    icon: '💔',
    image: '/images/mode-exit.jpg',
  },
  {
    id: 'exam',
    name: 'Exam 404',
    description: 'For exam stress and academic disappointments.',
    longDescription: 'Error 404: Exam memory not found. Exam 404 targets the stress of academic failures, forgotten answers, and that one question you definitely knew but blanked on.',
    icon: '📝',
    image: '/images/mode-exam.jpg',
  },
  {
    id: 'cringe',
    name: 'Cringe Delete',
    description: 'For embarrassing moments and awkward conversations.',
    longDescription: 'Permanently remove those 3 AM replays of embarrassing moments. Cringe Delete handles public slips, awkward silences, and things you wish you never said.',
    icon: '🫣',
    image: '/images/mode-cringe.jpg',
  },
  {
    id: 'family',
    name: 'Family Filter',
    description: 'For awkward questions from relatives.',
    longDescription: '"When are you getting married?" "Why don\'t you have a job yet?" Family Filter creates a selective barrier against unwanted interrogations from well-meaning relatives.',
    icon: '👨‍👩‍👧',
    image: '/images/mode-family.jpg',
  },
  {
    id: 'monday',
    name: 'Monday Reset',
    description: 'For people whose biggest enemy is Monday.',
    longDescription: 'A fresh start every week. Monday Reset erases the dread of alarm clocks, traffic jams, and the existential crisis that hits every Sunday night.',
    icon: '📅',
    image: '/images/mode-monday.jpg',
  },
  {
    id: 'sleep',
    name: 'Sleep Mode',
    description: 'For unnecessary 3 AM overthinking.',
    longDescription: 'Stop the nightly replay of every conversation you\'ve ever had. Sleep Mode quiets the mental noise and lets you rest without reliving your entire life history.',
    icon: '🌙',
    image: '/images/mode-sleep.jpg',
  },
];

export const TEAM = [
  { name: 'Amna', role: 'Founder' },
  { name: 'Aboodhi', role: 'Co-Founder' },
  { name: 'Rinshin', role: 'Chief Operating Officer' },
  { name: 'Zida', role: 'Chief Financial Officer' },
  { name: 'Nahreera', role: 'Chief Technology Officer' },
  { name: 'Sinan', role: 'Chief Marketing Officer' },
  { name: 'Savad', role: 'Chief Communications Officer' },
  { name: 'Sana', role: 'Chief Human Resources Officer' },
  { name: 'Niya', role: 'Chief Product Officer' },
  { name: 'Naisha', role: 'Chief Strategy Officer' },
];

export const FACTS = [
  'No headaches, no confusion',
  'Erases embarrassing memories in 2 seconds',
  'Deletes exes without deleting current contacts',
  'Removes exam fear without removing knowledge',
  'Forgets awkward conversations permanently',
  'Deletes unwanted crushes with one spray',
  'Removes unnecessary overthinking',
  'Keeps happy memories untouched',
  'Undo button for accidental deletion',
  'Unlimited usage, no subscription fees',
  'AI-powered memory selection',
  'No emotional damage',
];

export const FAQS = [
  { q: 'Is Recall Killer real?', a: 'No. The technology and its effects are fictional and intended for entertainment. This store is a demo, so no real orders or payments are taken.' },
  { q: 'Where is my cart saved?', a: 'In your own browser (localStorage). Nothing is sent to a server, and clearing your browser data clears it.' },
  { q: 'How do I use the spray?', a: 'Spray lightly on your forehead from a safe distance and forget the rest. For external use only. Avoid contact with eyes. Keep out of reach of children.' },
  { q: 'Which coupon codes work?', a: 'FORGET10 gives 10% off and MAVERICKS gives 15% off.' },
  { q: 'What is the difference between editions?', a: 'Basic handles everyday embarrassments, Professional targets deeper memories like heartbreaks and exams, and Ultimate gives full access to all six memory modes for those who have seen too much.' },
  { q: 'Is there a refund policy?', a: 'You won\'t remember what you bought, so refunds are irrelevant. (This is a fictional product — no real purchases are made.)' },
];

export const COUPONS = { FORGET10: 0.10, MAVERICKS: 0.15 };

export const FUTURE_VISION = [
  { num: '01', title: 'Enhanced Packaging', desc: 'Premium collector\'s edition packaging with advanced materials and sustainable design.' },
  { num: '02', title: 'Personalized Memory Selection', desc: 'AI-powered targeting that learns which memories matter and which don\'t.' },
  { num: '03', title: 'Additional Operating Modes', desc: 'New modes for workplace stress, social media regret, and childhood nostalgia management.' },
  { num: '04', title: 'International Reach', desc: 'Global partnerships and distribution to bring selective forgetting worldwide.' },
];
