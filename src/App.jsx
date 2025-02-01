import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactLisct";
// import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import defaultTodoList from "./assets/defaultTodoList.json";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("saved-todo");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
		}
    return defaultTodoList;
  });

  // const [filter, setFilter] = useState("");

  const addContact = (newUser) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newUser];
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-todo", JSON.stringify(contacts));
  }, [contacts]);

  const deleteUser = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  // const visibleContacts = contacts.filter((userContact) =>
  //   userContact.text.toLowerCase().includes(filter.toLowerCase())
  // );


  return (
    <div>
      <h1>Notebook</h1>
      <ContactForm onAdd={addContact} />
      <ContactList contacts={contacts} onDelete={deleteUser} />
    </div>
  );
}