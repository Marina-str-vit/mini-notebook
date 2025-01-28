import s from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={s.filter}>
      <p>Find contacts by name</p>
			<input
				className={s.input}
        type="text"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
      />
    </div>
  );
}