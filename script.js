function isMoksha(text) {
  return /[\u0400-\u04FF]/.test(text);
}

// hi hacker, obviously when we publish it the lemmas will be on sql
const dictionary = {
  en: {
    "water": {
      canonical: "water",
      pronunciation: "/ˈwɔː.tər/",
      topic: "nature",
      forms: ["water"],
      senses: [
        {
          pos: "noun",
          definition: "clear liquid essential for life",
          translation: "ведь",
          examples: [
            { en: "Drink clean water.", mdf: "Пийте чистай ведень." },
            { en: "The well has fresh water.", mdf: "Колодець ведень пуло." }
          ],
          derivatives: [
            { word: "water bottle", translation: "ведень пуло" }
          ],
          grammar: { plural: "water" }
        }
      ]
    },
    "go": {
      canonical: "go",
      pronunciation: "/ɡoʊ/",
      topic: "action",
      forms: ["go", "goes", "went", "gone", "going"],
      senses: [
        {
          pos: "verb",
          definition: "move from one place to another",
          translation: "пийнемс",
          examples: [
            { en: "I go to school.", mdf: "Мон школась пийнемс." },
            { en: "He went to the market.", mdf: "Ине базарось пийнезь." }
          ],
          derivatives: [
            { word: "goer", translation: "пийнемсель" }
          ],
          grammar: {
            past: "пийнезь",
            present: "пийнемс",
            future: "пийнеть"
          }
        }
      ]
    },
    "good": {
      canonical: "good",
      pronunciation: "/ɡʊd/",
      topic: "evaluation",
      senses: [
        {
          pos: "adjective",
          definition: "of high quality or desirable",
          translation: "чилисема",
          examples: [
            { en: "This is good food.", mdf: "Теня чилисема кедьсэ." },
            { en: "She is a good person.", mdf: "Теня чилисема эряви." }
          ],
          derivatives: [
            { word: "goodness", translation: "чилисемасть" }
          ],
          grammar: { comparative: "чилисемарак", superlative: "чилисемаркс" }
        }
      ]
    },
    "thank you": {
      canonical: "thank you",
      pronunciation: "/θæŋk juː/",
      topic: "social",
      senses: [
        {
          pos: "fixed expression",
          definition: "expression of gratitude",
          translation: "баянень",
          examples: [
            { en: "Thank you for your help.", mdf: "Баянень тонь ломаткс." },
            { en: "Say thank you!", mdf: "Баянень кай!" }
          ],
          derivatives: [],
          grammar: {}
        }
      ]
    },
    "house": {
      canonical: "house",
      pronunciation: "/haʊs/",
      topic: "housing",
      forms: ["house", "houses"],
      senses: [
        {
          pos: "noun",
          definition: "building for living",
          translation: "куду",
          examples: [
            { en: "My house is big.", mdf: "Монь кудома вейке." },
            { en: "They built a new house.", mdf: "Ине вейкекс кудо вийнезь." }
          ],
          derivatives: [
            { word: "household", translation: "кудулга" }
          ],
          grammar: { plural: "кудот" }
        }
      ]
    },
    "eat": {
      canonical: "eat",
      pronunciation: "/iːt/",
      topic: "food",
      forms: ["eat", "eats", "ate", "eaten", "eating"],
      senses: [
        {
          pos: "verb",
          definition: "consume food",
          translation: "пийдемс",
          examples: [
            { en: "We eat rice.", mdf: "Ми рис пийдемс." },
            { en: "He ate bread.", mdf: "Ине лемезь лов." }
          ],
          derivatives: [
            { word: "eater", translation: "пийдемсель" }
          ],
          grammar: {
            past: "пийдезь",
            present: "пийдемс",
            future: "пийдеть"
          }
        }
      ]
    },
    "big": {
      canonical: "big",
      pronunciation: "/bɪɡ/",
      topic: "size",
      senses: [
        {
          pos: "adjective",
          definition: "of considerable size",
          translation: "вейке",
          examples: [
            { en: "A big tree.", mdf: "Вейке мода." },
            { en: "The city is big.", mdf: "Город вейке." }
          ],
          derivatives: [
            { word: "bigness", translation: "вейкесь" }
          ],
          grammar: { comparative: "вейкерак", superlative: "вейкеркс" }
        }
      ]
    },
    "hello": {
      canonical: "hello",
      pronunciation: "/həˈloʊ/",
      topic: "social",
      senses: [
        {
          pos: "fixed expression",
          definition: "greeting",
          translation: "урожамс",
          examples: [
            { en: "Hello, how are you?", mdf: "Урожамс, морамс?" },
            { en: "Say hello to her.", mdf: "Теня урожамс кай!" }
          ],
          derivatives: [],
          grammar: {}
        }
      ]
    },
    "book": {
      canonical: "book",
      pronunciation: "/bʊk/",
      topic: "education",
      forms: ["book", "books"],
      senses: [
        {
          pos: "noun",
          definition: "collection of written pages",
          translation: "книга",
          examples: [
            { en: "Read this book.", mdf: "Теня книга читамс." },
            { en: "I have many books.", mdf: "Мон много книгат." }
          ],
          derivatives: [
            { word: "notebook", translation: "тетрадь" }
          ],
          grammar: { plural: "книгат" }
        }
      ]
    },
    "fire": {
      canonical: "fire",
      pronunciation: "/faɪər/",
      forms: ["fire", "fires", "fired", "firing"],
      senses: [
        {
          pos: "noun",
          topic: "nature",
          definition: "burning material that produces heat and light",
          translation: "полы",
          examples: [
            { en: "Be careful with the fire.", mdf: "Полынь варчамс." },
            { en: "The fire is warm.", mdf: "Полынь сюро." }
          ],
          derivatives: [
            { word: "campfire", translation: "лагерь полы" }
          ],
          grammar: { plural: "полыт" }
        },
        {
          pos: "verb",
          topic: "employment",
          definition: "dismiss someone from a job",
          translation: "работась лисемс",
          examples: [
            { en: "They fired him for being late.", mdf: "Ине лемезь работась лисезь." },
            { en: "She was fired last week.", mdf: "Теня проштынь неделясь работась лисезь." }
          ],
          derivatives: [
            { word: "firing", translation: "работась лисемасть" }
          ],
          grammar: {
            past: "fired",
            pastParticiple: "fired",
            presentParticiple: "firing",
            thirdPerson: "fires"
          }
        }
      ]
    }
  },
  mdf: {
    "ведь": {
      canonical: "ведь",
      pronunciation: "/vedʲ/",
      topic: "nature",
      cefr: "A1",
      forms: ["ведь", "ведень", "ведет"],
      senses: [
        {
          pos: "noun",
          definition: "clear liquid essential for life",
          translation: "water",
          examples: [
            { en: "Water is life.", mdf: "Ведь — эрьва." },
            { en: "Give me water.", mdf: "Монь ведень анай." }
          ],
          derivatives: [
            { word: "ведень пуло", translation: "water bottle" }
          ],
          grammar: { genitive: "ведень", plural: "ведет" }
        }
      ]
    },
    "пийнемс": {
      canonical: "пийнемс",
      pronunciation: "/pijnʲems/",
      topic: "action",
      cefr: "A1",
      forms: ["пийнемс", "пийнезь", "пийнеть"],
      senses: [
        {
          pos: "verb",
          definition: "move from one place to another",
          translation: "go",
          examples: [
            { en: "Go home!", mdf: "Кудось пийнемс!" },
            { en: "I will go tomorrow.", mdf: "Мон завран пийнеть." }
          ],
          derivatives: [
            { word: "пийнемсель", translation: "goer" }
          ],
          grammar: {
            present: "пийнемс",
            past: "пийнезь",
            future: "пийнеть"
          }
        }
      ]
    },
    "чилисема": {
      canonical: "чилисема",
      pronunciation: "/tʃilisema/",
      topic: "evaluation",
      cefr: "A1",
      senses: [
        {
          pos: "adjective",
          definition: "of high quality or desirable",
          translation: "good",
          examples: [
            { en: "Good morning!", mdf: "Чилисема утсо!" },
            { en: "This is good.", mdf: "Теня чилисема." }
          ],
          derivatives: [
            { word: "чилисемасть", translation: "goodness" }
          ],
          grammar: { comparative: "чилисемарак", superlative: "чилисемаркс" }
        }
      ]
    },
    "баянень": {
      canonical: "баянень",
      pronunciation: "/bajanenʲ/",
      topic: "social",
      cefr: "A1",
      senses: [
        {
          pos: "fixed expression",
          definition: "expression of gratitude",
          translation: "thank you",
          examples: [
            { en: "Thank you very much.", mdf: "Баянень мезе." },
            { en: "You're welcome.", mdf: "Савамс." }
          ],
          derivatives: [],
          grammar: {}
        }
      ]
    },
    "куду": {
      canonical: "куду",
      pronunciation: "/kudu/",
      topic: "housing",
      cefr: "A1",
      forms: ["куду", "кудось", "кудот"],
      senses: [
        {
          pos: "noun",
          definition: "building for living",
          translation: "house",
          examples: [
            { en: "My house is here.", mdf: "Монь кудом ине." },
            { en: "Build a house.", mdf: "Кудо вийнемс." }
          ],
          derivatives: [
            { word: "кудулга", translation: "household" }
          ],
          grammar: { inessive: "кудось", plural: "кудот" }
        }
      ]
    },
    "пийдемс": {
      canonical: "пийдемс",
      pronunciation: "/pijdemʲs/",
      topic: "food",
      cefr: "A1",
      forms: ["пийдемс", "пийдезь", "пийдеть"],
      senses: [
        {
          pos: "verb",
          definition: "consume food",
          translation: "eat",
          examples: [
            { en: "Eat your food.", mdf: "Тонь кедьсэ пийдемс." },
            { en: "I ate bread.", mdf: "Мон лов пийдезь." }
          ],
          derivatives: [
            { word: "пийдемсель", translation: "eater" }
          ],
          grammar: {
            present: "пийдемс",
            past: "пийдезь",
            future: "пийдеть"
          }
        }
      ]
    },
    "вейке": {
      canonical: "вейке",
      pronunciation: "/vejke/",
      topic: "size",
      cefr: "A1",
      senses: [
        {
          pos: "adjective",
          definition: "of considerable size",
          translation: "big",
          examples: [
            { en: "Big mountain.", mdf: "Вейке лей." },
            { en: "She is big.", mdf: "Теня вейке." }
          ],
          derivatives: [
            { word: "вейкесь", translation: "bigness" }
          ],
          grammar: { comparative: "вейкерак", superlative: "вейкеркс" }
        }
      ]
    },
    "урожамс": {
      canonical: "урожамс",
      pronunciation: "/uroʒams/",
      topic: "social",
      cefr: "A1",
      senses: [
        {
          pos: "fixed expression",
          definition: "greeting",
          translation: "hello",
          examples: [
            { en: "Hello, friend!", mdf: "Урожамс, ялгамс!" },
            { en: "Say hello.", mdf: "Урожамс кай." }
          ],
          derivatives: [],
          grammar: {}
        }
      ]
    },
    "книга": {
      canonical: "книга",
      pronunciation: "/knʲiga/",
      topic: "education",
      cefr: "A1",
      forms: ["книга", "книгась", "книгат"],
      senses: [
        {
          pos: "noun",
          definition: "collection of written pages",
          translation: "book",
          examples: [
            { en: "This book is interesting.", mdf: "Теня книга интересной." },
            { en: "I read a book.", mdf: "Мон книга читазь." }
          ],
          derivatives: [
            { word: "тетрадь", translation: "notebook" }
          ],
          grammar: { adessive: "книгась", plural: "книгат" }
        }
      ]
    },
    "полы": {
      canonical: "полы",
      pronunciation: "/polɨ/",
      topic: "nature",
      cefr: "A2",
      forms: ["полы", "полынь", "полыт"],
      senses: [
        {
          pos: "noun",
          definition: "burning material that produces heat and light",
          translation: "fire",
          examples: [
            { en: "The fire is out.", mdf: "Полынь сюро." },
            { en: "Make a fire.", mdf: "Полы вийнемс." }
          ],
          derivatives: [
            { word: "лагерь полы", translation: "campfire" }
          ],
          grammar: { genitive: "полынь", plural: "полыт" }
        }
      ]
    }
  }
};

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const directionBtns = document.querySelectorAll('.direction-btn');
const randomBtn = document.getElementById('randomBtn');
const exerciseBtn = document.getElementById('exerciseBtn');
const filterModal = document.getElementById('filterModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const exerciseModal = document.getElementById('exerciseModal');
const closeExerciseModal = document.getElementById('closeExerciseModal');
const virtualKeyboard = document.getElementById('virtualKeyboard');
const keyboardToggleBtn = document.getElementById('keyboardToggleBtn');
let currentDirection = 'en-mdf';

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getRandomWord() {
  const dict = currentDirection === 'en-mdf' ? dictionary.en : dictionary.mdf;
  const words = Object.keys(dict);
  return words[Math.floor(Math.random() * words.length)];
}

function hasLemma(word, direction) {
  const dict = direction === 'en-mdf' ? dictionary.en : dictionary.mdf;
  return !!dict[word];
}

function searchExamples(query, direction) {
  const dict = direction === 'en-mdf' ? dictionary.en : dictionary.mdf;
  const results = [];
  for (let word in dict) {
    const entry = dict[word];
    (entry.senses || [entry]).forEach(sense => {
      sense.examples.forEach(example => {
        const textToSearch = direction === 'en-mdf' ? example.en : example.mdf;
        if (textToSearch.toLowerCase().includes(query)) {
          results.push({
            lemma: word,
            exampleText: example[direction === 'en-mdf' ? 'en' : 'mdf'],
            translationText: example[direction === 'en-mdf' ? 'mdf' : 'en']
          });
        }
      });
    });
  }
  return results;
}

function renderEntry(lemma, entry, direction) {
  const isHeadwordMoksha = isMoksha(entry.canonical);
  let sensesHtml = '';

  if (entry.senses && entry.senses.length > 1) {
    sensesHtml = entry.senses.map((sense, index) => {
      const senseData = sense;
      let examplesHtml = sense.examples.map(example => {
        return `
          <li class="example-item">
            <span class="example-original">${escapeHtml(example.en)}</span>
            <span class="example-translation">${escapeHtml(example.mdf)}</span>
          </li>
        `;
      }).join('');

      let grammarHtml = '';
      if (sense.grammar && Object.keys(sense.grammar).length > 0) {
        grammarHtml = `<ul class="grammar-list">`;
        for (let key in sense.grammar) {
          grammarHtml += `
            <li class="grammar-item">
              <span class="grammar-label">${key}:</span>
              ${escapeHtml(sense.grammar[key])}
            </li>
          `;
        }
        grammarHtml += `</ul>`;
      }

      let derivativesHtml = sense.derivatives.map(derivative => {
        const hasEntry = hasLemma(derivative.word, direction);
        const wordClass = hasEntry ? 'derivative-word linkable' : 'derivative-word';
        const translationClass = isMoksha(derivative.translation) ? 'moksha' : '';
        return `
          <div class="derivative-item">
            <span class="${wordClass}" ${hasEntry ? `data-word="${derivative.word}"` : ''}>${escapeHtml(derivative.word)}</span>
            <div class="derivative-translation ${translationClass}">${escapeHtml(derivative.translation)}</div>
          </div>
        `;
      }).join('');

      const translationClass = isMoksha(senseData.translation) ? 'moksha' : '';

      const sensePos = senseData.pos || entry.pos;
      const senseTopic = senseData.topic || entry.topic;

      let senseTagsHtml = '';
      if (sensePos) {
        senseTagsHtml += `<button class="pos" onclick="showFilterList('pos', '${sensePos}')">${sensePos}</button>`;
      }
      if (senseTopic) {
        senseTagsHtml += `<button class="topic-tag" onclick="showFilterList('topic', '${senseTopic}')">${senseTopic}</button>`;
      }

      return `
        <div class="sense-item">
          <div class="tags-container">${senseTagsHtml}</div>
          <span class="sense-number">${index + 1}.</span>
          <span class="sense-definition">${escapeHtml(senseData.definition)}</span>
          <div class="translation ${translationClass}" onclick="handleTranslationClick('${senseData.translation.replace(/'/g, "\\'")}')"">${escapeHtml(senseData.translation)}</div>
          <div class="section-title">Examples</div>
          <ul class="examples-list">
            ${examplesHtml}
          </ul>
          <div class="section-title">Grammar</div>
          ${grammarHtml}
          <div class="section-title">Derivatives</div>
          <div class="derivatives-list">
            ${derivativesHtml}
          </div>
        </div>
      `;
    }).join('');
  } else {
    const senseData = entry.senses ? entry.senses[0] : entry;
    let examplesHtml = senseData.examples.map(example => {
      return `
        <li class="example-item">
          <span class="example-original">${escapeHtml(example.en)}</span>
          <span class="example-translation">${escapeHtml(example.mdf)}</span>
        </li>
      `;
    }).join('');

    let grammarHtml = '';
    if (senseData.grammar && Object.keys(senseData.grammar).length > 0) {
      grammarHtml = `<ul class="grammar-list">`;
      for (let key in senseData.grammar) {
        grammarHtml += `
          <li class="grammar-item">
            <span class="grammar-label">${key}:</span>
            ${escapeHtml(senseData.grammar[key])}
          </li>
        `;
      }
      grammarHtml += `</ul>`;
    }

    let derivativesHtml = senseData.derivatives.map(derivative => {
      const hasEntry = hasLemma(derivative.word, direction);
      const wordClass = hasEntry ? 'derivative-word linkable' : 'derivative-word';
      const translationClass = isMoksha(derivative.translation) ? 'moksha' : '';
      return `
        <div class="derivative-item">
          <span class="${wordClass}" ${hasEntry ? `data-word="${derivative.word}"` : ''}>${escapeHtml(derivative.word)}</span>
          <div class="derivative-translation ${translationClass}">${escapeHtml(derivative.translation)}</div>
        </div>
      `;
    }).join('');

    const translationClass = isMoksha(senseData.translation) ? 'moksha' : '';

    const sensePos = senseData.pos || entry.pos;
    const senseTopic = senseData.topic || entry.topic;

    let senseTagsHtml = '';
    if (sensePos) {
      senseTagsHtml += `<button class="pos" onclick="showFilterList('pos', '${sensePos}')">${sensePos}</button>`;
    }
    if (senseTopic) {
      senseTagsHtml += `<button class="topic-tag" onclick="showFilterList('topic', '${senseTopic}')">${senseTopic}</button>`;
    }

    sensesHtml = `
      <div class="sense-item">
        <div class="tags-container">${senseTagsHtml}</div>
        <div class="translation ${translationClass}" onclick="handleTranslationClick('${senseData.translation.replace(/'/g, "\\'")}')"">${escapeHtml(senseData.translation)}</div>
        <div class="section-title">Examples</div>
        <ul class="examples-list">
          ${examplesHtml}
        </ul>
        <div class="section-title">Grammar</div>
        ${grammarHtml}
        <div class="section-title">Derivatives</div>
        <div class="derivatives-list">
          ${derivativesHtml}
        </div>
      </div>
    `;
  }

  let cefrHtml = '';
  if (entry.cefr && currentDirection === 'mdf-en') {
    cefrHtml = `<div class="tags-container" style="position:absolute; right:0; top:0;"><button class="level-tag" onclick="showFilterList('cefr', '${entry.cefr}')">${entry.cefr.toUpperCase()}</button></div>`;
  }

  return `
    <div class="entry" style="position:relative;">
      ${cefrHtml}
      <div class="headword ${isHeadwordMoksha ? 'moksha' : ''}">${escapeHtml(entry.canonical)}</div>
      <div class="pronunciation">${escapeHtml(entry.pronunciation)}</div>
      ${sensesHtml}
    </div>
  `;
}

function handleTranslationClick(translationWord) {
  const newDirection = currentDirection === 'en-mdf' ? 'mdf-en' : 'en-mdf';
  showResult(translationWord, newDirection);
  directionBtns.forEach(btn => {
    if (btn.getAttribute('data-direction') === newDirection) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  currentDirection = newDirection;
  searchInput.value = translationWord;
  resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showResult(lemma, forcedDirection = null) {
  const direction = forcedDirection || currentDirection;
  const query = lemma.toLowerCase().trim();

  let entry = null;
  if (direction === 'en-mdf') {
    entry = dictionary.en[query];
  } else {
    entry = dictionary.mdf[query];
  }

  if (entry) {
    resultsContainer.innerHTML = renderEntry(lemma, entry, direction);
    attachEventListeners();
    return;
  }

  const dict = direction === 'en-mdf' ? dictionary.en : dictionary.mdf;
  let foundLemma = null;

  for (let word in dict) {
    const wordEntry = dict[word];
    if (wordEntry && wordEntry.forms && Array.isArray(wordEntry.forms)) {
      if (wordEntry.forms.map(f => f.toLowerCase()).includes(query)) {
        foundLemma = word;
        entry = wordEntry;
        break;
      }
    }
  }

  if (foundLemma) {
    resultsContainer.innerHTML = renderEntry(foundLemma, entry, direction);
    attachEventListeners();
    return;
  }

  const foundInExamples = searchExamples(query, direction);

  if (foundInExamples.length > 0) {
    let examplesHtml = foundInExamples.map(item => {
      const escapedQuery = escapeHtml(query);
      const escapedExample = escapeHtml(item.exampleText);
      const highlightedExample = escapedExample.replace(new RegExp(`(${escapedQuery})`, 'gi'), '<span class="lemma-highlight">$1</span>');
      return `
        <div class="example-match-item">
          <div class="example-original">${highlightedExample}</div>
          <div class="example-translation">${escapeHtml(item.translationText)}</div>
          <button class="goto-lemma-btn" data-word="${item.lemma}"> → View "${item.lemma}" entry</button>
        </div>
      `;
    }).join('');

    resultsContainer.innerHTML = `
      <div class="no-result">
        <p>No lemma found for "${escapeHtml(lemma)}", but it appears in the following example(s):</p>
        <div class="examples-in-context">${examplesHtml}</div>
      </div>
    `;
    attachExampleMatchListeners();
  } else {
    resultsContainer.innerHTML = `<div class="no-result">No entry found for "${escapeHtml(lemma)}"</div>`;
  }
}

function attachEventListeners() {
  document.querySelectorAll('.derivative-word.linkable').forEach(wordEl => {
    wordEl.addEventListener('click', (e) => {
      e.preventDefault();
      const word = wordEl.getAttribute('data-word');
      showResult(word);
      resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function attachExampleMatchListeners() {
  document.querySelectorAll('.goto-lemma-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const word = btn.getAttribute('data-word');
      searchInput.value = word;
      showResult(word);
      resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function showFilterList(type, value) {
  filterModal.style.display = 'block';
  modalTitle.textContent = value.toUpperCase();

  const dict = currentDirection === 'en-mdf' ? dictionary.en : dictionary.mdf;

  const matchingWords = Object.keys(dict).filter(word => {
    const entry = dict[word];
    if (type === 'pos') return entry.pos === value || (entry.senses && entry.senses.some(s => s.pos === value));
    if (type === 'topic') return entry.topic === value || (entry.senses && entry.senses.some(s => s.topic === value));
    if (type === 'cefr') return entry.cefr === value;
  }).sort((a, b) => a.localeCompare(b));

  let listHtml = '<ul class="filter-word-list">';
  matchingWords.forEach(word => {
    listHtml += `<li class="filter-word-item" data-word="${word}">${word}</li>`;
  });
  listHtml += '</ul>';

  modalBody.innerHTML = listHtml;

  document.querySelectorAll('.filter-word-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const word = e.target.getAttribute('data-word');
      searchInput.value = word;
      showResult(word);
      filterModal.style.display = 'none';
      resultsContainer.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function generateExercise() {
  const dict = currentDirection === 'en-mdf' ? dictionary.en : dictionary.mdf;
  const words = Object.keys(dict);
  const correctWord = words[Math.floor(Math.random() * words.length)];
  const entry = dict[correctWord];
  const sense = entry.senses ? entry.senses[0] : entry;
  const question = currentDirection === 'en-mdf' ? sense.translation : correctWord;
  const correctAnswer = currentDirection === 'en-mdf' ? correctWord : sense.translation;

  const incorrectWords = [];
  while (incorrectWords.length < 3) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    if (randomWord === correctWord) continue;

    const randomEntry = dict[randomWord];
    const randomSense = randomEntry.senses ? randomEntry.senses[0] : randomEntry;
    const randomAnswer = currentDirection === 'en-mdf' ? randomWord : randomSense.translation;

    if (!incorrectWords.includes(randomAnswer)) {
      incorrectWords.push(randomAnswer);
    }
  }

  const allAnswers = [correctAnswer, ...incorrectWords].sort(() => Math.random() - 0.5);

  let answersHtml = '';
  allAnswers.forEach(answer => {
    answersHtml += `
      <div class="answer-option" data-answer="${escapeHtml(answer)}">
        ${escapeHtml(answer)}
      </div>
    `;
  });

  const questionText = currentDirection === 'en-mdf'
    ? `What is the English word for: "${question}"?`
    : `What is the Moksha word for: "${question}"?`;

  exerciseModal.querySelector('.modal-body').innerHTML = `
    <div class="exercise-question">${escapeHtml(questionText)}</div>
    <div class="answer-options">${answersHtml}</div>
    <div class="exercise-feedback" style="display:none;"></div>
    <div class="exercise-buttons">
      <button class="exercise-btn-modal next-btn">Next Question</button>
      <button class="exercise-btn-modal close-btn">Close</button>
    </div>
  `;

  exerciseModal.style.display = 'block';

  document.querySelectorAll('.answer-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
      });
      option.classList.add('selected');
      const isCorrect = option.textContent.trim() === correctAnswer.trim();
      if (isCorrect) {
        option.classList.add('correct');
      } else {
        option.classList.add('incorrect');
        document.querySelectorAll('.answer-option').forEach(opt => {
          if (opt.textContent.trim() === correctAnswer.trim()) {
            opt.classList.add('correct');
          }
        });
      }

      const feedback = document.querySelector('.exercise-feedback');
      feedback.style.display = 'block';
      feedback.innerHTML = isCorrect
        ? `<h4>Correct!</h4><p>Well done!</p>`
        : `<h4>Incorrect</h4><p>The correct answer is: <strong>${escapeHtml(correctAnswer)}</strong></p>`;

      document.querySelector('.next-btn').onclick = generateExercise;
      document.querySelector('.close-btn').onclick = () => {
        exerciseModal.style.display = 'none';
      };
    });
  });
}

directionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    directionBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentDirection = btn.getAttribute('data-direction');
    searchInput.value = '';
    resultsContainer.innerHTML = `<div class="about-section" id="aboutSection">
      <div class="section-title">About</div>
      <p class="about-content">bla blabla bla</p>
    </div>`;
  });
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  if (query) {
    showResult(query);
  } else {
    resultsContainer.innerHTML = `<div class="about-section" id="aboutSection">
      <div class="section-title">About</div>
      <p class="about-content">bla blabla bla</p>
    </div>`;
  }
});

randomBtn.addEventListener('click', () => {
  const word = getRandomWord();
  searchInput.value = word;
  showResult(word);
});

exerciseBtn.addEventListener('click', () => {
  generateExercise();
});

closeModal.addEventListener('click', () => {
  filterModal.style.display = 'none';
});

closeExerciseModal.addEventListener('click', () => {
  exerciseModal.style.display = 'none';
});

keyboardToggleBtn.addEventListener('click', () => {
  virtualKeyboard.style.display = virtualKeyboard.style.display === 'none' ? 'block' : 'none';
  keyboardToggleBtn.textContent = virtualKeyboard.style.display === 'none' ? '⌨️ Show Keyboard' : '⌨️ Hide Keyboard';
});

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', () => {
    const action = key.getAttribute('data-action');
    const input = searchInput;
    const char = key.textContent.trim();

    key.classList.add('key-active');
    setTimeout(() => key.classList.remove('key-active'), 150);

    if (action === 'backspace') {
      input.value = input.value.slice(0, -1);
    } else if (action === 'space') {
      input.value += ' ';
    } else if (char) {
      input.value += char;
    }

    input.focus();
    if (input.value.trim()) {
      showResult(input.value);
    }
  });
});
