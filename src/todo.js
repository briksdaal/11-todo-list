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

  static getIdPoint() {
    return this.id;
  }

  static setIdPoint(newId) {
    this.id = newId;
  }

  static applyData(json) {
    return Object.assign(new Todo(), json);
  }

  getJson() {
    return JSON.stringify(this);
  }

  update(prop) {
    Object.assign(this, prop);
  }

  setCompleted() {
    this.completed = true;
  }

  setUncompleted() {
    this.completed = false;
  }

  // getTitle() {
  //   return this.title;
  // }

  // getDesc() {
  //   return this.desc;
  // }

  // getDueDate() {
  //   return this.dueDue;
  // }

  // getDateAdded() {
  //   return this.dateAdded;
  // }

  // getPriority() {
  //   return this.priority;
  // }

  // setTitle(title) {
  //   this.title = title;
  // }

  // setDesc(desc) {
  //   this.desc = desc;
  // }

  // setDueDate(dueDate) {
  //   this.dueDate = dueDate;
  // }

  // setDateAdded(dateAdded) {
  //   this.dateAdded = dateAdded;
  // }

  // setPriority(priority) {
  //   this.priority = priority;
  // }

  setProject(project) {
    this.project = project;
  }

  getProject() {
    return this.project;
  }
}

export default Todo;
