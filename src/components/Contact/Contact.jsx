import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function Contact({ contacts: { id, name, number }, onDelete }) {
  return (
    <div className={s.contacts}>
      <div>
        <div className={s.icon}>
          <FaUser />
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.icon}>
          <FaPhone />
          <p className={s.name}>{number}</p>
        </div>
      </div>
      <div>
        <button className={s.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}