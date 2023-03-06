import Todo from './todo';
import Project from './project';
import ProjectList from './projectList';
import { todoData, projectsData } from './data';

class TodoManager {
  projectList = new ProjectList();

  constructor() {
    projectsData.forEach((project) => {
      this.projectList.addProject(
        Project.applyData(project),
      );
    });

    todoData.forEach((todo) => {
      this.addTodo(Todo.applyData(todo));
    });
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
}

export default TodoManager;
