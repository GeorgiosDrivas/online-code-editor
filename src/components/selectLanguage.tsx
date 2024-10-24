import { languages } from "../constants";
import { Option } from "../type";

export default function SelectLanguage({ lng, setLanguage, toggleMode }: any) {
  return (
    <select
      id="selected-language"
      className={toggleMode ? "cursor-pointer dark" : "cursor-pointer light"}
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
