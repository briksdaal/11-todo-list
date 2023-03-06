import Project from './project';

class ProjectList {
  list = [];

  defaultProject = new Project();

  constructor(name) {
    this.name = name;
  }

  add(project) {
    this.list.push(project);
  }

  find(listIdToBeFound) {
    return this.list.find((item) => item.id === listIdToBeFound);
  }

  remove(listToBeRemoved) {
    const index = this.list.indexOf(listToBeRemoved);
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
    return this.list;
  }
}

export default ProjectList;
