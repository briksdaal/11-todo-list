import isDate from 'date-fns/isDate';

class Todo {
  constructor(
    title = null,
    desc = null,
    dueDate = null,
    priority = null,
    dateAdded = new Date(),
    project = null,
  ) {
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
    return Object.assign(
      new Todo(),
      json,
      { dueDate: json.dueDate ? this.dateManager(json.dueDate) : null },
    );
  }

  static dateManager(date) {
    if (isDate(date)) {
      return JSON.parse(JSON.stringify(date));
    }

    return date;
  }

  // static dateParserAndFormatter(date) {
  //   const tempDate = parseJSON(date);
  //   if (!isDate(tempDate)) return date;
  //   return format(tempDate, 'MM/dd/yyyy');
  // }

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
