import initalize from './initialize';
import TodoManager from './todoManager';
import Todo from './todo';
import Project from './project';
import './style.css';

initalize();
const todoManagerInst = new TodoManager();

// localStorage.clear();

const log = todoManagerInst.projectList.defaultProject.getTodos();
console.log('instance state:');
console.log(todoManagerInst);
console.log('end');
console.log(`cur: ${Project.getIdPoint()}`);
console.log(`cur: ${Todo.getIdPoint()}`);
