import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  async function formAction(formData: FormData) {
    const query = formData.get("query")?.toString().trim();
    if (!query) {
      toast.error("Введіть пошуковий запит");
      return;
    }
    onSearch(query);
  }

  return (
    <form action={formAction} className={css.form}>
      <input
        type="text"
        name="query"
        className={css.input}
        placeholder="Введіть назву фільму"
      />
      <button type="submit" className={css.button}>
        Пошук
      </button>
    </form>
  );
}
