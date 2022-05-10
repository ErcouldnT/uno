colors = ["blue", "green", "yellow", "red"]; // add number
specials = ["+4", "changeColor"]; // add color
defaultCards = ["+2", "block", "changeDir"] // add color

let deck = [];

// adds 36+4 includes zeros
for (let i = 0; i < colors.length; i++) {
  // adds 4 zeros
  for (let j = 0; j < 10; j++) {
    const color = colors[i];
    const card = {
      color,
      number: j
    };
    deck.push(card);
  };
};

// adds 36
for (let i = 0; i < colors.length; i++) {
  for (let j = 1; j < 10; j++) {
    const color = colors[i];
    const card = {
      color,
      number: j
    };
    deck.push(card);
  };
};

// for 12 default cards
for (let i = 0; i < colors.length; i++) {
  for (let j = 0; j < defaultCards.length; j++) {
    const color = colors[i];
    const name = defaultCards[j];
    const card = {
      special: true,
      color,
      name
    };
    deck.push(card);
  };
};

// for 12 default cards
for (let i = 0; i < colors.length; i++) {
  for (let j = 0; j < defaultCards.length; j++) {
    const color = colors[i];
    const name = defaultCards[j];
    const card = {
      special: true,
      color,
      name
    };
    deck.push(card);
  };
};

deck.push({
  special: true,
  name: "shuffleAllHands"
});

// adds 4 (change color) + 4 (+4)
for (let i = 1; i < 5; i++) {
  for (let j = 0; j < specials.length; j++) {
    const card = {
      special: true,
      name: specials[j]
    };
    deck.push(card);
  };
};

const inPlaceShuffle = array => {
  for (let i = 0; i < array.length; i += 1) {
    const randomIndex = Math.floor(Math.random() * array.length);
    // Exchange a[i] and a[j]
    [array[randomIndex], array[i]] = [array[i], array[randomIndex]];
  };
  return array;
};

inPlaceShuffle(deck);

console.log(deck);
console.log(deck.length);
