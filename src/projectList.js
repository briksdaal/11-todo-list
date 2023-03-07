import Project from './project';

class ProjectList {
  list = [];

  defaultProject = new Project('default');

  findTodo(todoId) {
    return this.defaultProject.find(todoId);
  }

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

  findProject(projectToBeFound) {
    return this.list.find((item) => item.id === projectToBeFound);
  }

  addProject(project) {
    this.list.push(project);
  }

  removeProject(projectToBeRemoved) {
    projectToBeRemoved.getTodos().forEach((todo) => {
      todo.setProject(null);
    });

    const index = this.list.indexOf(projectToBeRemoved);
    if (index === -1) { return; }
    this.list.splice(index, 1);
  }

  getProjects() {
    return [this.defaultProject, ...this.list];
  }

  exportProjects() {
    return this.list.map((project) => ({
      name: project.name,
      id: project.id,
    }));
  }

  exportTodos() {
    return this.defaultProject.getTodos();
    // .map(
    //   (todo) => {
    //     completed: false
    //     this.id = Todo.id;
    //     Todo.setIdPoint(Todo.id + 1);
    //     this.project = project;
    //     this.title = title;
    //     this.desc = desc;
    //     this.dateAdded = dateAdded;
    //     this.dueDate = dueDate;
    //     this.priority = priority;
    //     this.completed = false;
    //   },
    // );
  }
}

export default ProjectList;
