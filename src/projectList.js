import Project from './project';

class ProjectList {
  list = [];

  defaultProject = new Project('All Tasks');

  findTodo(todoId) {
    return this.defaultProject.find(todoId);
  }

  addTodoToProjects(todoItem) {
    if (!todoItem) {
      console.log('addTodoToProjects error');
      return;
    }
    if (todoItem.project && todoItem.project !== 1) {
      const projectToAddTo = this.findProject(todoItem.project);
      if (projectToAddTo) {
        projectToAddTo.add(todoItem);
      } else {
        todoItem.setProject(null);
      }
    }
    this.defaultProject.add(todoItem);
  }

  removeTodoFromProjects(todoItem) {
    if (!todoItem) {
      console.log('removeTodoFromProjects error');
      return;
    }
    if (todoItem.project && todoItem.project !== 1) {
      const projectToBeRemovedFrom = this.findProject(todoItem.project);
      projectToBeRemovedFrom.remove(todoItem);
    }
    this.defaultProject.remove(todoItem);
  }

  changeTodoProject(todoItem, project) {
    if (!todoItem) {
      console.log('changeTodoProject error');
      return;
    }
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
    if (projectIdToBeFound == null || projectIdToBeFound === 1 || projectIdToBeFound === 0) {
      return this.defaultProject;
    }
    return this.list.find((item) => item.id === projectIdToBeFound);
  }

  addProject(project) {
    if (!project) {
      console.log('addProject error');
      return;
    }
    this.list.push(project);
  }

  removeProject(projectToBeRemoved) {
    if (!projectToBeRemoved) {
      console.log('removeProject error');
      return;
    }
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
