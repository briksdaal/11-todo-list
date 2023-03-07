import Todo from './todo';
import Project from './project';
import ProjectList from './projectList';
import {
  todosJSON as seedTodosJSON,
  projectsJSON as seedProjectsJSON,
} from './dataJson';

class TodoManager {
  constructor() {
    this.projectList = new ProjectList();
    TodoManager.seedLocalStorage();
    this.loadFromLocalStorage();
  }

  static seedLocalStorage() {
    if (!localStorage.getItem('projectsJSON')) {
      localStorage.setItem('projectsJSON', seedProjectsJSON);
    }
    if (!localStorage.getItem('todosJSON')) {
      localStorage.setItem('todosJSON', seedTodosJSON);
    }
  }

  loadFromLocalStorage() {
    const projectsJSON = localStorage.getItem('projectsJSON');
    const todosJSON = localStorage.getItem('todosJSON');
    if (!projectsJSON || !todosJSON) { return; }

    const projectsData = JSON.parse(projectsJSON);
    projectsData.projectsListForExport.forEach((project) => {
      this.addProject(
        Project.applyData(project),
      );
    });
    Project.setIdPoint(projectsData.currentProjectId);

    const todosData = JSON.parse(todosJSON);
    todosData.todosListForExport.forEach((todo) => {
      this.addTodo(
        Todo.applyData(todo),
      );
    });
    Todo.setIdPoint(todosData.currentTodoId);
  }

  updateLocalStorage() {
    localStorage.setItem('projectsJSON', this.exportProjectsJSON());
    localStorage.setItem('todosJSON', this.exportTodosJSON());
  }

  findTodo(todoId) {
    return this.projectList.findTodo(todoId);
  }

  addTodo(todoItem) {
    if (todoItem.project) {
      const projectToAddTo = this.projectList.findProject(todoItem.project);
      projectToAddTo.add(todoItem);
    }
    this.projectList.defaultProject.add(todoItem);
    this.updateLocalStorage();
  }

  removeTodo(todoItem) {
    if (todoItem.project) {
      const projectToBeRemovedFrom = this.projectList.findProject(todoItem.project);
      projectToBeRemovedFrom.remove(todoItem);
    }
    this.projectList.defaultProject.remove(todoItem);
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
