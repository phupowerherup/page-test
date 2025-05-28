const questionsPool = [
  {
    key: 'animal',
    question: 'Which animal resonates with you?',
    options: [
      { label: 'Lion', img: 'images/lion.jpg' },
      { label: 'Owl', img: 'images/owl.jpg' },
      { label: 'Dolphin', img: 'images/dolphin.jpg' }
    ]
  },
  {
    key: 'drink',
    question: 'What do you feel like drinking today?',
    options: [
      { label: 'Tea', img: 'images/tea.jpg' },
      { label: 'Coffee', img: 'images/coffee.jpg' },
      { label: 'Matcha', img: 'images/matcha.jpg' }
    ]
  },
  {
    key: 'season',
    question: 'What season speaks to your soul?',
    options: [
      { label: 'Summer', img: 'images/summer.jpg' },
      { label: 'Winter', img: 'images/winter.jpg' },
      { label: 'Autumn', img: 'images/fall.jpg' }
    ]
  },

  {
    key: 'sidekick',
    question: 'Which magical creature would be your sidekick?',
    options: [
      { label: 'Unicorn' },
      { label: 'Dragon' },
      { label: 'Phoenix' }
    ]
  },
  {
    key: 'vibe',
    question: 'What’s your vibe right now?',
    options: [
      { label: 'Sunshine' },
      { label: 'Storm'},
      { label: 'Moonlight' }
    ]
  },
  {
    key: 'auraSmell',
    question: 'What would your aura smell like?',
    options: [
      { label: 'Lavender' },
      { label: 'Fresh Rain' },
      { label: 'Coconut' }
    ]
  },
  {
    key: 'potionPower',
    question: 'If you were a potion, what would you do?',
    options: [
      { label: 'Invisibility' },
      { label: 'Confidence Boost' },
      { label: 'Love Attraction' }
    ]
  },
  {
    key: 'crystal',
    question: 'Choose a crystal for today’s journey.',
    options: [
      { label: 'Amethyst' },
      { label: 'Rose Quartz'},
      { label: 'Obsidian' }
    ]
  },
  {
    key: 'cloudMood',
    question: 'What kind of cloud are you floating on?',
    options: [
      { label: 'Cotton Candy' },
      { label: 'Thunderstorm'},
      { label: 'Glitter Mist'}
    ]
  },
  {
    key: 'decadeEnergy',
    question: 'Which decade matches your energy?',
    options: [
      { label: '70s Disco'},
      { label: '90s Chill' },
      { label: '2000s Pop' }
    ]
  },
  {
    key: 'moonType',
    question: 'What type of moon matches your mood?',
    options: [
      { label: 'Full Moon' },
      { label: 'Crescent' },
      { label: 'Eclipse' }
    ]
  },
  {
    key: 'songGenre',
    question: 'If your heart had a song, what genre would it be?',
    options: [
      { label: 'Lo-fi'},
      { label: 'Pop Bop' },
      { label: 'Jazz' }
    ]
  },
  {
    key: 'mysticalSnack',
    question: 'Choose a mystical snack.',
    options: [
      { label: 'Galaxy Popcorn' },
      { label: 'Starfruit Pie' },
      { label: 'Crystal Candy' }
    ]
  },
  {
    key: 'familiar',
    question: 'What would your pet be?',
    options: [
      { label: 'Raven' },
      { label: 'Fox'},
      { label: 'Snake' }
    ]
  },
  {
    key: 'magicalWeapon',
    question: 'Pick your dream magical weapon.',
    options: [
      { label: 'Wand' },
      { label: 'Sword' },
      { label: 'Arrow' }
    ]
  },
  {
    key: 'stormSoul',
    question: 'What kind of storm brews in your soul?',
    options: [
      { label: 'Lightning Bolts' },
      { label: 'Snow Flurry' },
      { label: 'Meteor Shower' }
    ]
  },
  {
    key: 'lightType',
    question: 'What kind of light shines through you?',
    options: [
      { label: 'Lantern Glow'},
      { label: 'Candle Flicker'},
      { label: 'Starlight Beam' }
    ]
  },
  {
    key: 'dreamPet',
    question: 'What’s your dream pet from another dimension?',
    options: [
      { label: 'Rainbow Tiger' },
      { label: 'Mini Griffin' },
      { label: 'Lava Frog' }
    ]
  },
  {
    key: 'bookType',
    question: 'What kind of book would you be?',
    options: [
      { label: 'Mystery' },
      { label: 'Fantasy' },
      { label: 'Philosophy'}
    ]
  },
  {
    key: 'question1',
    question: 'What’s your favorite way to spend the weekend?',
    options: [
      { label: 'Exploring new places' },
      { label: 'Reading a good book' },
      { label: 'Dancing the night away'}
    ]
  },
  {
    key: 'question2',
    question: 'Which magical creature would you want to be?',
    options: [
      { label: 'Unicorn' },
      { label: 'Dragon' },
      { label: 'Phoenix' }
    ]
  },
  {
    key: 'question3',
    question: 'What’s your ideal vacation spot?',
    options: [
      { label: 'Tropical Beach'},
      { label: 'Mountain Retreat' },
      { label: 'City Adventure' }
    ]
  },
  {
    key: 'question4',
    question: 'What color would you choose to wear to a magical gathering?',
    options: [
      { label: 'Silver' },
      { label: 'Gold' },
      { label: 'Emerald Green' }
    ]
  },
  {
    key: 'question5',
    question: 'If you could have one superpower, what would it be?',
    options: [
      { label: 'Teleportation' },
      { label: 'Invisibility' },
      { label: 'Mind Control' }
    ]
  },
  {
    key: 'question7',
    question: 'Which of these magical tools would you use?',
    options: [
      { label: 'Wand' },
      { label: 'Crystal Ball' },
      { label: 'Book of Spells' }
    ]
  },
  {
    key: 'question8',
    question: 'What’s your ideal place to meditate?',
    options: [
      { label: 'In a Forest' },
      { label: 'Beside a Waterfall' },
      { label: 'On a Mountain Top' }
    ]
  },
  {
    key: 'question9',
    question: 'Which of these would you rather be?',
    options: [
      { label: 'A Sorceress' },
      { label: 'A Witch' },
      { label: 'A Priestess' }
    ]
  },
  {
    key: 'question10',
    question: 'What’s your favorite form of art?',
    options: [
      { label: 'Painting' },
      { label: 'Sculpture' },
      { label: 'Music' }
    ]
  },
  {
    key: 'question12',
    question: 'If you could live in a fantasy world, where would you live?',
    options: [
      { label: 'Underwater Kingdom' },
      { label: 'Floating City' },
      { label: 'Forest Village' }
    ]
  },
  {
    key: 'question13',
    question: 'Which of these would you take with you on an adventure?',
    options: [
      { label: 'Map' },
      { label: 'Magical Sword' },
      { label: 'Potion' }
    ]
  },
  {
    key: 'question14',
    question: 'What’s your dream job in a magical world?',
    options: [
      { label: 'Potion Master' },
      { label: 'Queen' },
      { label: 'Divination Expert' }
    ]
  },
  {
    key: 'question15',
    question: 'Which of these mystical flowers would you have in your garden?',
    options: [
      { label: 'Lotus' },
      { label: 'Rose' },
      { label: 'Sunflower' }
    ]
  },
  {
    key: 'question16',
    question: 'Which of these spells would you cast?',
    options: [
      { label: 'Healing Spell' },
      { label: 'Protection Spell' },
      { label: 'Love Spell' }
    ]
  },
  {
    key: 'question17',
    question: 'Which gemstone do you connect with?',
    options: [
      { label: 'Amethyst' },
      { label: 'Sapphire' },
      { label: 'Ruby' }
    ]
  },
  {
    key: 'question18',
    question: 'What would your magical power be?',
    options: [
      { label: 'Mind-Reading' },
      { label: 'Invisibility' },
      { label: 'Flying' }
    ]
  },
  {
    key: 'question19',
    question: 'What’s your favorite magical creature?',
    options: [
      { label: 'Dragon' },
      { label: 'Unicorn' },
      { label: 'Griffin' }
    ]
  },
  {
    key: 'question21',
    question: 'Which mythical object would you want to possess?',
    options: [
      { label: 'Magic Mirror' },
      { label: 'Flying Carpet' },
      { label: 'Phoenix Feather' }
    ]
  },
  {
    key: 'question22',
    question: 'Which ancient civilization fascinates you?',
    options: [
      { label: 'Egyptians' },
      { label: 'Greeks' },
      { label: 'Vikings' }
    ]
  },
  {
    key: 'question24',
    question: 'Which of these places would you travel to?',
    options: [
      { label: 'Enchanted Forest' },
      { label: 'Crystal Cave' },
      { label: 'Floating Island' }
    ]
  },
  {
    key: 'question26',
    question: 'What would your magical name be?',
    options: [
      { label: 'Aurora' },
      { label: 'Selene' },
      { label: 'Lilith' }
    ]
  },
  {
    key: 'question27',
    question: 'Which of these landscapes do you feel most connected to?',
    options: [
      { label: 'Mountain' },
      { label: 'Beach' },
      { label: 'Desert' }
    ]
  },
  {
    key: 'question29',
    question: 'Which one would you use to protect yourself from evil?',
    options: [
      { label: 'Amulet' },
      { label: 'Magic' },
      { label: 'The Power of Love' }
    ]
  },
  {
    key: 'question30',
    question: 'Which magical profession would you want to pursue?',
    options: [
      { label: 'Sorcerer' },
      { label: 'Seer' },
      { label: 'Alchemist' }
    ]
  }
];

const feelingQuestion = {
  key: 'feeling',
  question: 'How are you feeling today?',
  input: true
};

let randomizedQuestions = [];
let selectedAnswers = {};
let userFeeling = '';
let questionIndex = 0;

const questionArea = document.getElementById('question-area');
const resultArea = document.getElementById('result-area');

function startQuiz(cardNumber) {
  const flipCard = document.querySelectorAll('.card');
  flipCard.forEach(card => card.style.pointerEvents = 'none');
  document.querySelector('.card-wrapper').style.display = 'none';
  drawCard();
}

function drawCard() {
  questionArea.innerHTML = '';
  resultArea.innerHTML = '';
  resultArea.style.display = 'none';
  questionArea.style.display = 'block';

  const otherQs = shuffle([...questionsPool]).slice(0, 2);
  randomizedQuestions = shuffle([feelingQuestion, ...otherQs]);

  questionIndex = 0;
  selectedAnswers = {};
  userFeeling = '';
  showNextQuestion();
}

function showNextQuestion() {
  questionArea.innerHTML = '';

  if (questionIndex >= randomizedQuestions.length) {
    showResult();
    return;
  }

  const q = randomizedQuestions[questionIndex];
  const card = document.createElement('div');
  card.className = 'question-card';

  const title = document.createElement('h3');
  title.textContent = q.question;
  card.appendChild(title);

  if (q.input) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Describe your feeling (e.g., happy, tired)...';
    input.oninput = (e) => {
      userFeeling = e.target.value.trim().toLowerCase();
    };
    card.appendChild(input);

    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.onclick = () => {
      if (userFeeling) {
        questionIndex++;
        showNextQuestion();
      } else {
        alert("Please share how you're feeling!");
      }
    };
    card.appendChild(nextBtn);
  } else {
    q.options.forEach(opt => {
      const div = document.createElement('div');
      div.className = 'option';
      div.textContent = opt.label;

      div.onclick = () => {
        selectedAnswers[q.key] = opt.label;
        questionIndex++;
        showNextQuestion();
      };
      card.appendChild(div);
    });
  }

  questionArea.appendChild(card);
}

function showResult() {
  questionArea.style.display = 'none';
  resultArea.style.display = 'block';

  const feelingMessages = {
    happy: "Your joy is contagious 💫! Share your smile and lift someone up today.",
    sad: "It’s okay to feel down 🌧️. Let yourself feel, and remember brighter days are coming.",
    tired: "Rest is productive 🛌. Take time to recharge your cosmic batteries.",
    excited: "The universe is matching your vibe 🌠! Ride that wave of enthusiasm.",
    anxious: "Breathe in courage, breathe out fear 💙. You are safe and grounded.",
    hopeful: "Hope is your magic wand today ✨. Point it at your dreams.",
    lost: "Even stars get lost in galaxies sometimes 🌌. You’re still shining.",
    angry: "Use that fire to forge something new 🔥. Power is yours to shape.",
    peaceful: "Peace is power 🕊️. Stay in your calm glow.",
    creative: "You are a fountain of magic 🎨. Let it flow freely.",
    lonely: "The stars are your friends tonight 🌟. You’re never truly alone.",
    grateful: "Gratitude attracts abundance 🌈. Keep that heart open.",
    inspired: "Now’s the time to act ✍️. Bring your vision into reality.",
    overwhelmed: "Slow down, beautiful soul 🌊. You don’t have to do it all today.",
    determined: "Nothing stands in your way today 🛡️. You are unstoppable.",
    default: "You are radiant no matter how you feel 💖. Trust yourself today."
  };

  const msg = feelingMessages[userFeeling] || feelingMessages.default;

  const resultMsg = `
    <div class="question-card">
      <h3>Your Affirmation ✨</h3>
      <p>${msg}</p>
      <p><strong>
        The universe has your back. You’re exactly where you need to be.
      </strong></p>
    </div>
  `;

  resultArea.innerHTML = resultMsg;

  const pages = [
    { name: 'Opportunities', link: '/opportunities.html' },
    { name: 'Discussion Forum', link: '/forum.html' },
    { name: 'Learning', link: '/learning.html' },
    { name: 'Scholarships', link: '/mentorship.html' },
  ];

  const chosen = pages[Math.floor(Math.random() * pages.length)];
  const redirectBtn = document.createElement('button');
  redirectBtn.textContent = `Go to ${chosen.name} ➡️`;
  redirectBtn.onclick = () => window.location.href = chosen.link;
  
// Send message to Wix instead of redirecting within GitHub Page
redirectBtn.onclick = () => {
  window.parent.postMessage({ wixPage: chosen.link }, '*');
};
  
  resultArea.appendChild(redirectBtn);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
