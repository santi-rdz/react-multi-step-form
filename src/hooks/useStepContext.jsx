import { createContext, useContext } from "react";

export const StepContext = createContext();

export default function useStepContext() {
  return useContext(StepContext);
}
