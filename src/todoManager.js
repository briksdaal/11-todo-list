import Todo from './todo';
import Project from './project';
import ProjectList from './projectList';
import { todoData as seedTodosJSON, projectsData as seedProjectsJSON } from './dataSeed';

class TodoManager {
  constructor(bool) {
    if (bool) { localStorage.clear(); }
    this.projectList = new ProjectList();
    TodoManager.seedLocalStorage();
    this.loadFromLocalStorage();
  }

  static seedLocalStorage() {
    if (!localStorage.getItem('projectsJSON')) {
      localStorage.setItem('projectsJSON', JSON.stringify(seedProjectsJSON));
    }
    if (!localStorage.getItem('todosJSON')) {
      localStorage.setItem('todosJSON', JSON.stringify(seedTodosJSON));
    }
  }

  loadFromLocalStorage() {
    const projectsJSON = localStorage.getItem('projectsJSON');
    const todosJSON = localStorage.getItem('todosJSON');
    if (!projectsJSON || !todosJSON) {
      localStorage.clear();
      return;
    }
    const projectsData = JSON.parse(projectsJSON);
    projectsData.projectsListForExport.forEach((project) => {
      this.addProject(
        Project.applyData(project),
      );
    });
    Project.setIdPoint(projectsData.currentProjectId);
    this.updateLocalStorage();

    const todosData = JSON.parse(todosJSON);
    todosData.todosListForExport.forEach((todo) => {
      this.addTodo(
        Todo.applyData(todo),
      );
    });
    Todo.setIdPoint(todosData.currentTodoId);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('projectsJSON', this.exportProjectsJSON());
    localStorage.setItem('todosJSON', this.exportTodosJSON());
  }

  findTodo(todoId) {
    return this.projectList.findTodo(todoId);
  }

  addTodo(todoItem) {
    this.projectList.addTodoToProjects(todoItem);
    this.updateLocalStorage();
  }

  removeTodo(todoItem) {
    this.projectList.removeTodoFromProjects(todoItem);
    this.updateLocalStorage();
  }

  changeTodoProject(todoItem, projectItem) {
    this.projectList.changeTodoProject(todoItem, projectItem);
    this.updateLocalStorage();
  }

  updateTodo(todoItem, prop) {
    todoItem.update(prop);
    this.updateLocalStorage();
  }

  markTodoAsCompleted(todoItem) {
    todoItem.setCompleted();
    this.updateLocalStorage();
  }

  markTodoAsUncompleted(todoItem) {
    todoItem.setUncompleted();
    this.updateLocalStorage();
  }

  findProject(projectId) {
    return this.projectList.findProject(projectId);
  }

  addProject(projectItem) {
    this.projectList.addProject(projectItem);
    this.updateLocalStorage();
  }

  removeProject(projectItem) {
    this.projectList.removeProject(projectItem);
    this.updateLocalStorage();
  }

  setProjectName(projectItem, name) {
    projectItem.setName(name);
    this.updateLocalStorage();
  }

  exportProjectsJSON() {
    const projectsListForExport = this.projectList.exportProjects();
    const currentProjectId = Project.getIdPoint();
    return JSON.stringify({ projectsListForExport, currentProjectId });
  }

  exportTodosJSON() {
    const todosListForExport = this.projectList.exportTodos();
    const currentTodoId = Todo.getIdPoint();
    return JSON.stringify({ todosListForExport, currentTodoId });
  }
}

export default TodoManager;
