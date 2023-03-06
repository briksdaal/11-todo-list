import Project from './project';

class ProjectList {
  list = [];

  defaultProject = new Project('default');

  addTodoToProjects(todoItem) {
    if (todoItem.project) {
      const projectToAddTo = this.findProject(todoItem.project);
      projectToAddTo.add(todoItem);
    }
    this.defaultProject.add(todoItem);
  }

  removeTodoFromProjects(todoItem) {
    if (todoItem.project) {
      const projectToBeRemovedFrom = this.findProject(todoItem.project);
      projectToBeRemovedFrom.remove(todoItem);
    }
    this.defaultProject.remove(todoItem);
  }

  addProject(project) {
    this.list.push(project);
  }

  findProject(projectToBeFound) {
    return this.list.find((item) => item.id === projectToBeFound);
  }

  findTodo(todoId) {
    return this.defaultProject.find(todoId);
  }

  removeProject(projectToBeRemoved) {
    projectToBeRemoved.getTodos().forEach((todo) => {
      todo.setProject(null);
    });

    const index = this.list.indexOf(projectToBeRemoved);
    if (index === -1) { return; }
    this.list.splice(index, 1);
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getProjects() {
    return [this.defaultProject, ...this.list];
  }
}

export default ProjectList;
