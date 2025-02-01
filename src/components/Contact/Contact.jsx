import s from "./Contact.module.css";
// import { FaUser } from "react-icons/fa";
// import { FaPhone } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
export default function Contact({ contacts: { id, text }, onDelete }) {
  return (
    <div className={s.contacts}>
      <div className={s.title}>
        TODO # {id}
      </div>
      <p>{text}</p>
      <button className={s.btn} type="button" onClick={() => onDelete(id)}>
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
}

