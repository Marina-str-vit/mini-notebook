import s from './Todo.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';

export default function Todo({ todos: { id, text }, onDelete, index }) {
  return (
    <div className={s.todo}>
      <div className={s.textTodo}>#{index + 1}</div>
      <div>{text}</div>
      <RiDeleteBinLine
        className={s.btn}
        type="button"
        onClick={() => onDelete(id)}
      />
    </div>
  );
}
