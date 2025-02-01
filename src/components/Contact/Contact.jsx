import s from "./Contact.module.css";
// import { FaUser } from "react-icons/fa";
// import { FaPhone } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";


export default function Contact({ contacts: { id, text }, onDelete, index }) {
  return (
    <div className={s.contacts}>
      <div className={s.title}>
        TODO # {index + 1}
      </div>
      <p>{text}</p>
      <button className={s.btn} type="button" onClick={() => onDelete(id)}>
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
}

