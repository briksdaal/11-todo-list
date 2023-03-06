class Todo {
  constructor(title, desc, dueDate, priority) {
    this.id = Todo.id;
    Todo.setIdPoint(Todo.id + 1);
    this.title = title;
    this.desc = desc;
    this.dateAdded = new Date();
    this.dueDate = dueDate;
    this.priority = priority;
  }

  static id = 1;

  static setIdPoint(newId) {
    this.id = newId;
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
}

export default Todo;
