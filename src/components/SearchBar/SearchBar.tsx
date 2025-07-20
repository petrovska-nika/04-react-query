import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  async function formAction(formData: FormData) {
    const query = formData.get("query")?.toString().trim();
    if (!query) {
      toast.error("Введіть пошуковий запит");
      return;
    }
    onSubmit(query);
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
