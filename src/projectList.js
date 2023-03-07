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

  changeTodoProject(todoItem, project) {
    const curTodoProjectId = todoItem.getProject();
    if (!curTodoProjectId) {
      if (project !== this.defaultProject) {
        project.add(todoItem);
        todoItem.setProject(project.id);
      }
    } else if (curTodoProjectId !== project.id) {
      const curTodoProject = this.findProject(curTodoProjectId);
      curTodoProject.remove(todoItem);
      todoItem.setProject(null);
      if (project !== this.defaultProject) {
        project.add(todoItem);
        todoItem.setProject(project.id);
      }
    }
  }

  findProject(projectIdToBeFound) {
    if (projectIdToBeFound == null || projectIdToBeFound === 1) {
      return this.defaultProject;
    }
    return this.list.find((item) => item.id === projectIdToBeFound);
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
  }
}

export default ProjectList;
