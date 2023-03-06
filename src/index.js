import { add } from 'date-fns';
import initalize from './initialize';
import Todo from './todo';
import Project from './project';
import ProjectList from './projectList';
import './style.css';

initalize();

const projects = [
  {
    name: 'House Bijinesu',
  },
  {
    name: 'Getting fit and healthy',
  },
];

const todos = [
  {
    dateAdded: add(new Date(), { days: -5, hours: -10 }),
    title: '1 Buy Milk',
    desc: '1 liter should do it for this week',
    priority: 2,
    dueDate: add(new Date(), { days: 10, hours: -2 }),
  },
  {
    dateAdded: add(new Date(), { days: -7 }),
    title: '2 Work out',
    desc: 'Haha as if the gym is boring',
    priority: 3,
    dueDate: add(new Date(), { days: 1 }),
    project: 3,
  },
  {
    dateAdded: add(new Date(), { days: -2 }),
    title: '3 Swim',
    desc: 'This I really should be doing more',
    priority: 1,
    dueDate: add(new Date(), { days: 7 }),
    project: 3,
  },
  {
    dateAdded: add(new Date(), { days: -1 }),
    title: '4 Bake bread',
    desc: 'If you bake more you save more money',
    priority: 2,
    dueDate: add(new Date(), { days: 12 }),
    project: 2,
  },
  {
    title: '5 Clean the house',
    desc: 'It\'s really gotten quite dirty',
    priority: 1,
    dueDate: add(new Date(), { days: 1 }),
    project: 2,
  },
];

const projectList = new ProjectList();

projects.forEach((project) => {
  projectList.add(
    Project.applyData(project),
  );
});

todos.forEach((todo) => {
  projectList.addTodoToProjects(Todo.applyData(todo));
});

projectList.getProjects().forEach((project) => {
  console.table(project);
});

console.log('break');

// const todoI = projectList.findTodo(4);
// projectList.removeTodoFromProjects(todoI);

// projectList.getProjects().forEach((project) => {
//   console.table(project);
// });

// console.table();
// console.table(defaultProject.getTodos());

projectList.removeProject(projectList.findProject(3));

projectList.getProjects().forEach((project) => {
  console.table(project);
});
