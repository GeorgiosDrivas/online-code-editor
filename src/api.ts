import axios from "axios";
import { Dispatch } from "react";

interface PropsData {
  lng: any;
  input: string;
  setOutput: Dispatch<React.SetStateAction<string>>;
}

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const handleRun = async ({ lng, input, setOutput }: PropsData) => {
  try {
    const response = await API.post("/execute", {
      language: lng?.language,
      version: lng?.version,
      files: [
        {
          name: "code.js",
          content: input,
        },
      ],
    });
    setOutput(response.data.run.output);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
};
