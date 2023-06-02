// interface Todo {
//   id: string;
//   text: string;
// }
//
class Todo {
  //ts 에서는 class constructor 위에서 id/text를 해준다
  id: string;
  text: string;
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}
export default Todo;
