let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today


export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'In Delay 20 min',
    start: '2021-09-06'
  },
  {
    id: createEventId(),
    title: '08:50 - 16:50',
    start: todayStr
  }
]

export function createEventId() {
  return String(eventGuid++)
}