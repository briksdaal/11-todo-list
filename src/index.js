import { add } from 'date-fns';
import initalize from './initialize';
import Todo from './todo';
import idGenerator from './idGenerator';
import './style.css';

initalize();

const todo1 = new Todo('Go to school', 'I should go and learn things', add(new Date(), { days: -3 }), 3);
console.log(todo1);

const id = idGenerator();
console.log(id());
console.log(id());
