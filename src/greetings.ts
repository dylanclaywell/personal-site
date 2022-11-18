const greetings = [
  'Hello',
  'Howdy',
  'Hi',
  'Hey there',
  "What's up",
  'Greetings',
  'Salutations',
  'Welcome',
  'Bonjour',
  'Hola',
  'Ciao',
  'Aloha',
  'Konnichiwa',
  'Namaste',
  'Salaam',
  'Shalom',
  'Ni hao',
  'Sawubona',
  'Hallo',
  'Hej',
]

export function randomGreeting() {
  return greetings[Math.floor(Math.random() * greetings.length)]
}
