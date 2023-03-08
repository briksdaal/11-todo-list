import initalize from './initialize';
import TodoManager from './todoManager';
import Todo from './todo';
import Project from './project';
import './style.css';

initalize();
const todoManagerInst = new TodoManager(true);
// todoManagerInst.addProject(new Project('asd'));
// todoManagerInst.removeTodo(todoManagerInst.findTodo(7));
// todoManagerInst.removeProject(todoManagerInst.findProject(17));

console.table(todoManagerInst.projectList.defaultProject.getTodos());
console.table(todoManagerInst.projectList.getProjects());
