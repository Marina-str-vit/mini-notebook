import Todo from "../Todo/Todo";
import s from "./TodoList.module.css";

export default function TodoList({ todos, onDelete }) {
  return (
    <ul className={s.menuList}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <li className={s.item} key={todo.id}>
          <Todo todos={todo} index={index} onDelete={onDelete}/> 
        </li>
      ))}
    </ul>
  );
}