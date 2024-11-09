import { Dispatch, SetStateAction } from "react";

export interface Option {
  id: number;
  language: string;
  version: string;
}

export interface InputType {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  language: string | undefined;
  toggleMode: boolean;
}

export interface outputType {
  output: string;
  toggleMode: boolean;
}

export interface PropsData {
  lng: Option | null;
  input: string;
  setOutput: Dispatch<React.SetStateAction<string>>;
}
