class Project {
  todoList = [];

  constructor(name) {
    this.name = name;
  }

  add(todoItem) {
    this.todoList.push(todoItem);
  }

  remove(todoItem) {
    this.todoList.forEach(todoItem);
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

export default Project;
