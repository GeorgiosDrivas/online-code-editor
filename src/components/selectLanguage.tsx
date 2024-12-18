import { languages } from "../constants";
import { Option } from "../type";

export default function SelectLanguage({
  lng,
  setLanguage,
  toggleMode,
}: {
  lng: Option | null;
  setLanguage: React.Dispatch<React.SetStateAction<Option | null>>;
  toggleMode: boolean;
}) {
  return (
    <select
      id="selected-language"
      className={
        toggleMode
          ? "cursor-pointer h-full me-3 dark"
          : "cursor-pointer h-full me-3 light"
      }
      value={lng?.language}
      onChange={(e) =>
        setLanguage(
          languages.find((item: Option) => item.language === e.target.value) ||
            languages[0]
        )
      }
    >
      {languages.map((option) => (
        <option value={option.language} key={option.id}>
          {option.language}
        </option>
      ))}
    </select>
  );
}
