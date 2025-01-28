import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={s.menuList}>
      {contacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact contacts={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}