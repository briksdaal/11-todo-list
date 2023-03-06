import { add } from 'date-fns';
import initalize from './initialize';
import Todo from './todo';
import './style.css';

initalize();

const todo1 = new Todo('Go to school', 'I should go and learn things', add(new Date(), { days: -3 }), 3);
const todo2 = new Todo('Go to school', 'I should go and learn things', add(new Date(), { days: -3 }), 3);
Todo.setIdPoint(4);
const todo3 = new Todo('Go to school', 'I should go and learn things', add(new Date(), { days: -3 }), 3);
console.log(todo1);
console.log(todo2);
console.log(todo3);
