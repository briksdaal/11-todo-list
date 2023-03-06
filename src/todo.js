class Todo {
  id = 1;

  constructor(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dateAdded = new Date();
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = id;
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
