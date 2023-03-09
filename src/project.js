import compareAsc from 'date-fns/compareAsc';
import parseJSON from 'date-fns/parseJSON';
import isToday from 'date-fns/isToday';
import format from 'date-fns/format';
import isThisWeek from 'date-fns/isThisWeek';

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

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getTodos() {
    return this.todoList;
  }

  getTodosForScreen(filter = 0) {
    const tempTodos = this.todoList.map((todo) => (
      {
        title: todo.title,
        id: todo.id,
        dueDate: todo.dueDate,
        priority: todo.priority,
        completed: todo.completed,
      }
    ))
      .sort((a, b) => {
        if (!a.dueDate) {
          return -1;
        } if (!b.dueDate) return 1;

        return compareAsc(
          parseJSON(a.dueDate),
          parseJSON(b.dueDate),
        );
      });
      // 0 - all, 1 - today, 2 - upcoming week
    if (+filter === 1) {
      return tempTodos.filter((todo) => isToday(parseJSON(todo.dueDate)));
    }
    if (+filter === 2) {
      const today = format(new Date(), 'i');
      return tempTodos.filter(
        (todo) => isThisWeek(parseJSON(todo.dueDate), { weekStartsOn: today }),
      );
    }
    return tempTodos;
  }
}

export default Project;
