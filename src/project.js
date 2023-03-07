class Project {
  todoList = [];

  constructor(name) {
    this.id = Project.id;
    Project.setIdPoint(Project.id + 1);
    this.name = name;
  }

  static id = 1;

  static getIdPoint() {
    return this.id;
  }

  static setIdPoint(newId) {
    this.id = newId;
  }

  static applyData(json) {
    return Object.assign(new Project(), json);
  }

  add(todoItem) {
    this.todoList.push(todoItem);
  }

  find(itemIdToBeFound) {
    return this.todoList.find((item) => item.id === itemIdToBeFound);
  }

  remove(itemToBeRemoved) {
    const index = this.todoList.indexOf(itemToBeRemoved);
    if (index === -1) { return; }
    this.todoList.splice(index, 1);
  }

  // getName() {
  //   return this.name;
  // }

  setName(name) {
    this.name = name;
  }

  getTodos() {
    return this.todoList;
  }

  getTodosMinimized() {
    return this.todoList.map((todo) => (
      {
        title: todo.title,
        dueDate: todo.dueDate,
        priority: todo.priority,
      }
    ));
  }
}

export default Project;
