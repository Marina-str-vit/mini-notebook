import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactLisct";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import defaultContacts from "./assets/defaultContacts.json";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
		}
    return defaultContacts;
  });

  const [filter, setFilter] = useState("");

  const addContact = (newUser) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newUser];
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteUser = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((userContact) =>
    userContact.name.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteUser} />
    </div>
  );
}