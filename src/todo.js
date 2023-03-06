class Todo {
  constructor(title, desc, dueDate, priority, dateAdded = new Date(), project = null) {
    this.id = Todo.id;
    Todo.setIdPoint(Todo.id + 1);
    this.project = project;
    this.title = title;
    this.desc = desc;
    this.dateAdded = dateAdded;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  static id = 1;

  static setIdPoint(newId) {
    this.id = newId;
  }

  static applyData(json) {
    return Object.assign(new Todo(), json);
  }

  getTitle() {
    return this.title;
  }

  getDesc() {
    return this.desc;
  }

  getDueDate() {
    return this.dueDue;
  }

  getDateAdded() {
    return this.dateAdded;
  }

  getPriority() {
    return this.priority;
  }

  getProject() {
    return this.project;
  }

  setTitle(title) {
    this.title = title;
  }

  setDesc(desc) {
    this.desc = desc;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  setDateAdded(dateAdded) {
    this.dateAdded = dateAdded;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  setProject(project) {
    this.project = project;
  }
}

export default Todo;
