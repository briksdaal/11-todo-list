import { add } from 'date-fns';
import initalize from './initialize';
import Todo from './todo';
import './style.css';

initalize();

const todo1 = new Todo('Go to school', 'I should go and learn things', add(new Date(), { days: -3 }), 3);
// const todo2 = new Todo('Go to school', 'I should go and learn things', add(new Date(), { days: -3 }), 3);
Todo.setIdPoint(4);
// const todo3 = new Todo('Go to school', 'I should go and learn things', add(new Date(), { days: -3 }), 3);
console.log(todo1);
// console.log(todo2);
// console.log(todo3);

let objprop = {
  dateAdded: add(new Date(), { days: -5 }),
  id: 7,
  title: 'Do this',
  desc: 'Doing this is important for that',
  priority: 2,
  dueDate: new Date(),
};

console.log(objprop);
objprop = Todo.applyData(objprop);
console.log(objprop);
