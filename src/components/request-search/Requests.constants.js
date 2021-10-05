export const REQUEST_SORT_FILTERS = [
  {
    displayText: 'Posted Date (desc)',
    value: { sortOn: 'postedDate', sortDir: 'desc' },
    checked: true,
  },
  {
    displayText: 'Posted Date (asc)',
    value: { sortOn: 'postedDate', sortDir: 'asc' },
    checked: false,
  },
  {
    displayText: 'Likes Count (desc)',
    value: { sortOn: 'likesCount', sortDir: 'desc' },
    checked: false,
  },
  {
    displayText: 'Likes Count (asc)',
    value: { sortOn: 'likesCount', sortDir: 'asc' },
    checked: false,
  },
  {
    displayText: 'Location (desc)',
    value: { sortOn: 'location', sortDir: 'desc' },
    checked: false,
  },
  {
    displayText: 'Location (asc)',
    value: { sortOn: 'location', sortDir: 'asc' },
    checked: false,
  },
];
