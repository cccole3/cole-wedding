interface Page {
  id: string
  name: string
  link: string
}

// const home: Page = {
//   id: 'home',
//   name: 'Home',
//   link: '/',
// }
const story: Page = {
  id: 'story',
  name: 'Our Story',
  link: '/story',
}
const party: Page = {
  id: 'party',
  name: 'Wedding Party',
  link: '/party',
}
const travel: Page = {
  id: 'travel',
  name: 'Travel',
  link: '/travel',
}
const todo: Page = {
  id: 'todo',
  name: 'Things To Do',
  link: '/todo',
}
const schedule: Page = {
  id: 'schedule',
  name: 'Schedule of Events',
  link: '/schedule',
}
const photos: Page = {
  id: 'photos',
  name: 'Photos',
  link: '/photos',
}
const registry: Page = {
  id: 'registry',
  name: 'Registry',
  link: '/registry',
}
const rsvp: Page = {
  id: 'rsvp',
  name: 'RSVP',
  link: '/rsvp',
}
export const Pages = [
  story,
  party,
  travel,
  todo,
  schedule,
  photos,
  registry,
  rsvp,
]
