import Todo from './todo';
import Project from './project';
import ProjectList from './projectList';
// import { todoData, projectsData } from './data';
// import { todosJSON, projectsJSON } from './dataJson';

class TodoManager {
  projectList = new ProjectList();

  constructor() {
    this.loadFromLocalStorage();
    // projectsData.forEach((projectJson) => {
    //   this.addProject(
    //     Project.applyData(projectJson),
    //   );
    // });

    // todoData.forEach((todoJson) => {
    //   this.addTodo(Todo.applyData(todoJson));
    // });
  }

  loadFromLocalStorage() {
    const projectsJSON = localStorage.getItem('projectsJSON');
    const projectsData = JSON.parse(projectsJSON);
    projectsData.projectsListForExport.forEach((project) => {
      this.addProject(
        Project.applyData(project),
      );
    });
    Project.setIdPoint(projectsData.currentProjectId);

    const todosJSON = localStorage.getItem('todosJSON');
    const todosData = JSON.parse(todosJSON);
    todosData.todosListForExport.forEach((todo) => {
      this.addTodo(
        Todo.applyData(todo),
      );
    });
    Todo.setIdPoint(todosData.currentTodoId);
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
  }

  removeTodo(todoItem) {
    if (todoItem.project) {
      const projectToBeRemovedFrom = this.projectList.findProject(todoItem.project);
      projectToBeRemovedFrom.remove(todoItem);
    }
    this.projectList.defaultProject.remove(todoItem);
  }

  findProject(projectId) {
    return this.projectList.findProject(projectId);
  }

  addProject(projectItem) {
    return this.projectList.addProject(projectItem);
  }

  removeProject(projectItem) {
    return this.projectList.removeProject(projectItem);
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
