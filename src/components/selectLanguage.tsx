import { languages } from "@src/constants";
import { Option } from "@src/type";

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
