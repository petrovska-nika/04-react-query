import { FormEvent } from "react";
import { toast } from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search")?.toString().trim() || "";

    if (!query) {
      toast.error("Введіть запит для пошуку.");
      return;
    }

    onSubmit(query);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="search"
        placeholder="Пошук фільмів"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Шукати
      </button>
    </form>
  );
};
