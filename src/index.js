import initalize from './initialize';
import TodoManager from './todoManager';
import Todo from './todo';
import Project from './project';
import './style.css';
import add from 'date-fns/add';

initalize();
const todoManagerInst = new TodoManager(true);
// todoManagerInst.addProject(new Project('asd'));
// todoManagerInst.removeTodo(todoManagerInst.findTodo(7));
// todoManagerInst.removeProject(todoManagerInst.findProject(17));

// todoManagerInst.addProject(TodoManager.createProject({ name: 'proj' }));
// todoManagerInst.addTodo(TodoManager.createTodo({ title: '222tasdf', dueDate: add(new Date(), { days: -80 }) }));
// todoManagerInst.addTodo(TodoManager.createTodo({ title: '55222tasdf' }));
// todoManagerInst.addTodo(TodoManager.createTodo({ title: '222tasdf', dueDate: add(new Date(), { days: +80 }) }));
// todoManagerInst.addTodo(TodoManager.createTodo({ title: '8865222tasdf' }));
// todoManagerInst.removeTodo(todoManagerInst.findTodo(12));

console.table(todoManagerInst.projectList.defaultProject.getTodosForScreen());
// console.table(todoManagerInst.projectList.getProjects());
