import { add } from 'date-fns';

const projectsData = {
  currentProjectId: 4 + 5,
  projectsListForExport: [
    {
      name: 'House Bijinesu',
      id: 2 + 5,
    },
    {
      name: 'Getting fit and healthy',
      id: 3 + 5,
    },
  ],
};
const todoData = {
  currentTodoId: 6 + 6,
  todosListForExport: [
    {
      id: 1 + 6,
      dateAdded: add(new Date(), { days: -5, hours: -10 }),
      title: 'Buy Milk',
      desc: '1 liter should do it for this week',
      priority: 2,
      dueDate: add(new Date(), { days: 10, hours: -2 }),
    },
    {
      id: 2 + 6,
      dateAdded: add(new Date(), { days: -7 }),
      title: 'Work out',
      desc: 'Haha as if the gym is boring',
      priority: 3,
      dueDate: add(new Date(), { days: 27 }),
      project: 3 + 5,
    },
    {
      id: 3 + 6,
      dateAdded: add(new Date(), { days: -2 }),
      title: 'Swim',
      desc: 'This I really should be doing more',
      priority: 1,
      dueDate: add(new Date(), { days: 7 }),
      project: 3 + 5,
    },
    {
      id: 4 + 6,
      dateAdded: add(new Date(), { days: -1 }),
      title: 'Bake bread',
      desc: 'If you bake more you save more money',
      priority: 2,
      dueDate: add(new Date(), { days: 12 }),
      project: 2 + 5,
    },
    {
      id: 5 + 6,
      dateAdded: add(new Date(), { days: -10 }),
      title: 'Clean the house',
      desc: 'It\'s really gotten quite dirty',
      priority: 1,
      dueDate: add(new Date(), { days: 1 }),
      project: 2 + 5,
    },
  ],
};

export { todoData, projectsData };
