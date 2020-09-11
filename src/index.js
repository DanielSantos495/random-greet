const messages = [
  'Hola',
  'Hey!!',
  'Hey bro!!',
  '¡Buen día!',
  '¿Como sería?',
  '¡Peguelo!',
];

const randomMsg = () => message = messages[ Math.floor( Math.random() * messages.length ) ];

console.log(randomMsg());

module.exports = { randomMsg };