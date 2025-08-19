import { useContext, createContext } from "react";
export const FormContext = createContext();

export default function useFormContext() {
  return useContext(FormContext);
}
