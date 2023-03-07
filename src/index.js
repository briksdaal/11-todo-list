import initalize from './initialize';
import TodoManager from './todoManager';
import Todo from './todo';
import Project from './project';
import './style.css';

initalize();
const todoManagerInst = new TodoManager();

const proj = todoManagerInst.findProject(2);
const todo = todoManagerInst.findTodo(1);
// console.log(todo);
todoManagerInst.changeTodoProject(todo, proj);
// console.log(todo);

// todoManagerInst.removeProject(proj3);

const log = todoManagerInst.projectList.defaultProject.getTodos();
// console.log('instance state:');
console.table(todoManagerInst.projectList.defaultProject.todoList);
console.log(todoManagerInst);
// console.log('end');
// console.log(`cur: ${Project.getIdPoint()}`);
// console.log(`cur: ${Todo.getIdPoint()}`);
