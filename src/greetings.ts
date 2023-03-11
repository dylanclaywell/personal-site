const greetings = [
  'Hello',
  'Howdy',
  'Hi',
  'Hey there',
  "What's up",
  'Greetings',
  'Salutations',
  'Welcome',
]

export function randomGreeting() {
  return greetings[Math.floor(Math.random() * greetings.length)]
}
