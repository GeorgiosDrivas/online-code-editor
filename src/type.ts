import { Dispatch, SetStateAction } from "react";

export interface Option {
  id: number;
  language: string;
  version: string;
}

export interface InputType {
  setInput: Dispatch<SetStateAction<string>>;
  language: string | undefined;
  toggleMode: boolean;
}

export interface outputType {
  output: string;
  toggleMode: boolean;
}
